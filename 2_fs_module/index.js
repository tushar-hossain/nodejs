const { error, log } = require("console");
const fs = require("fs");

// fs.writeFile("demo.txt", "this is a demo file", (error) => {
//   if (error) {
//     console.log("not found");
//   } else {
//     console.log("found");
//   }
// });

// fs.appendFile("demo.txt", " my file is addpend", (error) => {
//   if (error) {
//     console.log("not found");
//   } else {
//     console.log("found");
//   }
// });

// fs.readFile("demo.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log("not found");
//   } else {
//     console.log(data);
//   }
// });

// fs.rename("demo.txt", "demo2.txt", (error) => {
//   if (error) {
//     console.log("not found");
//   } else {
//     console.log("successful");
//   }
// });

// fs.unlink("demo2.txt", (error) => {
//   if (error) {
//     console.log("not found");
//   } else {
//     console.log("successful");
//   }
// });

// fs.exists("demo2.txt", (result) => {
//   if (result) {
//     console.log("found");
//   } else {
//     console.log("not found");
//   }
// });

fs.writeFileSync("demo.txt", "this demo file synchronous");
