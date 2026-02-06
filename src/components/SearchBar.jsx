import React, { useState } from 'react';

const STYLES = {
    form: "flex gap-2.5 w-full max-w-md",
    input: "flex-1 px-5 py-3 rounded-full border border-white/10 bg-white/20 backdrop-blur-sm text-white text-base outline-none transition-all placeholder:text-white/60 focus:bg-white/30 focus:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    button: "px-6 py-3 rounded-full border-none bg-white text-gray-800 font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
};

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Prevent empty searches
        if (city.trim()) {
            onSearch(city.trim());
            setCity(''); // Clear input after search
        }
    };

    return (
        <form className={STYLES.form} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={STYLES.input}
            />
            <button
                type="submit"
                className={STYLES.button}
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
