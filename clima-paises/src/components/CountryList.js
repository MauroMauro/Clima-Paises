import Country from './Country'

const CountryList = ({ countries, setFilter }) => {
    if (countries.length > 10) {
        return <div>Too many results, specify another character</div>
    }

    if (countries.length === 0) {
        return <div>No results found, check the name entered</div>
    }

    if (countries.length > 1) {
        return (
            <div>
                {countries.map(({ name }) =>
                    <div key={name.common}>
                        <span>{name.common} </span>
                        <button onClick={() => setFilter(name.common)}>Show</button>
                    </div>
                )}
            </div>
        )
    }

    return <Country country={countries[0]} />
}

export default CountryList