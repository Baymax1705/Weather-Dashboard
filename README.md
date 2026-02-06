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

## ✅ Implemented Features (Assignment Requirements)

- [x] **Weather Dashboard**: Clean and user-friendly interface.
- [x] **City Search**: Input field to query weather by city name.
- [x] **API Integration**: Fetches real-time data from OpenWeatherMap.
- [x] **Toggle Units**: Switch between Celsius and Fahrenheit.
- [x] **Persistent Data**: Recent searches are saved to LocalStorage.
- [x] **Error Handling**: Displays messages for invalid cities or network errors.
- [x] **Responsive Design**: Optimized for mobile and desktop screens.

## 🏆 Implemented Bonus Features (Optional)

Based on the assignment's bonus list:

- [x] **Toggle between Celsius and Fahrenheit**: Implemented via a toggle button in the header.
- [x] **Dark mode**: The application uses a modern dark glassmorphism theme by default.
- [x] **Save recent searches to localStorage**: Validated and working for the last 5 searches.
- [x] **Weather-based background or theme**: Implemented dynamic gradient backgrounds.


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

3. **Configure API Key**:
   > **Note for Reviewers**: You will need your own OpenWeatherMap API key to run this project.
   
   Create a `.env` file in the root directory and add your key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
   *(If you do not have a key, you can use the Mock Mode by leaving the variable empty, though features will be limited).*

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   Visit `http://localhost:5173` (or the URL shown in your terminal) to view the app.

## ⏱️ Time Spent

Approximately **2 hours** were spent on this assignment, covering:
- Project setup with Vite & Tailwind CSS.
- Component architecture design.
- API integration and error handling.
- UI/UX polishing (Glassmorphism, Animations).
- Implementing value-add features (Unit toggle, Recent searches).

## 🚀 Future Improvements

If I had more time, I would improve the following:
1.  **5-Day Forecast**: Extend the API integration to show upcoming weather, not just current conditions.
2.  **Unit Tests**: Add Jest/Vitest testing for critical utilities like temperature conversion and API handlers.
3.  **Geolocation**: Automatically detect the user's location on startup.
4.  **Dark/Light Mode**: Although the current theme is static, a toggle for a light glass theme would be a nice addition.
5.  **Accessibility**: Improve ARIA labels and keyboard navigation for better a11y support.

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

