const Gpio = require('onoff').Gpio;

const pin = new Gpio(14, 'out');
const input = new Gpio(16, 'in');

console.log('initial pin value: ', pin.readSync());
console.log('input pin value: ', input.readSync());

pin.writeSync(1);
console.log('pin value: ', pin.readSync());

pin.writeSync(0);
console.log('pin value: ', pin.readSync());

pin.unexport();

process.on('SIGINT', function() {
  pin.unexport();
  input.unexport();
});


