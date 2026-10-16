# 📊 Marks Analyzer

A web-based **Student Performance Analysis Dashboard** built using HTML, CSS, and JavaScript. This project applies fundamental Data Science concepts to analyze student marks, calculate statistical measures, visualize academic performance, and generate meaningful insights.

## ✨ Features

- 📝 **Marks Input:** Enter student details and marks for multiple subjects.
- 📈 **Statistical Analysis:** Calculate total marks, average, percentage, highest marks, and lowest marks.
- 🎓 **Grade Classification:** Assign grades based on a predefined grading scale.
- ✅ **Pass/Fail Analysis:** Calculate the number of subjects passed and failed.
- 📊 **Data Visualization:** Display subject-wise marks using a bar chart.
- 🍩 **Grade Distribution:** Visualize the distribution of grades using a doughnut chart.
- 💡 **Performance Insights:** Identify the strongest and weakest subjects and generate performance summaries.
- 📱 **Responsive Interface:** Adapt the dashboard to desktop and mobile screens.
- ⚠️ **Input Validation:** Reject missing or out-of-range marks.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the web application |
| CSS3 | Styling and responsive dashboard layout |
| JavaScript | Data processing, calculations, and DOM manipulation |
| Chart.js | Interactive data visualization |
| Git & GitHub | Version control and project hosting |

## 📁 Project Structure

```text
marks-analyzer/
├── index.html    # Dashboard structure and input form
├── style.css     # Styling and responsive design
├── script.js     # Statistical analysis and chart generation
└── README.md     # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser, such as Google Chrome or Safari.
- Python 3 installed on your system.
- An active internet connection to load Chart.js from its CDN.

### Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/marks-analyzer.git
```

Replace `YOUR-USERNAME` with your GitHub username.

**2. Navigate to the project folder**

```bash
cd marks-analyzer
```

**3. Start the local development server**

```bash
python3 -m http.server 8000
```

**4. Open the application**

Visit:

```text
http://localhost:8000
```

**5. Analyze student performance**

Enter a student name, select the number of subjects, provide marks between 0 and 100, and click **Analyze Performance**.

The dashboard will calculate statistics, display charts, and generate performance insights.

## 📊 Data Science Concepts Implemented

### 1. Descriptive Statistics

The application calculates:

- **Total Marks:** Sum of marks across all subjects.
- **Average:** Mean marks across the selected subjects.
- **Percentage:** Total marks divided by maximum possible marks, multiplied by 100.
- **Maximum and Minimum:** Highest and lowest subject marks.

### 2. Grade Classification

Marks are converted into grades using the following project-defined scale:

| Marks | Grade |
|---|---|
| 90–100 | A |
| 80–89.99 | B |
| 70–79.99 | C |
| 60–69.99 | D |
| 40–59.99 | E |
| Below 40 | F |

This grading scale is illustrative and can be customized for different academic institutions.

### 3. Data Visualization

- **Bar Chart:** Compares marks across subjects.
- **Doughnut Chart:** Displays the distribution of grades across subjects.

### 4. Performance Insights

The application identifies the strongest and weakest subjects, counts passed and failed subjects, and generates simple recommendations based on the student's performance.

### 5. Data Validation

The application validates marks to ensure they are entered, numeric, and within the range of 0 to 100.

## 🧪 Sample Test Data

| Subject | Marks |
|---|---:|
| Mathematics | 85 |
| Computer Science | 92 |
| Physics | 74 |
| Chemistry | 68 |
| English | 81 |
| **Total** | **400 / 500** |

Expected results:

- **Average:** 80
- **Percentage:** 80%
- **Overall Grade:** B
- **Highest Marks:** 92
- **Lowest Marks:** 68
- **Subjects Passed:** 5
- **Subjects Failed:** 0

## 🔮 Future Improvements

- Import marks from CSV or Excel files.
- Analyze performance for an entire class.
- Calculate median, variance, and standard deviation.
- Compare student performance across multiple exams.
- Add downloadable PDF reports.
- Introduce historical performance tracking.
- Use Python, Pandas, and NumPy for advanced data analysis.
- Add predictive analytics to estimate future performance.

## 🎯 Learning Outcomes

This project demonstrates practical knowledge of:

- Data collection and validation.
- Descriptive statistics and numerical analysis.
- Data transformation and grade classification.
- Data visualization using Chart.js.
- JavaScript arrays, functions, and event handling.
- DOM manipulation and responsive web development.
- Building and documenting a portfolio-ready project.

## 👨‍💻 Author

**Garv Gupta**

CSE (Data Science) Student | VIT Vellore

- GitHub: [@GarvGupta04](https://github.com/GarvGupta04)

⭐ If you find this project useful, consider starring the repository on GitHub!
