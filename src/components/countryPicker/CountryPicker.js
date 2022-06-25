import React, { useEffect, useState } from 'react'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../Api'
import { NativeSelect, FormControl } from '@material-ui/core'

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([])
  useEffect(() => {
    const fetchCountriesApi = async () => {
      setFetchedCountries(await fetchCountries());
    }
    fetchCountriesApi();
  }, [setFetchedCountries]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e) => { handleCountryChange(e.target.value) }}>
        <option value=''>Global</option>
        {fetchedCountries.map((country, index) =>
          <option key={index} value={country}>{country}</option>
        )};
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker