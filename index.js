/*
const sum = (num1, num2) => num1 + num2;

const result = sum(2, 3);

console.log(result);
*/

// const fs = require("fs");
// const generateFile = () => {
//   try {
//     fs.writeFileSync("data.txt", "Hi, this file was made with Node");
//   } catch (err) {
//     console.error(err);
//   }
// }

// generateFile();

// const http = require("http");

// http.createServer(function (req, res) {
//   res.write("Server started. Hi!!!!");
//   res.end();
// }).listen(8080);

// const myModule = require('./my-module.js');
// const date = myModule();
// console.log(date);


// requiring express
const express = require("express");

// initializing the express app
const app = express();
// specifying a port to listen on
const PORT = 9000;

// API / urls
app.get("/", (req, res) => {
  res.send("Hi from the express server!");
});

app.get("/api/cats", (req, res) => {

  // call to db

  // return dummy data
  const cats = ["British Shorthair", "Ragdoll", "Russian Blue"];

  // sending a response should be in JSON
  res.send(JSON.stringify(cats));
});

// Running the express http server on port specified
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});