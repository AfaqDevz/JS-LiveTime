//Made by Afaq
let now = new Date();
let days = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let AMfinder
let daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

if(hours >= 0 && hours <= 12){
    AMfinder = 'AM'
}
else if(hours >= 13 && hours <= 23){
    AMfinder = 'PM'
}

if(hours > 12){
    hours-12
}
else if(hours == 0){
    hours = 12
}

document.write('Today is: ' + daysNames[days]);
document.write(`<br> Current time is ${hours} ${AMfinder} : ${minutes} : ${seconds}`);
document.write(`<br> Updates on refresh`);