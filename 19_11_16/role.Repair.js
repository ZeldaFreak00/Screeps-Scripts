var roleRepair = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.repair && creep.carry.energy == 0) {
            creep.memory.repair = false;
            creep.say('farme');
        }
        if(!creep.memory.repair && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repair = true;
            creep.say('reparire');
        }

        if(creep.memory.repair) {
              var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_WALL ||
                                structure.structureType == STRUCTURE_CONTAINER ||
                                structure.structureType == STRUCTURE_EXTENSION||
                                structure.structureType == STRUCTURE_EXTRACTOR ||
                                structure.structureType == STRUCTURE_LAB ||
                                structure.structureType == STRUCTURE_LINK ||
                                structure.structureType == STRUCTURE_NUKER ||
                                structure.structureType == STRUCTURE_OBSERVER ||
                                structure.structureType == STRUCTURE_POWER_BANK ||
                                structure.structureType == STRUCTURE_POWER_SPAWN ||
                                structure.structureType == STRUCTURE_STORAGE ||
                                structure.structureType == STRUCTURE_TERMINAL ||
                                structure.structureType == STRUCTURE_RAMPART ||
                                structure.structureType == STRUCTURE_ROAD ||
                                structure.structureType == STRUCTURE_TOWER) && structure.hits < structure.hitsMax;
                    }});
                var target_num = 0;
                var target_min = targets[0].hits;
                for(var i = 0; i < targets.length; i++){
                  if(target_min > targets[i].hits){
                    target_min = targets[i].hits;
                    target_num = i;
                  }
                }

            if(targets.length) {
                if(creep.repair(targets[target_num]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[target_num]);
                }
            }
        }
        else {
        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            var temp = creep.memory.target;
            if(temp == undefined){
               creep.memory.target = Math.floor(Math.random() * sources.length);
            }
            if(creep.harvest(sources[temp]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[temp]);
            }
        }
        }
    }
};

module.exports = roleRepair;
