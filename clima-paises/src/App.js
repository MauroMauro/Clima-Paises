import axios from 'axios'
import { useState, useEffect } from 'react'
import CountryList from './components/CountryList'



const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(({ data }) => {
      setCountries(data)
    })
  }, [])

  const filtered = countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))

  return <div class="container">
    
    <div class="pt-5">
      <h5 class="text-muted">Enter country name</h5>
      <input
        type="text"
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      />
    </div>
    <CountryList
      countries={filtered}
      setFilter={setFilter}
    />
  </div>
}

export default App