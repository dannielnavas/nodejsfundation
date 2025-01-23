# NodeJs certification

## task 1

stream write in stdout

## task 2

### Control flow

Recomendado dejar al final de la prueba dado que son 3 ejercicios de mas o menos 11 lineas

The `answer.js` file contains two functions, `fetch()`, and `answer()`.

The `fetch()` function uses `http.get` implementing a callback based abstraction, it accepts a URL
path as the first argument, and a callback as the second. The callback passed to `fetch` should receive a
(potential) error object as the first input and the response content as the second one. function
must not be altered. **Altering it might result in a zero grade.**.

The `answer` function receives three arguments, `urlA`, `urlB` and `urlC`. Each of these contains an URL path.

Complete the `answer` function so that each URL is consumed using the `fetch` function and logged to the terminal's STDOUT stream. Execute the fetching of URLs all in the same tick ("at the same time"), and log results to the terminal in
chronological order (that is, according to the time it took each operation to complete).

If at any point there is an error, the `answer` function should log the
error to the terminal's STDERR stream and immediately exit the process with code 1.

run api pnpx json-server --watch api.json

## task 3

### Child process

un solo ejercicio como crear un child process

The `answer.js` file contains the following:

```javascript
'use strict'

function answer (command, directory) {

}

module.exports = answer

Complete the answer() function so that it creates a child process that executes a file represented by the file argument passed to the answer() function. Use the directory argument to set the current working directory for the child process. Ensure that the file is executed synchronously.
