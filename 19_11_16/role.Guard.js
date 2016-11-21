var roleGuard = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var flagpos = creep.memory.target;
        if(creep.memory.target == null){
          flagpos = Game.flags.home;
        }
        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile)
        {
            creep.say('Greife an: ' + closestHostile);
            if(creep.attack(closestHostile)  == ERR_NOT_IN_RANGE){
              creep.moveTo(closestHostile);
            }

        }
        else
        {
           creep.moveTo(flagpos);
        }
    }
};

module.exports = roleGuard;
