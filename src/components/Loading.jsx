import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-white/80">
            <div className="w-10 h-10 border-4 border-white/10 border-l-white rounded-full animate-spin mb-4"></div>
            <p>Fetching weather...</p>
        </div>
    );
};

export default Loading;
