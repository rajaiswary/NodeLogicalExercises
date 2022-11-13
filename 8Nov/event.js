const EventEmitter = require('events');
var eventEmitter = new EventEmitter();
eventEmitter.on('myEvent',(msg)=>
{
    console.log(msg);
});

setTimeout(()=>
{
    eventEmitter.emit('myEvent','First event');
},2000)
   