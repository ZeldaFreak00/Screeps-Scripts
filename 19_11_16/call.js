var call = {

anzahl: function (){
var farmer_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'farmer');
var builder_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
var upgrader_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
var repair_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'repair');
var guard_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'guard');
var hunter_anzahl = _.filter(Game.creeps, (creep) => creep.memory.role == 'hunter');

console.log('Farmer: '+ farmer_anzahl.length + '\nBuilder: '+ builder_anzahl.length +'\nUpgrader: '+ upgrader_anzahl.length+'\nRepair: '+ repair_anzahl.length+'\nGuard: '+ guard_anzahl.length+'\nHunter: '+ hunter_anzahl.length);
 return;
},

guard_max: function (zahl , i){
   Game.spawns[i].room.memory.guard_max = zahl;
   console.log("Maximale Guard sind jetzt: " + zahl);
},
hunter_max: function (zahl , i){
   Game.spawns[i].room.memory.hunter_max = zahl;
   console.log("Maximale Hunter sind jetzt: " + zahl);
}

};
module.exports = call;
