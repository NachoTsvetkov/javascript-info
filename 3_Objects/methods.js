

function read() {
    this.first = prompt('First: ');
    this.second = prompt('Second: ');
}

function sum() {
    return +this.first + +this.second;
}

function mul() {
    return +this.first * +this.second;
}

function up() {
    this.step++;
    return this;
}

function down() {
    this.step--;
    return this;
} 

function showStep(){ // shows the current step
    console.log(this.step);
    return this;
}

(() => {
    let calculator = {
        read,
        sum,
        mul,
    }

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());

    let ladder = {
        step: 0,

        up,
        down,
        showStep,
    };

    ladder.up();
    ladder.up();
    ladder.down();
    ladder.showStep(); // 1

    ladder.up().up().down().showStep();
})();

if (!tests['methods']) {
    describe("calculator", function() {
        let calculator = {
            read,
            sum,
            mul,
        };

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

    
    describe("ladder", function() {
        let ladder = {
            step: 0,
            up,
            down,
            showStep,
        };

        it("steps up once", function() {
            ladder.step = 0;
            ladder.up();
            assert.equal(ladder.step, 1);
        });

        it("steps down once", function() {
            ladder.step = 1;
            ladder.down();
            assert.equal(ladder.step, 0);
        });

        it("steps up twice down once", function() {
            ladder.step = 0;
            ladder.up();
            ladder.up();
            ladder.down();
            assert.equal(ladder.step, 1);
        });

        it("steps up twice down once chain", function() {
            ladder.step = 0;
            ladder.up().up().down();
            assert.equal(ladder.step, 1);
        });
    });

    tests['methods'] = true;
    mocha.run();
}