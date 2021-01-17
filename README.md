## crypto-api.js

```shell
npm install crypto-api.js
```

#### INFORMATION
With this module, you can instantly get information about crypto currencies from [doviz.com](https://www.doviz.com/).

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
  volume: '$51.765.793.343',
  date: 2021-01-17T23:55:51.543Z,
  daily: { change: '%-1.62', interval: '$34.192.00 - $36.728,00' },
  usd: '$36.054.00',
  try: '₺269.252.00',
  icon: 'https://static.doviz.com/images/coin/bitcoin.png',
  source: 'https://www.doviz.com/kripto-paralar/'
}

````

## Changelog

##### 1.0.1  -  README.md update.

##### 1.0.1  -  README.md update and packgage.json update.

##### 1.0.0  -  Module published.
