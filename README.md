# 📝 Modern Task Manager (Glassmorphism UI)

![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Deployed-success?style=for-the-badge)

A modern, high-performance Todo List application built with **React 18**. This project goes beyond basic CRUD functionality by implementing a **Glassmorphism UI**, advanced filtering logic, and significant performance optimizations.

### 🔗 [Click here to Try the Live Demo](https://yorberr.github.io/Modern-task-manager)
---

## ✨ Key Features

### 🎨 UI/UX Experience
* **Glassmorphism Design:** A modern aesthetic using backdrop-filters, gradients, and translucency.
* **Responsive Layout:** Fully adaptive interface for Mobile and Desktop.
* **Visual Feedback:** Smooth animations for adding/deleting tasks and progress indicators.
* **Real-time Stats:** Visual dashboard showing completion rates.

### ⚙️ Core Functionality
* **Smart Search:** Filter tasks instantly by text content.
* **Status Filters:** Toggle between All, Active, and Completed views.
* **Data Persistence:** Uses `LocalStorage` to save user data between sessions.
* **Input Validation:** Prevents empty tasks and handles character limits.

---

## ⚡ Engineering & Performance (Changelog)

This project has undergone several refactoring cycles to improve performance and code quality:

### 🚀 Optimization Highlights
* **Performance Boost:** Optimized rendering logic, reducing initial load time from **3s to ~1s**.
* **Rerender Control:** Implemented `useEffect` dependencies correctly to avoid memory leaks.
* **Unique IDs:** Refactored ID generation to prevent collisions in the task list.

### 🐛 Bug Fixes
* Fixed deletion logic (switched from *text-based* to *ID-based* deletion).
* Corrected task filtering algorithms for accurate stats.

---

## 🛠️ Tech Stack

* **Framework:** React 18 (Functional Components & Hooks)
* **Styling:** CSS3 (Custom Glassmorphism implementation)
* **State Management:** React `useState` & `useEffect`
* **Deployment:** GitHub Pages

---

## 🚀 Installation & Usage

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YorberR/modern-task-manager.git](https://github.com/YorberR/modern-task-manager.git)
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run in development mode**
    ```bash
    npm start
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🤝 Contributing

Contributions are welcome!
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.