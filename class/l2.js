const EventEmitter = require('node:events')
const eventEmitter = new EventEmitter();
eventEmitter.on('start',()=>{console.log('started');});

eventEmitter.emit('start',23);
// Output : started
let callbackFunc=function(data){
    console.log(`The data is ${data}`);
    }
    eventEmitter.once('callback',callbackFunc)
    // Output : The data is 23
    eventEmitter.emit('callback','23');
    /*
    * When an 'error' event is emitted, Node.js will throw the error if

    
|--------------------------
|timers                    |
|--------------------------
|
|--------------------------
|pending callbacks         |
|--------------------------
|
|--------------------------
|idle prepare              |
|--------------------------
|
|--------------------------                         -------- incoming 
|poll                      | ----------connections |
|--------------------------                         -------- data etc 
|
|--------------------------
|check                    |
|--------------------------
|
|--------------------------
|close callbacks           |
|--------------------------