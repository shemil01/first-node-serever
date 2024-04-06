const EventEmitter = require("node:events")
const emitter = new EventEmitter();



emitter.on("order pizza",()=>{
    console.log(`orederd baking pizza`);
})
emitter.emit("oreder-poizza")