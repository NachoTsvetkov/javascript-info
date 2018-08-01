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

class Accumulator {
    constructor(initialValue = 0) {
        this.value = +initialValue;
    }

    read () {
        var val = prompt('Enter value: ');
        this.accumulate(+val);

        return true;
    }

    accumulate(val) {
        this.value += +val;
        return true;
    }
}

(() => {
    let obj = {}
    function A() { this.toString = () => { return obj; } }
    function B() { this.toString = () => { return obj; } }
    
    let a = new A;
    let b = new B;

    console.log(a == b); // true

    let calc = new Calculator();
    calc.read();
    console.log(calc.sum());
    console.log(calc.mul());

    let accumulator = new Accumulator(1); // initial value 1
    accumulator.read(); // adds the user-entered value
    accumulator.read(); // adds the user-entered value
    alert(accumulator.value); // shows the sum of these values
})();

if (!tests['constructors']) {

    describe("Calculator", function() {
        let calculator = new Calculator();

        it("sums 1 and 2", function() {
            
            calculator.first = 1;
            calculator.second = 2;
            
            let sum = calculator.sum();
            assert.equal(sum, 3);
        });

        it("sums 1 and 2 strings", function() {
            
            calculator.first = '1';
            calculator.second = '2';
            
            let sum = calculator.sum();
            assert.equal(sum, 3);
        });

        it("multiplies 1 and 2", function() {
            
            calculator.first = 1;
            calculator.second = 2;
            
            let mul = calculator.mul();
            assert.equal(mul, 2);
        });

        it("multiplies 1 and 2 strings", function() {
            
            calculator.first = '1';
            calculator.second = '2';
            
            let mul = calculator.mul();
            assert.equal(mul, 2);
        });
    });

    describe("Accumulator", function() {
        let accumulator;

        it("adds 1", function() {
            accumulator.accumulate(1);
            assert.equal(accumulator.value, 1);
        });

        it("adds 1 string", function() {
            accumulator.accumulate('1');
            assert.equal(accumulator.value, 1);
        });

        it("adds 2", function() {
            accumulator.accumulate(2);
            assert.equal(accumulator.value, 2);
        });

        it("adds 1 then 2", function() {
            accumulator.accumulate(1);
            accumulator.accumulate(2);
            assert.equal(accumulator.value, 3);
        });

        beforeEach(() => { accumulator = new Accumulator(); })
    });

    tests['constructors'] = true;
    mocha.run();
}