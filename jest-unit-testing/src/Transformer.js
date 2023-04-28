class Transformer {
    transform (i) {
        let result = "";
        let fooResult = this.isFoo(i);
        let barResult = this.isBar(i);
        let bazResult = this.isBaz(i);
        if ((fooResult == "" && barResult == "" && bazResult == "") || i == 0) {
			result = i.valueOf();
		} else {
			result = fooResult + barResult + bazResult;
		}
		return result;
    }

    isFoo(number) {
        let fooResult = "";
		if (number % 3 == 0) {
			fooResult = "foo";
		}
		return fooResult;
    }

    isBar(number) {
		let barResult = "";
		if (number % 5 == 0) {
			barResult = "bar";
		}
		return barResult;
	}

	isBaz(number) {
		let bazResult = "";
		if (number % 7 == 0) {
			bazResult = "baz";
		}
		return bazResult;
	}
}

module.exports = {Transformer}