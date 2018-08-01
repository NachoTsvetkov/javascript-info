(() => {
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;

    function isEmpty(obj) {
        return Object.keys(obj).length == 0;
    }

    let schedule = {};
    console.log(isEmpty(schedule)); // true

    schedule["8:30"] = "get up";
    console.log( isEmpty(schedule) ); // false

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    let totalSalaries = 0;
    for (const employeeName in salaries) {
        totalSalaries += salaries[employeeName];
    }
    console.log(salaries);
    console.log('totalSalaries: ' + totalSalaries);
})();