import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import covid19img from './images/image.png';
import "typeface-roboto";

class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={covid19img} alt="Covid-19 Logo" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <div className={styles.footer}>
          <p>Made with</p>
          <span role='img' aria-label="sheep" >❤️ </span>
          <p>by</p>
          <a href="https://github.com/itstaranarora">@itstaranarora</a>
        </div>
      </div>
    );
  }
}

export default App;
