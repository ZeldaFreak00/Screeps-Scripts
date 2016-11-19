var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('farme');
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('upgrade');
        }

        if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            var temp = creep.memory.farm_target;
            if(temp == undefined){
               creep.memory.farm_target = Math.floor(Math.random() * sources.length);
            }
            if(creep.harvest(sources[temp]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[temp]); 
            }
        
            }
        }
    }
};

module.exports = roleUpgrader;