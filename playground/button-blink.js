const Gpio = require('onoff').Gpio;

const green = new Gpio(21, 'out');
const blue = new Gpio(4, 'out');
const red = new Gpio(16, 'out');
const button = new Gpio(12, 'in', 'both');


button.watch(function(err, val) {
  console.log('receiving button input');
  blue.writeSync(val);
  green.writeSync(val);
  red.writeSync(val);
});


// let greenState = 0;
// let blueState = 1;
//setInterval(function() {
//  console.log('toggle lights!');
//  green.writeSync(greenState);
//  blue.writeSync(blueState);
//  greenState = (greenState === 0 ? 1 : 0)
//  blueState = (blueState === 0 ? 1 : 0)
//}, 1000);

process.on('SIGINT', function() {
  green.writeSync(0);
  blue.writeSync(0);
  process.exit(0);
});


