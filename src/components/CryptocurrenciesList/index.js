// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount = () => {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))
    this.setState({currencyData: updatedData, isLoading: false})
  }

  getAllCurrencyData = () => {
    const {currencyData} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="card-container">
          <div className="heading-container">
            <p className="coin-type">Coin Type</p>
            <div className="usd-euro">
              <p className="coin-type-usd">USD</p>
              <p className="coin-type-euro">EURO</p>
            </div>
          </div>
          <ul className="list-container">
            {currencyData.map(eachData => (
              <CryptocurrencyItem eachData={eachData} key={eachData.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const shortList = isLoading && 'loader'
    return (
      <div testid={shortList}>
        {isLoading ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          this.getAllCurrencyData()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
