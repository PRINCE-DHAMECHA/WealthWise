const data = require(`./usJson.json`);
const fs = require("fs");
let arr = [];
for (let d of data) {
  let obj = {};
  if (d["Symbol"].includes("^")) {
    console.log(1);
    continue;
  }
  obj.name = d["Name"];
  obj.symbol = d["Symbol"];
  arr.push(obj);
}
const jsonString = JSON.stringify(arr);
fs.writeFile("./usa.json", jsonString, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});
