# 📝 MCQ Exam System

A simple, elegant MCQ (Multiple Choice Questions) examination system built for teachers and students. No server required — runs entirely in the browser using localStorage.

![Made with Lovable](https://img.shields.io/badge/Made%20with-Lovable-ff69b4)
![React](https://img.shields.io/badge/React-18-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

---

## ✨ Features

### 👩‍🏫 For Teachers
- **Create Tests** — Add questions with 4 options (A/B/C/D) and set time limits
- **Publish/Unpublish** — Control when tests are visible to students
- **Export Tests** — Download tests as JSON files to share
- **View Results** — See all student scores with pass/fail status
- **Delete Results** — Clear all results with one click

### 👨‍🎓 For Students
- **Take Tests** — Attempt published tests with a countdown timer
- **Import Tests** — Import JSON test files shared by teachers
- **Instant Results** — See your score immediately after submission
- **Review Answers** — View correct answers after completing a test
- **Track Progress** — See which tests you've completed and your scores

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd mcq-exam-system

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🔐 Login Credentials

### Teacher Account
| Username | Password |
|----------|----------|
| `evana`  | `3996`   |

### Student Accounts
| Username  | Password |
|-----------|----------|
| `khalid`  | `3996`   |
| `jubayer` | `3996`   |

---

## 📁 Project Structure

```
src/
├── components/ui/     # Reusable UI components (shadcn/ui)
├── lib/
│   ├── data.ts        # Data models, localStorage helpers, auth
│   └── utils.ts       # Utility functions
├── pages/
│   ├── Index.tsx          # Login page
│   ├── TeacherDashboard.tsx   # Teacher panel
│   ├── StudentDashboard.tsx   # Student panel
│   └── ExamPage.tsx       # Test-taking interface
└── hooks/             # Custom React hooks
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool |
| **Tailwind CSS** | Styling |
| **shadcn/ui** | Component Library |
| **localStorage** | Data Persistence |
| **React Router** | Navigation |

---

## 📤 Import/Export Tests

### Exporting (Teacher)
1. Go to **Tests** tab
2. Click the **Download** icon next to any test
3. A `.json` file will be downloaded

### Importing (Student)
1. Go to **Student Dashboard**
2. Click **Import Test** button
3. Select the `.json` file
4. Test will appear in available tests

---

## 🎨 Screenshots

### Login Page
Clean, minimal login interface with role-based authentication.

### Teacher Dashboard
- Create new tests with multiple questions
- Manage published/unpublished tests
- View student results and statistics

### Student Dashboard
- Browse available tests
- See completion status and scores
- Import shared tests

### Exam Interface
- Timer countdown
- Question navigation
- Instant scoring with answer review

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💖 Acknowledgments

Made with ❤️ by [lovable.dev](https://lovable.dev)
