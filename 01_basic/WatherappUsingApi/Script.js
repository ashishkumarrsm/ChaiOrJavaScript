
// http://api.weatherapi.com/v1/current.json?key=b6f6b735a7834e0eb4a74638251103&q=${cityName}&aqi=yes

// Get DOM elements
const button = document.getElementById('search-btn');
const input = document.getElementById('city-input');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const weatherIcon = document.getElementById('weather-icon');
const errorMessage = document.getElementById('error-message');
const loadingIndicator = document.getElementById('loading');
const weatherInfo = document.querySelector('.weather-info');

// Function to fetch weather data
async function getdata(city) {
    try {
        // Show loading indicator and hide error
        loadingIndicator.style.display = 'block';
        errorMessage.style.display = 'none';
        weatherInfo.style.opacity = '0.5';
        
        // Replace with your actual API key and endpoint
        const apiKey = 'b6f6b735a7834e0eb4a74638251103';
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        
        // Hide loading indicator and show weather info
        loadingIndicator.style.display = 'none';
        weatherInfo.style.opacity = '1';
        
        return data;
    } catch (error) {
        // Handle errors
        loadingIndicator.style.display = 'none';
        errorMessage.style.display = 'block';
        weatherInfo.style.opacity = '0.5';
        console.error('Error fetching weather data:', error);
    }
}

// Event listener for search button
button.addEventListener('click', async () => {
    const value = input.value.trim();
    if (!value) return;
    
    const result = await getdata(value);
    if (result) {
        // Update UI with weather data
        cityName.innerHTML = `${result.location.name}, ${result.location.region}`;
        humidity.innerHTML = `${result.current.humidity}%`;
        temperature.innerHTML = `${result.current.temp_c}°C`;
        windSpeed.innerHTML = `${result.current.wind_kph} km/h`;
        
        // Update weather icon
        const iconCode = result.current.condition.icon;
        weatherIcon.src = `https:${iconCode}`;
        
        // Add animation class to refresh the animation
        weatherIcon.classList.remove('animate');
        void weatherIcon.offsetWidth; // Trigger reflow
        weatherIcon.classList.add('animate');
    }
});

// Event listener for Enter key
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        button.click();
    }
});

// Initial animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.container').style.opacity = '1';
    }, 300);
});