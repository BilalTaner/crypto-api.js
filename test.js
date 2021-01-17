const cryptotest = require('crypto-api.js');

(async() => { 
    let test = await cryptotest.getCrypto('bitcoin')
    console.log(test)
})()

/* output
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
*/