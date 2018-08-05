(() => {
    let user = { name: "John", years: 30 };

    // your code to the left side:
    let { name, years: age, isAdmin = false } = user;

    console.log(data.name); // John
    console.log(age); // 30
    console.log(isAdmin); // false
})();

if (!tests['destructing']) {
    
    // Your tests here

    tests['destructing'] = true;
    mocha.run();
}