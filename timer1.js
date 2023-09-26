// implement an alarm clock/timer which will beep after a specified amount of time has passed;
// the user can specify an unlimted number of alarms using command line arguments;
const args = process.argv.slice(2);


const alarmClock = function(seconds) {
  if(seconds === undefined || isNaN(seconds) || seconds <= 0) {
    console.log("Error, unable to set Alarm");
    return;
  }
  
  setTimeout(() => {
    process.stdout.write('.');
  }, seconds * 1000);
};

args.forEach((arg) => {
  const seconds = Number(arg);
  alarmClock(seconds);
});

alarmClock(1);
alarmClock(-3);
alarmClock("three");


// EDGE CASES
// no numbers are provided - not beep at all, and end immediately;
// input is a negative number - ignore/skip any negative numbers;
// input is NaN - ignore/skip any input that isn't a number;