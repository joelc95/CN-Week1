let today = "monday"

let days = [['monday', true],
            ['tuesday', true],
            ['wednesday', true],
            ['thursday', true],
            ['friday', true],
            ['saturday', false],
            ['sunday', false]];

let setAlarm = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "Get up at 7am"
}

let alarm = (day) => {
    for (let i=0; i<days.length; i++) {
        if(day.toLowerCase() == days[i][0]) {
            if (days[i][1] == true) {
                return setAlarm.weekdayAlarm;
            } else {
                return setAlarm.weekendAlarm;
            }
        }
    }
    return 'Please enter a valid day';
}
console.log(alarm(today));
console.log(alarm('SUNDAY'));
console.log(alarm('dddd'));