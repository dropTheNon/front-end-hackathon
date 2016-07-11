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

// var data = [
//   {
//     name: "Dockside Cannabis",
//     license: 414174,
//     county: "King",
//     city: "Seattle",
//     sales: {
//       Sep2015: 75693,
//       Oct2015: 148646,
//       Nov2015: 185886,
//       Dec2015: 200231,
//       Jan2016: 209129,
//       Feb2016: 239770,
//       Mar2016: 270189,
//       Apr2016: 314114,
//       May2016: 287831,
//       Jun2016: 298071
//     },
//     totalSales: 2229559
//   }, {
//     name: "Dockside Cannabis",
//     license: 414569,
//     county: "King",
//     city: "Shoreline",
//     sales: {
//       All2014: 60645,
//       Jan2015: 136333,
//       Feb2015: 176798,
//       Mar2015: 236259,
//       Apr2015: 256278,
//       May2015: 284049,
//       Jun2015: 276344,
//       Jul2015: 292945,
//       Aug2015: 311953,
//       Sep2015: 320809,
//       Oct2015: 341231,
//       Nov2015: 313294,
//       Dec2015: 349593,
//       Jan2016: 319320,
//       Feb2016: 314703,
//       Mar2016: 311543,
//       Apr2016: 316612,
//       May2016: 297348,
//       Jun2016: 271659
//     },
//     totalSales: 5187715
//   }
// ];

var sodoSales = [75693, 148646, 185886, 200231, 209129, 239770, 270189, 314114, 287831, 298071];

var shorelineSales = [60645, 136333, 176798, 236259, 256278, 284049, 276344, 292945, 311953, 320809, 341231, 313294, 349593, 319320, 314703, 311543, 316612, 297348, 271659];


$(document).ready(function() {
  $('.dropdown-toggle').dropdown();
});

var x = d3.scale.linear()
    .domain([0, d3.max(shorelineSales)])
    .range([0, 420]);

var y = d3.scale.linear()
    .domain([0, d3.max(sodoSales)])
    .range([0, 420]);

d3.select(".dataVisShoreline")
  .selectAll("div")
    .data(shorelineSales)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return "$" + d; });

d3.select(".dataVisSodo")
  .selectAll("div")
    .data(sodoSales)
  .enter().append("div")
    .style("width", function(d) { return y(d) + "px"; })
    .text(function(d) { return "$" + d; });
