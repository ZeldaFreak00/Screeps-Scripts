var roleRepair = {

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
              var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_WALL ||
                                structure.structureType == STRUCTURE_CONTAINER ||
                                structure.structureType == STRUCTURE_RAMPART ||
                                structure.structureType == STRUCTURE_ROAD ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }});
                var target_num = 0;
                var target_durch = 0;
                for(var i = 0; i < targets.length; i++){
                    target_durch += targets[i].energy;
                }
                for(var i = 0; i < targets.length; i++){
                    if(targets[i].energy <= taget_durch){
                        target_num = i;
                        return;
                    }
                }
            if(targets.length) {
                if(creep.build(targets[target_num]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[target_num]);
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

module.exports = roleRepair;