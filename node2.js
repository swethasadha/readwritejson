var fs = require("fs");

 

//No need to install the "fs" package separately because it comes as a default package

 

fs.readFile('index.html', function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");