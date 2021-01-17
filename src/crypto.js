const cheerio = require('cheerio')
const request = require('request-promise');
const { getDate, formatNumber, langfixer } = require('./Util')

module.exports = {
  async getCrypto(value) {
    if (!value || value.lenght == 2) throw new Error('Please enter a valid crypto currency. Example: bitcoin')
    if (!value === String) throw new Error('You must enter the currencies as Strings. Example: "bitcoin"')
    try {
      let url = `https://www.doviz.com/kripto-paralar/${encodeURIComponent(langfixer(value.toLowerCase())).replace('%20', '-')}/`
      const response = await request(url);
      const $ = cheerio.load(response);
      let nameandtag = $('div[class="currency-card relative bg-blue-gray-9 rounded-md p-16"]').find('div[class="page-title text-white"]').text()
      let name = nameandtag.substring(0, nameandtag.indexOf(' ('))
      var tag = nameandtag.substring(nameandtag.indexOf('(') + 1, nameandtag.indexOf(')'));
      let volume = $('div[class="currency-card relative bg-blue-gray-9 rounded-md p-16"]').find('div[class="flex justify-between"]').find('div[class="mr-16"]').eq(1).find('div[class="text-md font-semibold text-white mt-4"]').text()
      let change = $('div[class="currency-card relative bg-blue-gray-9 rounded-md p-16"]').find('div[class="flex justify-between mt-8"]').children('div').children('div').children('div').eq(0).text().trim(" ").replace('\n                        \n                            ', ' - ')
      let date = $('div[class="currency-card relative bg-blue-gray-9 rounded-md p-16"]').find('div[class="text-xs text-blue-gray-2"]').eq(0).text()
      let interval = $('div[class="currency-card relative bg-blue-gray-9 rounded-md p-16"]').find('div[class="flex justify-between mt-8"]').find('div[class="flex justify-between"]').find('div[class="text-md font-semibold text-white mt-4"]').eq(2).text()
      let usd = $('div[class="currency-card relative bg-blue-gray-9 rounded-md p-16"]').find('div[class="flex justify-between mt-8"]').find('div[class="text-xl font-semibold text-white"]').text()
      let tl = $('div[class="currency-card relative bg-blue-gray-9 rounded-md p-16"]').find('div[class="flex justify-between"]').find('div[class="mr-16"]').eq(0).find('div[class="text-md font-semibold text-white mt-4"]').text()
      var person = {
        name: name,
        tag: tag,
        volume: formatNumber(volume),
        date: getDate(date.replace('Son (', '').replace(')', '')),
        daily: info = {
          change: formatNumber(change || '0'),
          interval: formatNumber(interval || '0')
        },
        usd: formatNumber(usd),
        try: formatNumber(tl),
        icon: 'https://static.doviz.com/images/coin/' + encodeURIComponent(langfixer(value.toLowerCase())).replace('%20', '-') + '.png',
        source: 'https://www.doviz.com/kripto-paralar/'
      };
      return person;
    } catch (e) {
      throw new Error('There is no such output or you entered it incorrectly, please try again.')
    }
  }
}
