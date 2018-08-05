function sumInput()
{
    let sum = 0;
    let num = 0;

    do {
        sum += +num;
        num = prompt('Enter Number: ');

        haveToBreak = isNaN(num) || num == null || num.trim() == '';
    } while (!haveToBreak)

    return sum;
}

class Calculator {
    constructor() {
        this.methods = [];

        this.addMethod('+', (a, b) => a + b);
        this.addMethod('-', (a, b) => a - b);
    }

    addMethod(operand, execution) {
        this.methods[operand] = execution;
    }

    calculate(equation) {
        let equationMembers = equation.split(' ');
        let firstOperand = +equationMembers[0];
        let operation = equationMembers[1];
        let secondOperand = +equationMembers[2];

        let result = this.methods[operation](firstOperand, secondOperand);
        return result;
    }
}


(() => {
    let styles = ['Jazz', 'Blues'];
    console.log(styles);

    styles.push('Rock-n-Roll');
    console.log(styles);

    let middle = Math.floor((styles.length-1) / 2);
    styles[middle] = 'Classics';
    console.log(styles);

    let firstValue = styles.shift();
    console.log(firstValue);
    console.log(styles);

    styles.unshift('Rap', 'Reggae');
    console.log(styles);

    // let sum = sumInput();
    // console.log(sum);

    let calc = new Calculator;
    console.log(calc.calculate("3 + 7")); // 10
    
    calc.addMethod("*", (a, b) => a * b);
    calc.addMethod("/", (a, b) => a / b);
    calc.addMethod("**", (a, b) => a ** b);

    let result = calc.calculate("2 ** 3");
    console.log(result); // 8

    debugger;
})();

if (!tests['arrays']) {
    describe("sumInput", function() {
        it("inputs 1", function() {
            prompt.onFirstCall().returns("1");
            prompt.onSecondCall().returns(null);

            var sum = sumInput();
            assert.equal(sum, 1);
        });

        it("inputs 1, 0", function() {
            prompt.onFirstCall().returns("1");
            prompt.onSecondCall().returns("0");
            prompt.onThirdCall().returns(null);
            var sum = sumInput();
            assert.equal(sum, 1);
        });

        it("inputs 1, empty string", function() {
            prompt.onFirstCall().returns("1");
            prompt.onSecondCall().returns(" ");
            prompt.onThirdCall().returns(null);

            var sum = sumInput();
            assert.equal(sum, 1);
        });

        it("inputs 1, 2", function() {
            prompt.onFirstCall().returns("1");
            prompt.onSecondCall().returns("2");
            prompt.onThirdCall().returns(null);

            var sum = sumInput();
            assert.equal(sum, 3);
        });

        beforeEach(function() {
            sinon.stub(window, "prompt");
        });
          
        afterEach(function() {
            prompt.restore();
        });
    });

    
    describe("Calculator", function() {
        let calc;

        it("adds 3 and 7", function() {
            let result = calc.calculate("3 + 7");
            assert.equal(result, 10);
        });

        it("adds 3 and -7", function() {
            let result = calc.calculate("3 + -7");
            assert.equal(result, -4);
        });
        
        it("subtracts 7 and 3", function() {
            let result = calc.calculate("7 - 3");
            assert.equal(result, 4);
        });
        
        it("subtracts 3 and 7", function() {
            let result = calc.calculate("3 - 7");
            assert.equal(result, -4);
        });
        
        it("subtracts -3 and 7", function() {
            let result = calc.calculate("-3 - 7");
            assert.equal(result, -10);
        });
        
        it("adds multiplication", function() {
            calc.addMethod("*", (a, b) => a * b);
            assert.isTrue("*" in calc.methods);
        });
        
        it("multiply 2 and 2", function() {
            calc.addMethod("*", (a, b) => a * b);
            let result = calc.calculate("2 * 2");
            assert.equal(result, 4);
        });
        
        it("divide 2 and 2", function() {
            calc.addMethod("/", (a, b) => a / b);
            let result = calc.calculate("2 / 2");
            assert.equal(result, 1);
        });
        
        it("exponend 2 and 2", function() {
            calc.addMethod("**", (a, b) => a ** b);
            let result = calc.calculate("2 ** 2");
            assert.equal(result, 4);
        });

        beforeEach(function() {
            calc = new Calculator;
        });
    });
    
    tests['arrays'] = true;
    mocha.run();
}