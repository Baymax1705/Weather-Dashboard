# Weather Dashboard 🌦️

A beautiful, modern weather application built with React, Vite, and Tailwind CSS. This dashboard provides real-time weather updates with a sleek, glassmorphism-inspired user interface.

## ✨ Features

- **Real-time Weather Data**: Search for any city to get current weather conditions.
- **Recent Searches**: Automatically saves your last 5 searches for quick access (persisted via LocalStorage).
- **Responsive Design**: Fully responsive layout that looks great on desktop and mobile.
- **Modern UI**:
  - Glassmorphism effects (blur, transparency).
  - Dynamic animated gradient background.
  - Smooth loading states and error handling.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: React Hooks (`useState`, `useEffect`)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd weather-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Visit `http://localhost:5173` (or the URL shown in your terminal) to view the app.

## 📂 Project Structure

```
weather-dashboard/
├── src/
│   ├── components/      # UI Components (SearchBar, WeatherCard, etc.)
│   ├── services/        # API services (weatherApi.js)
│   ├── App.jsx          # Main application logic
│   └── index.css        # Global styles & Tailwind directives
├── public/              # Static assets
└── package.json         # Project dependencies and scripts
```

## 🎨 Customization

The application uses Tailwind CSS for styling. You can customize the look and feel by modifying `index.css` or the classes in the components.

- **Background**: The animated gradient is defined in `App.jsx` within the `styles` object.
- **Glass Effect**: The `glassPanel` style class in `App.jsx` controls the card's transparency and blur.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
