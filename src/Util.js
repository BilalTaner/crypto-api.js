class Util {

  static getDate(hourstring) {
    let date = new Date();
    const hour = hourstring.split(':');
    date.setUTCHours(hour[0]);
    date.setUTCMinutes(hour[1]);
    if (date.getTime() < Date.now()) {
      date.setDate(new Date().getDate() - 1);
    }
    return date;
  };

  static formatNumber(string) {
    let format = string.replace(/,/g, '.')
    return format
  };

  static langfixer(str) {
    return str
      .replace(/ü/g, 'u')
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ç/g, 'c')
      .replace(/ö/g, 'o')
      .replace(/ş/g, 's')
  }
}

module.exports = Util;
