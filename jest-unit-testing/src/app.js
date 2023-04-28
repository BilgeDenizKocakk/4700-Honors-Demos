const process = require('process');
const { Console } = require('./Console.js');

if (process.argv.length >= 2) {
    let consoleApp = new Console();
    consoleApp.judgeUserInput(process.argv[2]);
}