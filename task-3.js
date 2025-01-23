"use strict";

const { execFileSync } = require("child_process"); // se importa el módulo child_process para ejecutar un archivo de modo sincrónico

function answer(file, directory) {
  execFileSync(file, { cwd: directory });
}

module.exports = answer;
