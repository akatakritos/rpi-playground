# rpi-playground

Some misc node.js scripts for playing with raspberry Pi

Its a configuration for editing locally in windows, but syncing over to the Pi.

I'm using the windows linux subsystem for some of the scripting (sync.sh).

Checkout `sync.sh` for an example of syncing a project to the Pi. You'll want to exclude node_modules
and run npm install on the pi itself in case you are using any native extensions.
