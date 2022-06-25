import styles from './App.module.css';
import Cards from './components/cards/Cards'
import Chart from './components/chart/Chart'
import CountryPicker from './components/countryPicker/CountryPicker'
import image from './images/covid19.png'
import { fetchData } from './components/Api'
import { useEffect, useState } from 'react';

function App() {
  const [data, setdata] = useState(false);
  const [country, setCountry] = useState();
  useEffect(() => {
    async function temp() {
      const fetchedData = await fetchData();
      setdata(fetchedData);
    }
    temp()
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setdata(fetchedData);
    setCountry(country);
  }
  return (
    <div className={styles.container}>
      <img src={image} alt="Covid-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
