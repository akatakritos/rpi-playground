const rpio = require('rpio');

const pin = 12;

/*
 * Set the initial state to low.  The state is set prior to the pin becoming
 * active, so is safe for devices which require a stable setup.
 */
rpio.open(pin, rpio.OUTPUT, rpio.LOW);

/*
 * The sleep functions block, but rarely in these simple programs does one care
 * about that.  Use a setInterval()/setTimeout() loop instead if it matters.
 */
for (var i = 0; i < 5; i++) {
    /* On for 1 second */
    console.log('1');
    rpio.write(pin, rpio.HIGH);
    rpio.sleep(3);

    /* Off for half a second (500ms) */
    console.log('0');
    rpio.write(pin, rpio.LOW);
    rpio.sleep(3);
}