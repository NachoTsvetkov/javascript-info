class Calculator {
    constructor() {
        this.first = 0;
        this.second = 0;
    }

    read() {
        this.first = prompt('First: ');
        this.second = prompt('Second: ');
    }

    sum() {
        return +this.first + +this.second;
    }

    mul() {
        return +this.first * +this.second;
    }
}

export default Calculator;