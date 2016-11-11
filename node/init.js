const gpio = require('pi-gpio');

gpio.open(16, 'output', function(err) {
  if (err) { return console.err(err); }

  gpio.write(16, 1, function() {
    gpio.read(16, function(err, val) {
      if (err) { return console.err(err); }

      console.log('GPIO#16: ', val);
      gpio.close(16);
    });
  });
});
