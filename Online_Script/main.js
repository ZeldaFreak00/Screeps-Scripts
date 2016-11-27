var roleFarmer = require('role.Farmer');
var roleUpgrader = require('role.Upgrader');
var roleBuilder = require('role.Builder');
var roleRepair = require('role.Repair');
var roleGuard = require('role.Guard');
var roleHunter = require('role.Hunter');
var screep_create = require('screep_create');

var farmer_max = 6;
var builder_max = 1;
var upgrader_max = 3;
var repair_max = 2;

var spawn = ["Hyrule"];
var sources = new Array(spawn.length);
for (var i = 0; i < sources.length; i++){
  sources[i] =  Game.spawns[spawn].room.find(FIND_SOURCES);
}

module.exports.loop = function () {

  // Reinige den Speicher von nicht mehr existenten Creeps
  for(var name in Memory.creeps)
  {
      if(!Game.creeps[name]) {
          delete Memory.creeps[name];
          console.log('Entferne toten Creep: ', name);
      }
  }

  //Anzahlen von Creeps usw.
  var guard_max = new Array (spawn.length);
  var hunter_max = new Array (spawn.length);
  var farmer_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'farmer');
  var builder_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
  var upgrader_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  var repair_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'repair');
  var guard_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'guard');
  var hunter_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'hunter');
  var energie_anzahl = new Array(spawn.length);
  for(var i = 0;  i < energie_anzahl.length; i++){
      energie_anzahl[i] =  Game.spawns[spawn[i]].room.energyAvailable;
  }
  var target_count = [];
  //guckt welcher Creep wo abbaut
  for(var i = 0;  i < spawn.length; i++){
      var temp = _.filter(Game.creeps, (creep) => creep.memory.target == i);
      temp = temp.length;
      target_count.push(temp);
      if(Game.spawns[spawn[i]].room.memory.guard_max != undefined){
        guard_max[i] = Game.spawns[spawn[i]].room.memory.guard_max;
      }
      else{
         Game.spawns[spawn[i]].room.memory.guard_max = 0;
      }
      if(Game.spawns[spawn[i]].room.memory.hunter_max != undefined){
        hunter_max[i] = Game.spawns[spawn[i]].room.memory.hunter_max;
      }
      else{
        Game.spawns[spawn[i]].room.memory.hunter_max = 0;
      }


  }

  for(var i = 0; i < energie_anzahl.length; i++){
  switch(true){


    case (energie_anzahl[i] >= 5300):
      if(farmer_anzahl.length < farmer_max){
        screep_create.create(spawn[i], 'farmer', [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
      }
      else if(builder_anzahl.length < builder_max){
        screep_create.create(spawn[i], 'builder', [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
      }
      else if(upgrader_anzahl.length < upgrader_max){
        screep_create.create(spawn[i], 'upgrader', [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
      }
      else if(repair_anzahl.length < repair_max){
        screep_create.create(spawn[i], 'repair', [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
      }
      else if(hunter_anzahl.length < hunter_max[i]){
        screep_create.create(spawn[i], 'hunter', [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,HEAL,HEAL,HEAL,HEAL,HEAL],'flag',null);
      }
      else if(guard_anzahl.length < guard_max[i]){
        screep_create.create(spawn[i], 'guard', [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,HEAL,HEAL,HEAL,HEAL,HEAL],'flag',null);
      }
      break;


    case (energie_anzahl[i] >= 2300):
    if(farmer_anzahl.length < farmer_max){
      screep_create.create(spawn[i], 'farmer', [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(builder_anzahl.length < builder_max){
      screep_create.create(spawn[i], 'builder', [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(upgrader_anzahl.length < upgrader_max){
      screep_create.create(spawn[i], 'upgrader', [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(repair_anzahl.length < repair_max){
      screep_create.create(spawn[i], 'repair', [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(hunter_anzahl.length < hunter_max[i]){
      screep_create.create(spawn[i], 'hunter', [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,HEAL,HEAL],'flag',null);
    }
    else if(guard_anzahl.length < guard_max[i]){
      screep_create.create(spawn[i], 'guard', [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,HEAL,HEAL,HEAL],'flag',null);
    }
      break;


    case (energie_anzahl[i] >= 1800):
    if(farmer_anzahl.length < farmer_max){
      screep_create.create(spawn[i], 'farmer', [MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(builder_anzahl.length < builder_max){
      screep_create.create(spawn[i], 'builder', [MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(upgrader_anzahl.length < upgrader_max){
      screep_create.create(spawn[i], 'upgrader', [MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(repair_anzahl.length < repair_max){
      screep_create.create(spawn[i], 'repair', [MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }

    else if(hunter_anzahl.length < hunter_max[i]){
      screep_create.create(spawn[i], 'hunter', [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,HEAL,HEAL],'flag',null);
    }
    else if(guard_anzahl.length < guard_max[i]){
      screep_create.create(spawn[i], 'guard', [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,HEAL,HEAL,HEAL],'flag',null);
    }
      break;


    case (energie_anzahl[i] >= 800):
    if(farmer_anzahl.length < farmer_max){
      screep_create.create(spawn[i], 'farmer', [MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(builder_anzahl.length < builder_max){
      screep_create.create(spawn[i], 'builder', [MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(upgrader_anzahl.length < upgrader_max){
      screep_create.create(spawn[i], 'upgrader', [MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(repair_anzahl.length < repair_max){
      screep_create.create(spawn[i], 'repair', [MOVE,MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }

    else if(hunter_anzahl.length < hunter_max[i]){
      screep_create.create(spawn[i], 'hunter', [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,HEAL],'flag',null);
    }
    else if(guard_anzahl.length < guard_max[i]){
      screep_create.create(spawn[i], 'guard', [TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,HEAL],'flag',null);
    }
      break;


    case (energie_anzahl[i] >= 550):
    if(farmer_anzahl.length < farmer_max){
      screep_create.create(spawn[i], 'farmer', [MOVE,MOVE,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(builder_anzahl.length < builder_max){
      screep_create.create(spawn[i], 'builder', [MOVE,MOVE,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(upgrader_anzahl.length < upgrader_max){
      screep_create.create(spawn[i], 'upgrader', [MOVE,MOVE,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }
    else if(repair_anzahl.length < repair_max){
      screep_create.create(spawn[i], 'repair', [MOVE,MOVE,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY],'room',null);
    }

    else if(hunter_anzahl.length < hunter_max[i]){
      screep_create.create(spawn[i], 'hunter', [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,RANGED_ATTACK,HEAL],'flag',null);
    }
    else if(guard_anzahl.length < guard_max[i]){
      screep_create.create(spawn[i], 'guard', [TOUGH,MOVE,ATTACK,ATTACK,ATTACK,HEAL],'flag',null);
    }
      break;


    case (energie_anzahl[i] >= 300):
    if(farmer_anzahl.length < farmer_max){
      screep_create.create(spawn[i], 'farmer', [MOVE,MOVE,WORK,CARRY,CARRY],'room',null);
    }
    else if(builder_anzahl.length < builder_max){
      screep_create.create(spawn[i], 'builder', [MOVE,MOVE,WORK,CARRY,CARRY],'room',null);
    }
    else if(upgrader_anzahl.length < upgrader_max){
      screep_create.create(spawn[i], 'upgrader', [MOVE,MOVE,WORK,CARRY,CARRY],'room',null);
    }
    else if(repair_anzahl.length < repair_max){
      screep_create.create(spawn[i], 'repair', [MOVE,MOVE,WORK,CARRY,CARRY],'room',null);
    }
      break;
  }
}

for(var name in Game.creeps) {
    var creep = Game.creeps[name];
    switch(creep.memory.role){
        case 'farmer':
            roleFarmer.run(creep);
            break;
        case 'upgrader':
            roleUpgrader.run(creep);
            break;
        case 'builder':
            roleBuilder.run(creep);
            break;
        case 'hunter':
            roleHunter.run(creep);
            break;
        case 'guard':
            roleGuard.run(creep);
            break;
        case 'repair':
            roleRepair.run(creep);
            break;
    }
}
for(var i = 0; i < spawn.length; i++){
var tower = Game.spawns[spawn[i]].room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
for(var ii = 0; ii < tower.length; ii++) {
  var closestHostile = tower[ii].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
  var closestDamagedStructure = tower[ii].pos.findClosestByRange(FIND_STRUCTURES, {
      filter: (structure) => structure.hits < structure.hitsMax
  });
  if(closestHostile) {
      tower[ii].attack(closestHostile);
  }
    else if(closestDamagedStructure) {
        tower[i].repair(closestDamagedStructure);
    }
}
}
}
