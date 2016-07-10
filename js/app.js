var request = require('request');
var cheerio = require('cheerio');

request('http://www.502data.com/license/414174', function(error, response, data) {
  var $ = cheerio.load(data);
  var sales = [];

  $('tr').children('.r').first().each(function(i, elem) {
    sale = $(this).text();

    if (sale.charAt(0) === '$')
      sale = sale.slice(1);

    sales[i] = sale;
  });
  console.log(sales);
});
