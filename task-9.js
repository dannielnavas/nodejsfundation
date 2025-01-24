"use strict";

function answer(operation) {
  return {
    name: "answer",
    result: operation,
  };
}

const op = () => 1 + 2;

const res = answer(op);

console.log(res.result());
