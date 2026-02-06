import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'
import RecentSearches from './components/RecentSearches'
import { getWeather } from './services/weatherApi'

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
    const [unit, setUnit] = useState('C') // 'C' or 'F'

    useEffect(() => {
        const saved = localStorage.getItem('recentSearches')
        if (saved) {
            setRecentSearches(JSON.parse(saved))
        }
    }, [])

    const toggleUnit = () => {
        setUnit(prev => prev === 'C' ? 'F' : 'C')
    }

    const handleSearch = async (city) => {
        setLoading(true)
        setError(null)
        setWeather(null)

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

    const addToRecent = (city) => {
        setRecentSearches(prev => {
            const filtered = prev.filter(c => c.toLowerCase() !== city.toLowerCase())
            const newSearches = [city, ...filtered].slice(0, 5)

            localStorage.setItem('recentSearches', JSON.stringify(newSearches))
            return newSearches
        })
    }

    return (
        <div className={STYLES.container}>
            <div className={STYLES.glassPanel}>
                <header className="relative">
                    <h1 className={STYLES.headerTitle}>Weather Dashboard</h1>
                    <button
                        onClick={toggleUnit}
                        className="absolute top-0 right-0 text-white/70 hover:text-white border border-white/30 rounded-lg px-3 py-1 text-sm transition-colors hover:bg-white/10"
                    >
                        °{unit}
                    </button>
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

                    {weather && !loading && <WeatherCard weather={weather} unit={unit} />}
                </section>

                <footer className="mt-auto pt-4 border-t border-white/10">
                    <RecentSearches searches={recentSearches} onSelect={handleSearch} />
                </footer>
            </div>
        </div>
    )
}

export default App
