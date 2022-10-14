
const inputAlarms = process.argv.slice(2);

const timer = function(alarms){
  if(alarms.length === 0) {
    return;
  }
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

timer(inputAlarms);