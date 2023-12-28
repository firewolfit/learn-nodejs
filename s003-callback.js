var fs = require("fs")
fs.readFile("s001-helloworld.js",(err, data) => {
    if (err) throw err;
    console.log(data.toString());
})
console.log("已经执行完毕了") // 由于是异步，这里先执行