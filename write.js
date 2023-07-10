const fs = require("fs");
const empdetails = require("./employees");
let employees0 = {
     "fname": "Dharani",
    "lname": "Shanmugam",
    "age": 25,
    "empid": "009"
};
let employees1 = {
     "fname": "Shanu",
    "lname": "Sree",
	 "age": 25,
    "empid": "010"
};
empdetails.unshift(employees0);
empdetails.push(employees1)
fs.writeFile("employees.json", JSON.stringify(empdetails), err => { 
 if (err) throw err;
 console.log("Done writing");
});