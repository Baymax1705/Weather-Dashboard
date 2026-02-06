import React from 'react';

const STYLES = {
    container: "w-full max-w-sm mt-auto pt-4 border-t border-white/10",
    title: "text-white/80 text-sm mb-2.5 font-normal",
    list: "flex flex-wrap gap-2",
    chip: "bg-white/15 border-none px-3 py-1.5 rounded-full text-white cursor-pointer text-sm transition-colors hover:bg-white/25"
};

const RecentSearches = ({ searches, onSelect }) => {
    // Don't render anything if there are no searches
    if (!searches || searches.length === 0) return null;

    return (
        <div className={STYLES.container}>
            <h3 className={STYLES.title}>Recent Searches</h3>
            <div className={STYLES.list}>
                {searches.map((city, index) => (
                    <button
                        key={`${city}-${index}`}
                        className={STYLES.chip}
                        onClick={() => onSelect(city)}
                    >
                        {city}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RecentSearches;
