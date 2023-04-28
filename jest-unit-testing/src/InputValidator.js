class InputValidator {
    isValidInput (input) {
        let isValid = false;
        try {
            let trimmed = input.trim();
            if (!trimmed.includes(".")) {
                let num = parseInt(trimmed);
                isValid = (num >= 0) ? true : false;
            }
        } catch (e) {
            isValid = false;
        }
        return isValid;
    }
}

module.exports = {InputValidator}
