var roleFarmer = require('role.Farmer');
var roleUpgrader = require('role.Upgrader');
var roleBuilder = require('role.Builder');
var roleFollowFarmer = require('role.FollowFarmer');
var roledeff = require('role.deff');
var rolerepair = require('role.Repair');
var spawn ='Hyrule'
var produce = true;


module.exports.loop = function () {
        
    var sources = Game.spawns[spawn].room.find(FIND_SOURCES);
    //Memory Clear tote Creeps
    for(var name in Memory.creeps) 
    {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    //Anzahl Check
    var farmer_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'farmer');
    var followfarmer_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'followfarmer');
    var builder_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgrader_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var repair_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'repair');
    var energie_anzahl = Game.spawns[spawn].energy;
    var target_count = new Array(sources.length);
    for(var i = 0;  i < sources.length; i++){
        var temp = _.filter(Game.creeps, (creep) => creep.memory.farm_target == i);
        temp = temp.length;
        target_count[i] = temp;
    }
    
    //Erstellen
    var temp = Math.floor(Math.random() * sources.length);
    switch(sources.length) {
        case 2:
            if(target_count[0] >= target_count[1]){
                temp = 1;
            }
            else{
                temp = 0;
            }
            break;
        case 3:
            if(target_count[0] >= target_count[1] >= target_count[2]){
                temp = 2;
            }
            else if (target_count[0] < target_count[1] < target_count[2]){
                temp = 0;
            }
            else{
                temp = 1;
            }
            break;
        default:
        
            break;
    }
    
    //
    // WWCCCCMM
    //
    if(produce){
    if(upgrader_anzahl.length < 16 && energie_anzahl >= 550) 
    {
        var newName = Game.spawns[spawn].createCreep([WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader', farm_target: temp});
        console.log('Erstelle neuen Upgrader (WWCCCCCMM) mit dem Ziel '+temp+': ' + newName);
        
    }
    else if(builder_anzahl.length < 16 && energie_anzahl >= 550) 
    {
        var newName = Game.spawns[spawn].createCreep([WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'builder', farm_target: temp});
        console.log('Erstelle neuen Builder (WWCCCCCMM) mit dem Ziel '+temp+': ' + newName);
    }
    else if(farmer_anzahl.length < 16 && energie_anzahl >= 550) 
    {
        var newName = Game.spawns[spawn].createCreep([WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'farmer', farm_target: temp});
        console.log('Erstelle neuen Farmer (WWCCCCCMM) mit dem Ziel '+temp+': ' + newName);
    }
    
    //
    // WCCMM
    //
    
    else if(farmer_anzahl.length < 6 && energie_anzahl >= 300) 
    {
        var newName = Game.spawns[spawn].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'farmer', farm_target: temp});
        console.log('Erstelle neuen Farmer (WCCMM) mit dem Ziel '+temp+': ' + newName);
    }
    else if(upgrader_anzahl.length < 3 && energie_anzahl >= 300) 
    {
        var newName = Game.spawns[spawn].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader', farm_target: temp});
        console.log('Erstelle neuen Upgrader (WCCMM) mit dem Ziel '+temp+': ' + newName);
        
    }
    else if(builder_anzahl.length < 3 && energie_anzahl >= 300) 
    {
        var newName = Game.spawns[spawn].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'builder', farm_target: temp});
        console.log('Erstelle neuen Builder (WCCMM) mit dem Ziel '+temp+': ' + newName);
    }
    else if(repair_anzahl.length < 8 && energie_anzahl >= 300) 
    {
        var newName = Game.spawns[spawn].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'repair', farm_target: temp});
        console.log('Erstelle neuen Repair (WCCMM) mit dem Ziel '+temp+': ' + newName);
    }
    
    //
    // WCM
    //
    
    else if(farmer_anzahl.length < 3 && energie_anzahl >= 200) 
    {
        var newName = Game.spawns[spawn].createCreep([WORK,CARRY,MOVE], undefined, {role: 'farmer' , farm_target: temp});
        console.log('Erstelle neuen Farmer (WCM) mit dem Ziel '+temp+': ' + newName);
    }
    else if(builder_anzahl.length < 1 && energie_anzahl >= 200) 
    {
        var newName = Game.spawns[spawn].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder', farm_target: temp});
        console.log('Erstelle neuen Builder (WCM) mit dem Ziel '+temp+': ' + newName);
    }
    else if(upgrader_anzahl.length < 1 && energie_anzahl >= 200) 
    {
        var newName = Game.spawns[spawn].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader', farm_target: temp});
        console.log('Erstelle neuen Upgrader (WCM) mit dem Ziel '+temp+': ' + newName);
        
    }
    else if(followfarmer_anzahl.length < 3 && energie_anzahl >= 400) 
    {
        var newName = Game.spawns[spawn].createCreep([WORK,CARRY,CARRY,MOVE,MOVE,CARRY,CARRY], undefined, {role: 'followfarmer', flag_target: 'farm_left_1'});
        console.log('Erstelle neuen FollowFarmer (WCCCCMM): ' + newName);
        
    }
    else if(energie_anzahl >= 300)
    {
        var newName = Game.spawns[spawn].createCreep([ATTACK,ATTACK,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], undefined, {role: 'deff', flag_target: 'hyrule_deff'});
        console.log('Erstelle neuen Deff (AAMTTTTTTTTT): ' + newName);
    }
    //else if(energie_anzahl >=300){
      //  console.log('Verkaufe: '+Game.market.createOrder(ORDER_SELL, RESOURCE_ENERGY, 0.10, energie_anzahl));
    //}
    }


    var tower = Game.getObjectById('TOWER_ID');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
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
            case 'followfarmer':
                roleFollowFarmer.run(creep);
                break;
            case 'deff':
                roledeff.run(creep);
                break;
            case 'repair':
                rolerepair.run(creep);
                break;
            default:
                roleFarmer.run(creep);
                break;
        }
    }
}