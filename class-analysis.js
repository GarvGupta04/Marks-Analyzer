
const uploadForm = document.getElementById("uploadForm");
const csvFile = document.getElementById("csvFile");
const statusText = document.getElementById("status");
const results = document.getElementById("results");

let subjectChart = null;
let studentChart = null;

uploadForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const file = csvFile.files[0];

    if (!file) {
        statusText.textContent = "Please select a CSV file.";
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    statusText.style.color = "#2457d6";
    statusText.textContent = "Analyzing your data...";
    results.hidden = true;

    try {
        const response = await fetch("/api/analyze-csv", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Analysis failed.");
        }

        displayResults(data);
        statusText.style.color = "#16803c";
        statusText.textContent = "Analysis completed successfully!";
        results.hidden = false;
    } catch (error) {
        statusText.style.color = "#b42318";
        statusText.textContent = error.message;
    }
});

function displayResults(data) {
    document.getElementById("studentCount").textContent =
        data.student_count;

    document.getElementById("subjectCount").textContent =
        data.subject_count;

    document.getElementById("classAverage").textContent =
        data.class_average.toFixed(2);

    document.getElementById("medianAverage").textContent =
        data.median_average.toFixed(2);

    document.getElementById("stdDev").textContent =
        data.std_dev.toFixed(2);

    document.getElementById("passRate").textContent =
        `${data.pass_percentage}%`;

    // Build the insights list.
    const insights = document.getElementById("insights");
    insights.replaceChildren();

    const messages = [
        `Highest average: ${data.highest_student.name} (${data.highest_student.average}).`,
        `Lowest average: ${data.lowest_student.name} (${data.lowest_student.average}).`,
        `Class median average: ${data.median_average}.`,
        `Population standard deviation: ${data.std_dev}.`,
        `Overall class pass rate: ${data.pass_percentage}%.`
    ];

    messages.forEach(function (message) {
        const item = document.createElement("li");
        item.textContent = message;
        insights.appendChild(item);
    });

    // Fill the subject statistics table.
    const subjectTable = document.getElementById("subjectTable");
    subjectTable.replaceChildren();

    data.subjects.forEach(function (subject) {
        const row = document.createElement("tr");

        [
            subject.subject,
            subject.average,
            subject.median,
            subject.std_dev,
            subject.highest,
            subject.lowest,
            `${subject.pass_percentage}%`
        ].forEach(function (value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        subjectTable.appendChild(row);
    });

    // Fill the student results table.
    const studentTable = document.getElementById("studentTable");
    studentTable.replaceChildren();

    data.students.forEach(function (student) {
        const row = document.createElement("tr");

        [
            student.name,
            student.total,
            student.average,
            student.grade,
            student.result
        ].forEach(function (value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        studentTable.appendChild(row);
    });

    drawCharts(data);
}

function drawCharts(data) {
    if (subjectChart) {
        subjectChart.destroy();
    }

    if (studentChart) {
        studentChart.destroy();
    }

    subjectChart = new Chart(
        document.getElementById("subjectChart"),
        {
            type: "bar",
            data: {
                labels: data.subjects.map(item => item.subject),
                datasets: [{
                    label: "Average marks",
                    data: data.subjects.map(item => item.average)
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

    studentChart = new Chart(
        document.getElementById("studentChart"),
        {
            type: "bar",
            data: {
                labels: data.students.map(item => item.name),
                datasets: [{
                    label: "Student average",
                    data: data.students.map(item => item.average)
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
}
