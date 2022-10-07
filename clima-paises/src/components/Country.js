import axios from 'axios'
import { useState, useEffect } from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
    const [weather, setWeather] = useState(null)
    const languages = Object.values(country.languages)
    const capital = country.capital[0]

    useEffect(() => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=03510dcbbd2767d5a737a8ef991f5f1d&units=metric`
        axios.get(url).then(({ data }) => {
            setWeather(data)
        })
    }, [])


    return <div>
        <div class="container p-5">

            <div class="card" >
                <h4 class="card-header">{country.name.common}</h4>

                <div class="card-body" >
                    <div>
                        <div class="row">

                            <div class="col-md-6 p-3 text-center">
                                <div class="row shadow-sm p-3">
                                    <div class="col-md-6 text-start">
                                        <div>Capital: {capital} </div>
                                        <div>Area: {country.area} kms. </div>
                                        <div>Population: {country.population} </div>

                                        <div>Languages:</div>
                                        <ul>
                                            {languages.map(language =>
                                                <li class="text-muted" key={language}>
                                                    {language}
                                                </li>
                                            )}
                                        </ul>
                                        <div><a href={country.maps.googleMaps}>Country Map</a></div>


                                    </div>
                                    <div class="col-md-6 text-center">
                                        <img
                                            src={country.coatOfArms.png}
                                            alt={`Coat of ${country.name.common}`}
                                            width={80}
                                        />
                                    </div>

                                </div>

                                <div class="container text-center p-3">
                                <img
                                    class="shadow"
                                    src={country.flags.png}
                                    alt={`Flag of ${country.name.common}`}
                                    width={200}
                                />
                                </div>
                                



                            </div>
                            <div class="col-md-6 text-center">
                                <Weather weather={weather} city={capital} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}



export default Country