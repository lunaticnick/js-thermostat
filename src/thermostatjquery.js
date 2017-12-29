window.onload = function () {
  thermostat = new Thermostat;
  updatepage();
};

var usagecolor;
var usagetext;
var savercolor;
var savertext;


updatepage = function () {
  $("#temp").html(thermostat.currentTemperature)
  $("#energyusage").css("background-color", usagecolor)
  $("#energyusagetext").html(usagetext)
  $("#energysaverstat").css("background-color", savercolor)
  $("#energysaverstattext").html(savertext)
}

$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=d5f6b97b7dc7c19a2b7e322588e9551d&units=metric', function(data){
  $('#current-temperature').text(data.main.temp);
})

$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=d5f6b97b7dc7c19a2b7e322588e9551d&units=metric', function(data){
  $('#selectedcity').text(data.name);
})


$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})




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
