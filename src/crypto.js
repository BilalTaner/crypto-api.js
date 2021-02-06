const cheerio = require('cheerio')
const request = require('request-promise');
const { getDate, formatNumber, langfixer } = require('./Util')

module.exports = {
  async getCrypto(value) {
    if (!value || value.lenght == 2) throw new Error('Please enter a valid crypto currency. Example: bitcoin')
    if (!value === String) throw new Error('You must enter the currencies as Strings. Example: "bitcoin"')
    try {
      let url = `https://www.doviz.com/kripto-paralar/${encodeURIComponent(langfixer(value.toLowerCase())).replace('%20', '-')}/`
      let url2 = `https://coinmarketcap.com/currencies/${encodeURIComponent(langfixer(value.toLowerCase())).replace('%20', '-')}/`
      const response = await request(url);
      const response2 = await request(url2);
      const $ = cheerio.load(response);
      const $2 = cheerio.load(response2);
      let nameandtag = $('div[class="page-title text-white"]').text()
      let name = nameandtag.substring(0, nameandtag.indexOf(' ('))
      var tag = nameandtag.substring(nameandtag.indexOf('(') + 1, nameandtag.indexOf(')'));
      let volume = $2('div[class="statsValue___2iaoZ"]').eq(2).text()
      let marketcap = $2('div[class="sc-16r8icm-0 iTsqJR statsSection___2aZ29"]').eq(0).eq(0).children('div').eq(0).children('div').eq(0).children('div').eq(0).children('div').eq(1).text()
      let change = $('div[class="flex justify-between mt-8"]').children('div').children('div').children('div').eq(0).text()
      let date = $('div[class="text-xs text-blue-gray-2"]').eq(0).text()
      let interval = $('div[class="flex justify-between"]').find('div[class="text-md font-semibold text-white mt-4"]').eq(2).text()
      let usd = $2('div[class="sc-16r8icm-0 fIhwvd"]').children('table').children('tbody').children('tr').eq(0).children('td').text()
      let tl = $('div[class="flex justify-between"]').find('div[class="mr-16"]').eq(0).find('div[class="text-md font-semibold text-white mt-4"]').text()
      var person = {
        name: name,
        tag: tag,
        volume: formatNumber(volume),
        marketcap: formatNumber(marketcap.replace('%', '')),
        date: getDate(date.replace('Son (', '').replace(')', '')),
        daily: info = {
          change: formatNumber(change || '0'),
          interval: formatNumber(interval || '0')
        },
        usd: formatNumber(usd),
        try: formatNumber(tl),
        icon: 'https://static.doviz.com/images/coin/' + encodeURIComponent(langfixer(value.toLowerCase())).replace('%20', '-') + '.png',
        source: {
         1: 'https://www.doviz.com/kripto-paralar/',
         2: 'https://coinmarketcap.com/currencies/'
        }
      };
      return person;
    } catch (e) {
      throw new Error('There is no such output or you entered it incorrectly, please try again.')
    }
  }
}
