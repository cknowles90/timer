// implement an alarm clock/timer which will beep after a specified amount of time has passed;
// the user can specify an unlimted number of alarms using command line arguments;
const args = process.argv.slice(2); // allows command line arguments to be passed through the intended function (alarmClock);


const alarmClock = function(seconds) {
  if(seconds === undefined || isNaN(seconds) || seconds <= 0) {   // no numbers are provided - not beep at all, and end immediately;
    console.log("Error, unable to set Alarm");                    // input is a negative number - ignore/skip any negative numbers;
    return;                                                       // input is NaN - ignore/skip any input that isn't a number;
  }
  
  setTimeout(() => {
    process.stdout.write('.'); // tried 'process.stdout.write('\x07')' but wasn't audible on system;
  }, seconds * 1000); // conver seconds to milliseconds for setTimeout;
};

args.forEach((arg) => { // loops through each command line argument ;
  const seconds = Number(arg);  // converts the input argument/s to a number;
  alarmClock(seconds); // calls back to the alarmClock function above;
});

alarmClock(1);
alarmClock(-3);
alarmClock("three");


// EDGE CASES
// no numbers are provided - not beep at all, and end immediately;
// input is a negative number - ignore/skip any negative numbers;
// input is NaN - ignore/skip any input that isn't a number;