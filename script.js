
const form = document.getElementById("marks-form");
const subjectCount = document.getElementById("subject-count");
const subjectsContainer = document.getElementById("subjects-container");
const errorMessage = document.getElementById("error-message");
const results = document.getElementById("results");

let marksChart = null;
let gradeChart = null;

// Create subject and marks inputs dynamically.
function createSubjectInputs() {
    const count = Number(subjectCount.value);

    subjectsContainer.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        const group = document.createElement("div");

        const label = document.createElement("label");
        label.htmlFor = `subject-${i}`;
        label.textContent = `Subject ${i} Marks`;

        const input = document.createElement("input");
        input.type = "number";
        input.id = `subject-${i}`;
        input.placeholder = "Enter marks (0-100)";
        input.min = "0";
        input.max = "100";
        input.step = "any";
        input.required = true;

        group.append(label, input);
        subjectsContainer.appendChild(group);
    }
}

// Convert marks into grades using a defined grading scale.
function getGrade(mark) {
    if (mark >= 90) return "A";
    if (mark >= 80) return "B";
    if (mark >= 70) return "C";
    if (mark >= 60) return "D";
    if (mark >= 40) return "E";
    return "F";
}

// Generate the input fields when the page opens.
createSubjectInputs();

subjectCount.addEventListener("change", createSubjectInputs);

// Analyze marks when the form is submitted.
form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMessage.textContent = "";

    const studentName =
        document.getElementById("student-name").value.trim();

    const count = Number(subjectCount.value);
    const marks = [];

    for (let i = 1; i <= count; i++) {
        const input = document.getElementById(`subject-${i}`);
        const mark = Number(input.value);

        if (
            input.value.trim() === "" ||
            !Number.isFinite(mark) ||
            mark < 0 ||
            mark > 100
        ) {
            errorMessage.textContent =
                "Enter valid marks between 0 and 100 for every subject.";
            return;
        }

        marks.push(mark);
    }

    // DATA ANALYSIS: Calculate descriptive statistics.
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / count;
    const percentage = (total / (count * 100)) * 100;
    const highest = Math.max(...marks);
    const lowest = Math.min(...marks);

    const passed = marks.filter(mark => mark >= 40).length;
    const failed = count - passed;

    // Classify the overall average.
    const overallGrade = getGrade(average);

    document.getElementById("student-heading").textContent =
        `${studentName}'s Performance Dashboard`;

    document.getElementById("total-marks").textContent =
        `${Number(total.toFixed(2))} / ${count * 100}`;

    document.getElementById("average-marks").textContent =
        average.toFixed(2);

    document.getElementById("percentage").textContent =
        `${percentage.toFixed(2)}%`;

    document.getElementById("overall-grade").textContent =
        overallGrade;

    // Create an array of subject grades.
    const grades = marks.map(mark => getGrade(mark));

    const gradeCounts = {
        A: grades.filter(grade => grade === "A").length,
        B: grades.filter(grade => grade === "B").length,
        C: grades.filter(grade => grade === "C").length,
        D: grades.filter(grade => grade === "D").length,
        E: grades.filter(grade => grade === "E").length,
        F: grades.filter(grade => grade === "F").length
    };

    // Show useful performance insights.
    const strongest = marks.indexOf(highest) + 1;
    const weakest = marks.indexOf(lowest) + 1;

    const insights = [
        `Highest mark: Subject ${strongest} (${highest}).`,
        `Lowest mark: Subject ${weakest} (${lowest}).`,
        `You passed ${passed} out of ${count} subjects.`,
        `You failed ${failed} out of ${count} subjects.`,
        average >= 75
            ? "Great performance! Your average is at least 75."
            : "Focus on improving your overall average.",
        failed > 0
            ? "Give extra attention to subjects scoring below 40."
            : "You passed every subject!"
    ];

    const insightsList = document.getElementById("insights-list");
    insightsList.innerHTML = "";

    insights.forEach(insight => {
        const item = document.createElement("li");
        item.textContent = insight;
        insightsList.appendChild(item);
    });

    // Destroy old charts before creating new ones.
    if (marksChart) marksChart.destroy();
    if (gradeChart) gradeChart.destroy();

    // VISUALIZATION 1: Compare marks across subjects.
    marksChart = new Chart(
        document.getElementById("marks-chart"),
        {
            type: "bar",
            data: {
                labels: marks.map((_, i) => `Subject ${i + 1}`),
                datasets: [{
                    label: "Marks out of 100",
                    data: marks,
                    backgroundColor: "#3b82f6",
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        }
    );

    // VISUALIZATION 2: Show the distribution of subject grades.
    gradeChart = new Chart(
        document.getElementById("grade-chart"),
        {
            type: "doughnut",
            data: {
                labels: Object.keys(gradeCounts),
                datasets: [{
                    data: Object.values(gradeCounts),
                    backgroundColor: [
                        "#16a34a",
                        "#84cc16",
                        "#eab308",
                        "#f97316",
                        "#f43f5e",
                        "#64748b"
                    ]
                }]
            },
            options: {
                responsive: true
            }
        }
    );

    results.classList.remove("hidden");
});
