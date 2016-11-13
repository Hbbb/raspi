const Gpio = require('onoff').Gpio;

const green = new Gpio(21, 'out');
const blue = new Gpio(4, 'out');

let state = false;

setInterval(function() {
  green.writeSync(state);
  blue.writeSync(!state);
  state = !state;
}, 1000);


