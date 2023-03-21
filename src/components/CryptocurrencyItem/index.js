// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {eachData} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = eachData
  return (
    <li className="item-container">
      <div className="currency-logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo-size" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
