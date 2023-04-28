const { InputValidator } = require('./InputValidator.js');
const { Transformer } = require('./Transformer.js');
  
class Console {
	judgeUserInput (userInput) {
		const consoleValidator = new InputValidator();
		if (consoleValidator.isValidInput(userInput)) {
			let loopLimit = parseInt(userInput.trim());
			this.loopUntil(loopLimit);
		} 
		else {
			console.log("Invalid input.");
		}
	}

	loopUntil(loopLimit) {
		const consoleTransformer = new Transformer();
		for (let i = 0; i <= loopLimit; i++) {
			console.log(consoleTransformer.transform(i));
		}
	}
}

module.exports = {Console};