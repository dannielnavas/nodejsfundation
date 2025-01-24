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
```

Complete the answer() function so that it creates a child process that executes a file represented by the file argument passed to the answer() function. Use the directory argument to set the current working directory for the child process. Ensure that the file is executed synchronously.

## task 4

### Diagnostics

The `answer.txt` file contains the following:

```sh
node command.js
```

Alter the answer.txt file so that if its contents were executed on the command line, the process would abort if there is an uncaught exception.

## task 5

### Error handling

# Task

The `answer.js` file contains the following:

```js
'use strict'

const emitter = require('./emitter')

```

The emitter.js file exports an Event Emitter, which is required to the emitter variable.

Complete the answer.js file to watch emitter for any errors. If an error does occur exit the process with the exit code of 1.

If no errors occur the process should exit as normal.

## task 6

### cli

command line interface nodejs

The `answer.txt` file contains the following:

```sh
node
```

Alter the answer.txt file so that if the contents of answer.txt would be a command that were to print in the console the string hello and then exit, do it without executing any JavaScript file.

## task 7

### events

The `answer.js` file contains the following:

```js
'use strict'

function answer (emitter) {

}

```

The function answer receives an EventEmitter instance in the emitter variable as an argument.

Complete the answer.js file to have the emitter listen for the event jump and after receiving that event, make the emitter emit the run event; exit the process when the jump event is emitted three times.

## task 8

### File system

The `answer.js` file currently contains the following:

```javascript
'use strict'

function answer (archive, text) {

}

```

Complete the answer.js file so that the answer function adds the contents it receives in the variable text to a file located in the path received in the variable archive The content should be added at the end of the specified file.

## task 9

### JavaScript prerequisites

Modify the `answer` function in the the `answer.js` file to receive a parameter called `operation` (which is expected to be of type `function`) and return an object that has a property called `name` which should be a string with any content and a method called `result` that executes the `operation` function received originally as an argument.

## task 10

### module system

Being the `answer.js` file a CommonJS module to be executed as the main script of a Node.js program, using the relevant method on the `require` API, edit the `answer.js` file to log out to the console an array with all the paths available to require modules.

This is a **CommonJS Modules** question only, this question cannot be answered with an **ECMAScript Modules** approach.

## task 11

### Process

Edit the `answer.js` to log out to the console the path of the current user's home directory if the platform where the script is executed is Linux, otherwise print the operating system's default directory for temporary files.

## task 12

### Package json

Modify the `package.json` in this directory to depend on the module `colorette`; but not from the registry but from its git repository, using the tagged version `1.4.0` present in the repository.

Once the `package.json` has been updated:

1. Ensure the above package is properly installed in the local `node_modules` directory before submitting your answer.
2. Edit the `answer.js` file to require the module. No other action is needed.

## task 13

### Unit testing

The `totest.js` file contains a module exporting a single function that receives a single argument, that should be a string and has 3 possible outcomes.

* If the string is a valid user will return a `User` object.
* If the string is not an user it will return an object with an error message.
* If the argument is not a string it will throw an error.

Using the **test framework** of your choice (or no **framework**), complete `answer.js` to test the `totest.js` 3 possible outcomes described above.

Configure `package.json` so that `npm test` executes the tests in `answer.js` correctly.
**Failure to do so will result in a zero grade.**
