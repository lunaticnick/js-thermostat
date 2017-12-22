window.onload = function () {
  thermostat = new Thermostat;
  updatepage();
};


updatepage = function () {
  $("#temp").html(thermostat.currentTemperature)
  $("#energyusage").css("background-color", usagecolor)
  $("#energyusagetext").html(usagetext)
  $("#energysaverstat").css("background-color", savercolor)
  $("#energysaverstattext").html(savertext)
}


usagecolor = function (){
  if(thermostat.energyUsage === "low-usage"){
    return "green"
  }
  if(thermostat.energyUsage === "medium-usage"){
    return "orange"
  }
  if(thermostat.energyUsage === "high-usage"){
    return "red"
  }
};

usagetext = function (){
  if(thermostat.energyUsage === "low-usage"){
    return "LOW"
  }
  if(thermostat.energyUsage === "medium-usage"){
    return "MEDIUM"
  }
  if(thermostat.energyUsage === "high-usage"){
    return "HIGH"
  }
};

savercolor = function (){
  if(thermostat.powerSaver === true){
    return "green"
  }
  if(thermostat.powerSaver === false){
    return "red"
  }
};

savertext = function (){
  if(thermostat.powerSaver === true){
    return "ON"
  }
  if(thermostat.powerSaver === false){
    return "OFF"
  }
};



function increase(){
  thermostat.increaseTemperature()
  updatepage()
};


function decrease(){
  thermostat.decreaseTemperature()
  updatepage()
};

function reset(){
  thermostat.resetTemperature()
  updatepage()
};

function powersaver(){
  thermostat.setPowerSaver()
  updatepage()
};

function energyusage(){
  thermostat.energyUsage()
  updatepage()
};
