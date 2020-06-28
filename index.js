// const geocoortransform = require("geocoortransform");
// console.log(geocoortransform.bd2gcj(117,39));
// import add from './add.js';
// console.log(add(1,2));
const http = require('http');
http.createServer((req,res)=>{
    res.end('hello,world');
}).listen(8888);

