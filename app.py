
from flask import Flask, request, jsonify, send_from_directory
import pandas as pd
from pathlib import Path

app = Flask(__name__)
BASE_DIR = Path(__file__).resolve().parent


def get_grade(mark):
    if mark >= 90:
        return "A"
    elif mark >= 80:
        return "B"
    elif mark >= 70:
        return "C"
    elif mark >= 60:
        return "D"
    elif mark >= 40:
        return "E"
    return "F"


@app.route("/")
def home():
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/class-analysis")
def class_analysis():
    return send_from_directory(BASE_DIR, "class-analysis.html")


@app.route("/api/analyze-csv", methods=["POST"])
def analyze_csv():
    if "file" not in request.files:
        return jsonify({"error": "Please upload a CSV file."}), 400

    file = request.files["file"]

    if not file.filename.lower().endswith(".csv"):
        return jsonify({"error": "Please upload a .csv file."}), 400

    try:
        df = pd.read_csv(file)

        if df.empty:
            return jsonify({"error": "The CSV file is empty."}), 400

        if "Student" not in df.columns:
            return jsonify({
                "error": "The CSV must contain a Student column."
            }), 400

        if df["Student"].isna().any() or (
            df["Student"].astype(str).str.strip() == ""
        ).any():
            return jsonify({
                "error": "Every student must have a name."
            }), 400

        subject_columns = [
            col for col in df.columns if col != "Student"
        ]

        if not subject_columns:
            return jsonify({
                "error": "Add at least one subject column."
            }), 400

        # Convert all subject marks to numbers.
        for subject in subject_columns:
            df[subject] = pd.to_numeric(
                df[subject], errors="coerce"
            )

        # Reject missing, non-numeric, or out-of-range marks.
        marks = df[subject_columns]

        if marks.isna().any().any():
            return jsonify({
                "error": "All marks must be valid numbers."
            }), 400

        if ((marks < 0) | (marks > 100)).any().any():
            return jsonify({
                "error": "Marks must be between 0 and 100."
            }), 400

        # Calculate each student's results.
        df["Total"] = marks.sum(axis=1)
        df["Average"] = marks.mean(axis=1).round(2)
        df["Grade"] = df["Average"].apply(get_grade)

        # A student passes only if every subject mark is at least 40.
        df["Result"] = marks.ge(40).all(axis=1).map({
            True: "Pass",
            False: "Fail"
        })

        # Class-wide statistics based on student averages.
        averages = df["Average"]

        # Calculate statistics for each subject.
        subject_stats = []
        for subject in subject_columns:
            values = df[subject]

            subject_stats.append({
                "subject": subject,
                "average": round(float(values.mean()), 2),
                "median": round(float(values.median()), 2),
                "std_dev": round(float(values.std(ddof=0)), 2),
                "highest": float(values.max()),
                "lowest": float(values.min()),
                "pass_percentage": round(
                    float(values.ge(40).mean() * 100), 2
                )
            })

        highest_student = df.loc[averages.idxmax()]
        lowest_student = df.loc[averages.idxmin()]

        students = []
        for _, row in df.iterrows():
            students.append({
                "name": str(row["Student"]),
                "total": round(float(row["Total"]), 2),
                "average": round(float(row["Average"]), 2),
                "grade": row["Grade"],
                "result": row["Result"]
            })

        result = {
            "student_count": int(len(df)),
            "subject_count": int(len(subject_columns)),
            "class_average": round(float(averages.mean()), 2),
            "median_average": round(float(averages.median()), 2),
            "std_dev": round(float(averages.std(ddof=0)), 2),
            "pass_percentage": round(
                float(df["Result"].eq("Pass").mean() * 100), 2
            ),
            "highest_student": {
                "name": str(highest_student["Student"]),
                "average": round(float(highest_student["Average"]), 2)
            },
            "lowest_student": {
                "name": str(lowest_student["Student"]),
                "average": round(float(lowest_student["Average"]), 2)
            },
            "subjects": subject_stats,
            "students": students
        }

        return jsonify(result)

    except Exception:
        return jsonify({
            "error": "Unable to read this CSV. Check its format and try again."
        }), 400

@app.route("/<path:filename>")
def project_files(filename):
    return send_from_directory(BASE_DIR, filename)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
