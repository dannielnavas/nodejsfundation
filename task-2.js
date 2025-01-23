"use strict";

const { get } = require("http");

function fetch(url, cb) {
  get(url)
    .once("data", cb)
    .once("response", (res) => {
      var chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.once("end", () => {
        cb(null, Buffer.concat(chunks).toString());
      });
    });
}

function answer(urlA, urlB, urlC) {
  const output = (err, data) => {
    if (err) {
      console.error(err);
      process.stderr.write("Error");
      process.exit(1);
    }
    // console.log(data);
    process.stdout.write(data);
  };

  fetch(urlA, output);
  fetch(urlB, output);
  fetch(urlC, output);
}

answer(
  "http://localhost:3000/a",
  "http://localhost:3000/b",
  "http://localhost:3000/c"
); // solo es para probar no dejar en la solución final
