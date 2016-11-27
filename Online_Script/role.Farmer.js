var roleFarmer = {

    /** @param {Creep} creep **/
    run: function(creep) {
      var target = creep.memory.target;
      var target_type = creep.memory.target_type;
      var sources = creep.room.find(FIND_SOURCES);
        if(creep.carry.energy < creep.carryCapacity) {
            if(target_type == 'flag'){
              var flagpos = Game.flags.target;
              if(creep.harvest(creep.pos.findClosestByRange(FIND_SOURCES)) == ERR_NOT_IN_RANGE){
                  creep.moveTo(flagpos);
              }
            }
            else{
              if(target == undefined){
                 creep.memory.target = Math.floor(Math.random() * sources.length);
              }
              if(creep.harvest(sources[target]) == ERR_NOT_IN_RANGE) {
              creep.moveTo(sources[target]);
              }
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;
                    }
              var target_tower = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                            }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } else if(target_tower.length > 0){
              if(creep.transfer(target_tower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(target_tower[0]);
              }
            }
            else {
                creep.moveTo(Game.flags.home);
            }
        }
    }
};

module.exports = roleFarmer;
