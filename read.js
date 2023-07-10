const fs = require("fs");
fs.readFile("employees.json", function(err, data) {

    if (err) throw err;
    const employees = JSON.parse(data);

    console.log(employees); 
});