function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20
  this.MINIMUM_TEMPERATURE = 10
  this.MAXIMUM_TEMPERATURE_PS_OFF = 32
  this.MAXIMUM_TEMPERATURE_PS_ON = 25
  this.MAXIMUM_TEMPERATURE_FOR_LOW_ENERGY_USAGE = 18
  this.MAXIMUM_TEMPERATURE_FOR_MEDIUM_ENERGY_USAGE = 25
  this.powerSaver = true
  this.energyUsage = "medium-usage"
  this.currentTemperature = this.DEFAULT_TEMPERATURE
};

Thermostat.prototype.temperature = function(){
  return this.currentTemperature
};


Thermostat.prototype.increaseTemperature = function() {
  var maxTemperature = this.MAXIMUM_TEMPERATURE_PS_OFF;
  if(this.powerSaver) {
  	maxTemperature = this.MAXIMUM_TEMPERATURE_PS_ON
  };

  if(this.currentTemperature >= maxTemperature) {
  	throw(new Error("Max Temperature Reached!"));
  };
  this.currentTemperature ++
  this.calculateEnergyUsage()
};

Thermostat.prototype.decreaseTemperature = function() {
  if(this.currentTemperature <= this.MINIMUM_TEMPERATURE){
    throw(new Error("Min Temperature Reached!"));
  };
  this.currentTemperature --
  this.calculateEnergyUsage()
};

Thermostat.prototype.setPowerSaver = function(toggle) {
	this.powerSaver ? this.powerSaver = false : this.powerSaver = true
};

Thermostat.prototype.resetTemperature = function() {
  this.currentTemperature = this.DEFAULT_TEMPERATURE
  this.calculateEnergyUsage()
};

Thermostat.prototype.calculateEnergyUsage = function(){
  if(this.currentTemperature < this.MAXIMUM_TEMPERATURE_FOR_LOW_ENERGY_USAGE) {
    return this.energyUsage = "low-usage";
  }
  else if(this.currentTemperature < this.MAXIMUM_TEMPERATURE_FOR_MEDIUM_ENERGY_USAGE) {
    return this.energyUsage = "medium-usage";
  }
  else{
    return this.energyUsage = "high-usage";
  };
};
