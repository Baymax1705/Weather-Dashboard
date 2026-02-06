import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'
import RecentSearches from './components/RecentSearches'
import { getWeather } from './services/weatherApi'

// Style constants for cleaner JSX
const STYLES = {
    container: "min-h-screen flex justify-center items-center p-5 bg-gradient-to-br from-[#00feba] via-[#5b548a] to-[#1f1f1f] bg-[length:400%_400%] animate-gradient",
    glassPanel: "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-lg min-h-[600px] flex flex-col shadow-2xl",
    headerTitle: "text-white text-center mb-8 font-extralight uppercase tracking-widest text-2xl",
    errorBox: "text-[#ff6b6b] bg-black/30 px-5 py-2.5 rounded-lg mt-4 border border-[#ff6b6b4d]"
}

function App() {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [recentSearches, setRecentSearches] = useState([])

    // Load search history from local storage on startup
    useEffect(() => {
        const saved = localStorage.getItem('recentSearches')
        if (saved) {
            setRecentSearches(JSON.parse(saved))
        }
    }, [])

    const handleSearch = async (city) => {
        setLoading(true)
        setError(null)
        setWeather(null) // Reset weather while fetching new data

        try {
            const data = await getWeather(city)
            setWeather(data)
            addToRecent(city)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    // Add city to history, keeping only unique recent 5 imports
    const addToRecent = (city) => {
        setRecentSearches(prev => {
            // Filter out existing entry to avoid duplicates (case-insensitive)
            const filtered = prev.filter(c => c.toLowerCase() !== city.toLowerCase())
            // Add new city to the top and keep only the last 5
            const newSearches = [city, ...filtered].slice(0, 5)

            // Save to persistence
            localStorage.setItem('recentSearches', JSON.stringify(newSearches))
            return newSearches
        })
    }

    return (
        <div className={STYLES.container}>
            <div className={STYLES.glassPanel}>
                <header>
                    <h1 className={STYLES.headerTitle}>Weather Dashboard</h1>
                </header>

                <section className="flex justify-center mb-8">
                    <SearchBar onSearch={handleSearch} />
                </section>

                <section className="flex-1 flex flex-col items-center justify-center">
                    {error && (
                        <div className={STYLES.errorBox}>
                            {error}
                        </div>
                    )}

                    {loading && <Loading />}

                    {weather && !loading && <WeatherCard weather={weather} />}
                </section>

                <footer className="mt-auto pt-4 border-t border-white/10">
                    <RecentSearches searches={recentSearches} onSelect={handleSearch} />
                </footer>
            </div>
        </div>
    )
}

export default App
