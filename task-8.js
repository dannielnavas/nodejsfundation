"use strict";

const { appendFile } = require("fs");

function answer(archive, text) {
  appendFile(archive, text, (err) => {
    if (err) {
      throw err;
    }
  });
}

answer("archive.txt", "Hello, world!\n");
