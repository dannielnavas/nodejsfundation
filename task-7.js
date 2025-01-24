"use strict";

const { EventEmitter } = require("events");

const ee = new EventEmitter();

ee.on("run", () => {
  ee.emit("jump");
});

answer(ee);
ee.emit("jump");

function answer(emitter) {
  let counter = 0;
  emitter.on("jump", () => {
    counter++;
    console.log(`jump ${counter}`);
    if (counter === 3) {
      process.exit();
    }
    emitter.emit("run");
  });
}
