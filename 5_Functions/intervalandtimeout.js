(() => {
    function printNumbers(from, to) {
        let currentNumber = from;
        let intervalId = -1;
        function printEverySecond() {
            console.log(currentNumber);
            currentNumber++;
            if (currentNumber >= to) {
                clearInterval(intervalId);
            }
        }

        intervalId = setInterval(printEverySecond, 1000);
    }

    printNumbers(1, 10);

    let i = 0;
    let start = Date.now();

    function count() {
        let intervalId = 0;

        function doJob() {
            // a piece of heavy job
            for(let j = 0; j < 10000000; j++) {
                i++;
            }

            console.log(i);

            if (i == 10000000000) {
                clearInterval(intervalId);
                alert("Done in " + (Date.now() - start) + 'ms');
            } 
        }
        
        intervalId = setInterval(doJob, 0);

    }

    count();
})();

if (!tests['test']) {
    
    // Your tests here

    tests['test'] = true;
    mocha.run();
}