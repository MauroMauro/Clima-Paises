

const Weather = ({ weather, city }) => {
    if (weather === null) return null

    const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    return <div>
        <div class="card p-4">
            <h5 class='text-muted'>Current weather in {city}</h5>

            <div class="text-center shadow-sm m-3">
                <span class="display-5">{weather.main.temp}</span>
                <span class="text-muted">°C</span>
                <span>
                    <img class="pb-4" src={icon} alt={`icon for ${weather.weather[0].description}`} />
                </span>
            </div>

            <div class="text-muted fw-ligh">
                <div>
                    Feels like {weather.main.feels_like} Celcius
                </div>
                <div>
                    Min: {weather.main.temp_min} Celcius
                </div>
                <div>
                    Máx: {weather.main.temp_max} Celcius
                </div>
                <div>
                    Preassure: {weather.main.pressure} hPa
                </div>
                <div>
                    Humidity: {weather.main.humidity}%
                </div>
                <div>
                    Visibility: {weather.visibility}mts.
                </div>
                <div>
                    Clouds: {weather.clouds.all}%
                </div>

                <div>
                    Wind: {weather.wind.speed} m/s
                </div>
            </div>



        </div>
    </div>

}

export default Weather