var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('farme');
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('baue');
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
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

module.exports = roleBuilder;