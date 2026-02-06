import React from 'react';
import { getIconUrl } from '../services/weatherApi';

const STYLES = {
    card: "bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white w-full max-w-sm my-8 shadow-2xl border border-white/20 animate-[fadeIn_0.5s_ease-out]",
    header: "flex justify-between items-center mb-4",
    cityName: "m-0 text-2xl font-semibold",
    description: "mt-1 capitalize text-white/80 text-sm",
    icon: "w-16 h-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]",
    tempContainer: "text-center my-6",
    tempText: "text-6xl m-0 font-bold tracking-tighter",
    statsContainer: "flex justify-between bg-black/10 rounded-2xl p-4 mt-4",
    statItem: "flex flex-col items-center gap-1 flex-1",
    statLabel: "text-xs uppercase tracking-widest text-white/60",
    statValue: "font-semibold text-lg"
};

const WeatherCard = ({ weather }) => {
    // Safety check: if no weather data is passed, don't render anything
    if (!weather) return null;

    const { name, sys, main, weather: weatherDetails, wind } = weather;
    const currentWeather = weatherDetails[0];

    return (
        <div className={STYLES.card}>
            {/* Header: City Name and Icon */}
            <div className={STYLES.header}>
                <div>
                    <h2 className={STYLES.cityName}>{name}, {sys.country}</h2>
                    <p className={STYLES.description}>{currentWeather.description}</p>
                </div>
                <img
                    src={getIconUrl(currentWeather.icon)}
                    alt={currentWeather.description}
                    className={STYLES.icon}
                />
            </div>

            {/* Main Temperature Display */}
            <div className={STYLES.tempContainer}>
                <div className="temp-display">
                    <h1 className={STYLES.tempText}>{Math.round(main.temp)}°C</h1>
                </div>
            </div>

            {/* Footer Stats: Humidity and Wind */}
            <div className={STYLES.statsContainer}>
                <div className={STYLES.statItem}>
                    <span className={STYLES.statLabel}>Humidity</span>
                    <span className={STYLES.statValue}>💧 {main.humidity}%</span>
                </div>
                <div className={STYLES.statItem}>
                    <span className={STYLES.statLabel}>Wind</span>
                    <span className={STYLES.statValue}>💨 {wind.speed} km/h</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
