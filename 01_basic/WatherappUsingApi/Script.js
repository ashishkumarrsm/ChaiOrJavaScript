

// Get DOM Elements
const button = document.getElementById('search-btn')
const input = document.getElementById('city-input')
const cityName = document.getElementById('cityName')
const Humidity = document.getElementById('humidity')
const windspped = document.getElementById('wind-speed')
const temprater = document.getElementById('temperature')


 document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('search-btn').click()
    }
})

// Function to fetch data from API
async function getdata(cityName) {
    try {
        if (!input) {
            throw new Error('Please enter a city name')
        } else {
            const responce = await fetch(`http://api.weatherapi.com/v1/current.json?key=b6f6b735a7834e0eb4a74638251103&q=${cityName}&aqi=yes`)

            return await responce.json()

        }

    } catch (e) {
        console.log('error', e);

    }
}
getdata()


// Event listener for button click

button.addEventListener('click', async () => {

    const value = input.value
    const result = await getdata(value)
    cityName.innerHTML = `${result.location.name}, ${result.location.region}`
    Humidity.innerHTML = `${result.current.heatindex_c}`
    temprater.innerHTML = `${result.current.temp_c}`
    windspped.innerHTML = `${result.current.wind_mph}`
})
