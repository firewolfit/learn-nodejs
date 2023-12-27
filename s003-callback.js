var fs = require("fs")
fs.readFile("s001-helloworld.js",(err, data) => {
    if (err) throw err;
    console.log(data.toString());
  })