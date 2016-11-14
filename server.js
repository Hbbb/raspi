const http = require('http');

const SPOTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

http.get({
  host: 'surfsights.io',
  path: '/api/v1/spots/32/report',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic aGFycmlzb246aXRzYXNlY3JldA=='
  }
}, function(res) {
  var data = '';

  res.on('data', function(d) {
    data += d;
  });

  res.on('end', function() {
    try {
      let body = JSON.parse(data);
      return console.log(body);
    } catch(e) {
      console.log(e);
      return console.log('Failed to contact Surfsights..', e.message);
    }
  });

});
