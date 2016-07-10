// var request = require('request');
// var cheerio = require('cheerio');

// request('http://www.502data.com/license/414174', function(error, response, data) {
//   var $ = cheerio.load(data);
//   var sales = [];

//   $('tr').children('.r').first().each(function(i, elem) {
//     sale = $(this).text();

//     if (sale.charAt(0) === '$')
//       sale = sale.slice(1);

//     sales[i] = sale;
//   });
//   console.log(sales);
// });

var data = [
  {
    name: "Dockside Cannabis",
    license: 414174,
    county: "King",
    city: "Seattle",
    sales: {
      Sep2015: 75693,
      Oct2015: 148646,
      Nov2015: 185886,
      Dec2015: 200231,
      Jan2016: 209129,
      Feb2016: 239770,
      Mar2016: 270189,
      Apr2016: 314114,
      May2016: 287831,
      Jun2016: 298071
    },
    totalSales: 2229559
  }, {
    name: "Dockside Cannabis",
    license: 414569,
    county: "King",
    city: "Shoreline",
    sales: {
      All2014: 60645,
      Jan2015: 136333,
      Feb2015: 176798,
      Mar2015: 236259,
      Apr2015: 256278,
      May2015: 284049,
      Jun2015: 276344,
      Jul2015: 292945,
      Aug2015: 311953,
      Sep2015: 320809,
      Oct2015: 341231,
      Nov2015: 313294,
      Dec2015: 349593,
      Jan2016: 319320,
      Feb2016: 314703,
      Mar2016: 311543,
      Apr2016: 316612,
      May2016: 297348,
      Jun2016: 271659
    },
    totalSales: 5187715
  }
];

