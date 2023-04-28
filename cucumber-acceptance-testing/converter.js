class Converter {

    constructor () {
        this.num = 0;
        this.result = "0";
    }

    IsItDivisibleBy3 (num) {
        return num % 3 == 0 ? "foo" : "";
    }
    
    IsItDivisibleBy5 (num) {
        return num % 5 == 0 ? "bar" : "";
    }
    
    IsItDivisibleBy7 (num) { 
        return num % 7 == 0 ? "baz" : "";
    }

    setNumber (input) {
        this.num = input;
    }

    convert() {
        this.result = this.IsItDivisibleBy3(this.num) + this.IsItDivisibleBy5(this.num) + this.IsItDivisibleBy7(this.num);
        this.result = this.result == '' ? this.num : this.result;
        return this.result;
    }
    
    getResult() {
        return this.result;
    }
}

module.exports = {Converter}