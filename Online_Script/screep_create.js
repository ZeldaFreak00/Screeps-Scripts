var screep_create = {
    /**
    * @param {string} spawn Der spezifische Spawn
    * @param {string} role Rolle eines Creeps
    * @param {Array} body Ein Array aus Strings mit den Koerperteilen (WORK,CARRY usw.)
    * @param {string} target_type Die Art des Ziels (Flag, Room)
    * @param {string} target Welches spezifisches Ziel (Flaggen Name) und wenn null dann automatisch
    */
    create: function(spawn, role, body, target_type, target){
      var sources = Game.spawns[spawn].room.find(FIND_SOURCES);
      var temp
      if(target == null && target_type == 'room'){
        temp = Math.floor(Math.random() * sources.length);
      }
      else{
        temp = target;
      }
      console.log('Erstelle ' + role + ' ' + body + ' mit dem Ziel ' + target + ' ' + Game.spawns[spawn].createCreep(body, undefined, {role: role, target: temp, target_type: target_type}));
    }

};

module.exports = screep_create;
