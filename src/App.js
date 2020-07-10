import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import "typeface-roboto";

class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    this.setFetchedData();
  }

  handleCountryChange = async (country) => {
    this.setFetchedData(country);
  }

  setFetchedData = async (country) => {
    const fetchedData = await fetchData(country || "")

    this.setState({
      data: fetchedData,
      country
    })
  }

  // async componentDidMount() {
  //   const data = await fetchData();
  //   this.setState({ data: data });
  // }

  handleCountryChange = async (country) => {
    this.setFetchedData(country);
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <header className={styles.header} > 
          <h1>COVID-19 Tracker</h1>
          <p>Last Update on {" "}
            <span>
              {new Date(data.lastUpdate).toDateString()}
            </span>
          </p>
        </header>
        <Cards data={data} />
        <div className={styles.picker}> 
          <h2>Cases</h2>
          <CountryPicker 
            country={country} 
            handleCountryChange={this.handleCountryChange} 
          />
        </div>
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
