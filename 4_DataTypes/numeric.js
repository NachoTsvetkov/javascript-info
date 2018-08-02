function randomInteger(min, max) {
    if (min > max) {
        return null;
    }

    let seed = Math.random();
    let range = max - min;
    let rand = Math.trunc(range * seed);

    rand = rand + min;
    return rand;
}

(() => {
    console.log(randomInteger(1, 5)); // 1
    console.log(randomInteger(10, 50)); // 3
    console.log(randomInteger(100, 500)); // 5
})();

if (!tests['numeric']) {
    describe("randomInteger", function() {
        it("rand between 1 and 5", function() {
            var rand = randomInteger(1, 5);
            assert.isTrue(rand > 1 && rand < 5);
        });

        it("rand between 10 and 50", function() {
            var rand = randomInteger(10, 50);
            assert.isTrue(rand > 10 && rand < 50);
        });

        it("rand between 100 and 500", function() {
            var rand = randomInteger(10, 50);
            assert.isTrue(rand > 10 && rand < 50);
        });
    });

    tests['numeric'] = true;
    mocha.run();
}