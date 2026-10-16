# 📊 Marks Analyzer Pro

**Live Demo:** [Try Marks Analyzer Pro](https://marks-analyzer-d2rv.onrender.com/)  
**GitHub Repository:** [GarvGupta04/Marks-Analyzer](https://github.com/GarvGupta04/Marks-Analyzer)

Marks Analyzer Pro is a full-stack student performance analysis web application that combines **web development, data visualization, and data science** to analyze individual student marks and entire classes.

Users can enter marks manually or upload a CSV file containing multiple students' marks to generate performance reports, statistical insights, and subject-wise comparisons.

## 🚀 Features

### 👤 Individual Student Analysis
- Enter student details and subject marks.
- Calculate total marks, average, and percentage.
- Determine grades and pass/fail status.
- Identify the highest and lowest marks.
- Visualize individual performance using charts.

### 📁 Class-Level Analysis
- Upload CSV files containing multiple students' marks.
- Analyze multiple students and subjects simultaneously.
- Calculate class average, median, and standard deviation.
- Identify students with the highest and lowest averages.
- Calculate the overall class pass percentage.
- Generate subject-wise statistics, including average, median, highest mark, lowest mark, and pass rate.
- Display student results in a structured table.

### 📈 Data Visualization
- Compare average marks across subjects.
- Compare student averages using bar charts.
- View key performance indicators in a dashboard.
- Update results when a new CSV file is uploaded.

### ✅ Data Validation
- Validate uploaded CSV files.
- Check student names and subject columns.
- Reject missing, non-numeric, or out-of-range marks.
- Display error messages for invalid input.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Webpage structure |
| CSS3 | Styling and responsive design |
| JavaScript | Frontend logic and API communication |
| Chart.js | Interactive data visualization |
| Python | Backend processing |
| Flask | Web server and API development |
| Pandas | CSV processing and statistical analysis |
| Gunicorn | Production application server |
| CSV | Student marks data format |
| GitHub | Version control and source code hosting |
| Render | Application deployment and hosting |

## 🌐 Live Application

Try the deployed application:

- **Main Analyzer:** [Open Marks Analyzer Pro](https://marks-analyzer-d2rv.onrender.com/)
- **Class Analysis Dashboard:** [Analyze an Entire Class](https://marks-analyzer-d2rv.onrender.com/class-analysis)

*Note: The free hosting service may take some time to respond after a period of inactivity.*

## 📂 Project Structure

```text
Marks-Analyzer/
│
├── index.html              # Individual marks analyzer
├── style.css               # Main application styling
├── script.js               # Individual analysis logic
│
├── class-analysis.html     # Class analysis dashboard
├── class-analysis.css      # Class dashboard styling
├── class-analysis.js       # CSV upload and charts
│
├── app.py                  # Flask backend and analysis API
├── requirements.txt        # Python dependencies
├── sample_marks.csv        # Sample student dataset
└── README.md               # Project documentation
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/GarvGupta04/Marks-Analyzer.git
cd Marks-Analyzer
```

Alternatively, download the repository as a ZIP file from GitHub and extract it.

### 2. Check Python installation

```bash
python3 --version
```

Python 3 must be installed on your system.

### 3. Create a virtual environment (recommended)

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 4. Install dependencies

```bash
python3 -m pip install -r requirements.txt
```

The `requirements.txt` file should include Flask, Pandas, and Gunicorn.

### 5. Start the application

```bash
python3 app.py
```

### 6. Open the application

Visit these addresses in your browser:

- Main application: `http://localhost:5000`
- Class analysis dashboard: `http://localhost:5000/class-analysis`

**Note:** Keep the Terminal running while using the application locally.

## 📄 CSV File Format

The uploaded CSV must contain a `Student` column followed by one or more subject columns.

Example:

```csv
Student,Mathematics,Computer Science,Physics,Chemistry,English
Aarav Sharma,85,92,74,68,81
Diya Patel,91,88,95,90,94
Kabir Mehta,45,52,39,48,50
Anaya Singh,32,55,41,38,60
Ishaan Rao,76,81,69,72,78
```

### CSV Requirements
- Use `Student` as the first column header.
- Use numeric marks between 0 and 100.
- Ensure every student has a name.
- Ensure every mark is valid and present.
- Save the file in CSV format.

## 📊 Statistical Analysis

| Metric | Description |
|---|---|
| Total Marks | Sum of a student's subject marks |
| Average | Mean of a student's marks |
| Median | Middle value of sorted observations |
| Standard Deviation | Measures the spread of values |
| Highest and Lowest Marks | Maximum and minimum values |
| Pass Percentage | Percentage of students passing all subjects |
| Subject Average | Mean mark obtained in a particular subject |

The class median and standard deviation are calculated using student averages. Subject-level statistics use marks obtained in each subject. The application uses population standard deviation for class and subject analysis.

## 🏆 Grading System

| Average Marks | Grade |
|---|---|
| 90–100 | A |
| 80–89.99 | B |
| 70–79.99 | C |
| 60–69.99 | D |
| 40–59.99 | E |
| Below 40 | F |

A student passes only when they score at least 40 marks in every subject.

*These are configurable project rules, not a universal grading standard.*

## 🧪 Sample Results

For the included five-student sample dataset, the class analyzer should report approximately:

| Metric | Expected Result |
|---|---:|
| Total Students | 5 |
| Number of Subjects | 5 |
| Class Average | 67.76 |
| Median Student Average | 75.20 |
| Class Pass Rate | 60% |
| Highest Student Average | Diya Patel — 91.60 |
| Lowest Student Average | Anaya Singh — 45.20 |

## 🧠 Data Science Concepts Demonstrated

- Data collection and CSV ingestion
- Data cleaning and input validation
- Exploratory Data Analysis (EDA)
- Descriptive statistics
- Mean, median, and standard deviation
- Subject-wise and student-wise comparisons
- Data visualization
- Basic performance insights
- Backend API development and JSON communication

## 🔮 Future Improvements

- Export analysis reports to CSV and Excel.
- Generate downloadable PDF reports.
- Add histograms and grade-distribution charts.
- Compare performance across multiple examinations.
- Support larger datasets and class-wise filtering.
- Add student performance trends over time.
- Introduce more advanced statistical methods.
- Explore predictive analytics to identify students who may need additional academic support.

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Building interactive web applications.
- Connecting a JavaScript frontend to a Python backend.
- Developing API endpoints using Flask.
- Processing datasets using Pandas.
- Applying statistical methods to student performance data.
- Visualizing data using Chart.js.
- Deploying a full-stack application using Render.
- Organizing and documenting a software project.

## 👨‍💻 Author

**Garv Gupta**  
B.Tech CSE — Data Science  
VIT Vellore

- GitHub: [GarvGupta04](https://github.com/GarvGupta04)
- Project Repository: [Marks-Analyzer](https://github.com/GarvGupta04/Marks-Analyzer)
- Live Demo: [Marks Analyzer Pro](https://marks-analyzer-d2rv.onrender.com/)

## 📜 License

This project was developed for educational purposes and to demonstrate web development and data analysis skills. A formal open-source license can be added if the project is distributed for reuse.
