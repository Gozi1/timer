// reads input from console
const inputAlarms = process.argv.slice(2);

const timer = function(alarms){
  // No alarms just end program
  if(alarms.length === 0) {
    return;
  }
  // iterates through the alarms and multiples the parseTime by 1000  to get secs
  for(time of alarms){
    let parsedTime = parseInt(time)
    if(time < 0 || !Number.isInteger(parsedTime)){
      continue;
    }
    
    setTimeout(()=>{
      process.stdout.write('\x07');
      console.log(parsedTime);
  },parsedTime*1000);
  }
}

// runs function
timer(inputAlarms);