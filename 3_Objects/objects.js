function multiplyNumeric(inputObject)
{
    for (const key in inputObject) {
        if (inputObject.hasOwnProperty(key)) {
            const value = inputObject[key];
            
            let type = typeof(value);
            if (type === 'number') {
                inputObject[key] *= 2;
            }
        }
    }
}

function isEmpty(obj) {
    return Object.keys(obj).length == 0;
}

(() => {
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;

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
    
    // after the call
    // menu = {
    //     width: 400,
    //     height: 600,
    //     title: "My menu"
    // };
})();

if (!tests['objects']) {
    describe("multiplyNumeric", function() {
        it("multiplies numeric properties of an object", function() {
            
            let menu = {
                width: 200,
                height: 300,
                title: "My menu"
            };
    
            multiplyNumeric(menu);
            assert.equal(menu.width, 400);
            assert.equal(menu.height, 600);
        });
    });
    
    describe("isEmpty", function() {
        it("checks if new object is empty", function() {
            let schedule = {};
            assert.isTrue(isEmpty(schedule));
        });
    
        it("checks if object with property is empty", function() {
            let schedule = {};
            schedule["8:30"] = "get up";
            assert.isFalse(isEmpty(schedule));
        })
    });
    
    tests['objects'] = true;
}