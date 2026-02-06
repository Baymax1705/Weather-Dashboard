const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Fallback weather data.
 * We use this when no API key is provided so you can still
 * see how the UI looks and feels without needing to sign up immediately.
 */
const mockWeather = {
  name: "San Francisco",
  sys: { country: "US" },
  main: {
    temp: 18,
    humidity: 65
  },
  weather: [
    {
      main: "Clouds",
      description: "partly cloudy",
      icon: "02d"
    }
  ],
  wind: { speed: 12 }
};

export const getWeather = async (city) => {
  // 1. Check if we have an API key. If not, use the mock mode.
  if (!API_KEY) {
    console.warn("⚠️ No API key found. Using Mock Data mode.");
    console.info("To use real data, add VITE_WEATHER_API_KEY to your .env file.");

    // Simulate a fake network delay to make it feel realistic
    await new Promise(resolve => setTimeout(resolve, 800));

    // Easter egg: You can type "fail" to test the error state!
    if (city.toLowerCase() === "fail") {
      throw new Error("City not found (Mock error)");
    }

    // Return the mock data, but dynamically update the city name
    // so it feels like it's actually working.
    return {
      ...mockWeather,
      name: city.charAt(0).toUpperCase() + city.slice(1)
    };
  }

  // 2. We have a key! Let's fetch real data.
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found. Please try another one.");
      }
      throw new Error("Oops! Something went wrong fetching the weather.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Re-throw to let the UI handle the error display
    throw error;
  }
};

export const getIconUrl = (iconCode) => {
  // Returns the official OpenWeatherMap icon URL
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
