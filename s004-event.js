var events = require("events");
var eventEmitter = new events.EventEmitter();
eventEmitter.on('busArrive',()=>{
    console.log("the bus is arrive , please get up the bus !")
})
eventEmitter.emit('busArrive')

var dogMoning = ()=>{
    console.log('汪汪汪!!!')
}
var chikenMoning = ()=>{
    console.log('')
}
eventEmitter.addListener('moninng',)