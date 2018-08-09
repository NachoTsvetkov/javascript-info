(() => {    
    let room = {
        number: 23
    };
    
    let meetup = {
        title: "Conference",
        occupiedBy: [{name: "John"}, {name: "Alice"}],
        place: room
    };
    
    // circular references
    room.occupiedBy = meetup;
    meetup.self = meetup;
    
    alert( JSON.stringify(meetup, function replacer(key, value) {
        console.log(`${key}: ${value}`); // to see what replacer gets
        return (value == meetup && key != '') ? undefined : value;
    }));
})();

if (!tests['test']) {
    
    // Your tests here

    tests['test'] = true;
    mocha.run();
}