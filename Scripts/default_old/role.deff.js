var roledeff = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var flagpos = Game.flags.hyrule_deff;
        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        console.log(closestHostile);
        if(closestHostile) 
        {
            
            creep.attack(closestHostile);
            
        }
        else
        {
           creep.moveTo(flagpos); 
        }
    }
};

module.exports = roledeff;
