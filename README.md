# 🚀 EduStream - Modern Online Learning Platform

EduStream is a high-level, full-stack **MERN** application designed with a sleek **Glassmorphism** aesthetic. It allows students to explore world-class courses, register effortlessly, and enroll in multiple programs with a seamless backend integration.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![MERN](https://img.shields.io/badge/stack-MERN-informational.svg)

---

## ✨ Features

### 🎓 Student Experience
- **Sleek UI/UX:** A modern interface built with Glassmorphism and responsive design.
- **Auto-Registration:** Intelligent registration that extracts names from email addresses.
- **Course Enrollment:** Students can enroll in multiple courses with real-time feedback.
- **Dynamic Exploration:** Interactive course grid with detailed instructor and duration info.

### 🛠 Administrative Control
- **Integrated Admin Portal:** Add new courses directly from the frontend UI.
- **Database Seeder:** Pre-populated with professional courses for immediate high-level presentation.
- **RESTful API:** Clean and modular backend architecture using Express and Mongoose.

---

## 💻 Tech Stack

- **Frontend:** React.js, Vite, Axios, Modern CSS3
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Tooling:** Git, npm, Dotenv

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) running locally

### 1. Clone the repository
```bash
git clone https://github.com/Saad-hassan78/online-learning-platform.git
cd online-learning-platform
```

### 2. Setup the Backend
```bash
cd server
npm install
npm run seed  # This populates the database with professional courses
npm start
```

### 3. Setup the Frontend
```bash
cd ../client
npm install
npx vite
```

---

## 📂 Project Structure

```text
├── client/                # React Frontend
│   ├── src/
│   │   ├── App.jsx        # Main Logic & Beautiful UI
│   │   ├── App.css        # Glassmorphism Styling
│   │   └── main.jsx
├── server/                # Node.js Backend
│   ├── models/            # MongoDB Schemas (Student, Course)
│   ├── controllers/       # Business Logic
│   ├── routes/            # API Endpoints
│   ├── config/            # DB Connection
│   └── utils/             # Database Seeder script
└── README.md
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/courses` | Fetch all available courses |
| **POST** | `/api/courses` | Create a new course (Admin) |
| **POST** | `/api/students` | Register a new student |
| **POST** | `/api/students/enroll` | Enroll a student in a course |
| **GET** | `/api/students/:id` | Get student data with enrolled courses |

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.
