## crypto-api.js

```shell
npm install crypto-api.js
```

#### INFORMATION
With this module, you can instantly get information about crypto currencies from [doviz.com](https://www.doviz.com/) and [coinmarketcap.com](https://coinmarketcap.com/) .

##### Example Usage 

````javascript
let cryptotest = require('crypto-api.js')
(async() => { 
    let test = await cryptotest.getCrypto('bitcoin')
    console.log(test)
})()

````

#### OUTPUT

````javascript

{
  name: 'Bitcoin',
  tag: 'BTC',
  volume: '$51.206.232.801',
  marketcap: '$665.520.599.662',
  date: 2021-01-18T03:15:05.018Z,
  daily: { change: '%-0.44', interval: '$34.192.00 - $36.752.00' },
  usd: '$35.774.33',
  try: '₺266.965.00',
  icon: 'https://static.doviz.com/images/coin/bitcoin.png',
  source: {
    '1': 'https://www.doviz.com/kripto-paralar/',
    '2': 'https://coinmarketcap.com/currencies/'
  }
}

````

## Changelog

##### 1.0.4  -  README.md - Market Cap - Function - Source Update.

##### 1.0.3  -  README.md Update.

##### 1.0.2  -  README.md Update.

##### 1.0.1  -  README.md and packgage.json Update.

##### 1.0.0  -  Module published.
