const fs = require("fs");

let count = 1;

count++;

// Read file
// fs.readFile("./demo.txt", { encoding: "utf-8" }, function (err, data) {
//   if (err) throw err;
//   console.log("Content file: ", data);
// });

// Create file with content
// fs.appendFile(`./demo-1.txt`, function (err) {
//   if (err) throw err;
//   console.log("File create!");
// });

// Open file
// fs.open("demo.txt", "w", function (err, file) {
//   if (err) throw err;
//   console.log("Open a file!");
// });

fs.writeFile("demo-2.txt", "Write a new file", function (err, file) {
  if (err) throw err;
  console.log("Write a new file!");
});
