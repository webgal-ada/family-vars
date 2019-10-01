/* var me = {
  name: 'Sina',
  age: 24,
  relationship: 'self',
  children: [],
  karateSkills: null
};

var sam = {};
sam.name = 'Sam';
sam.age = 41;
sam.relationship = 'brother';
sam.karateSkills = 'blue belt';
sam.children = [];

var mom = {};
mom.name = 'Zohreh';
mom.age = 61;
mom.relationship = 'mother';
mom.children = [me, sam];
mom.karateSkills = 'black belt';

var family = [me, mom, sam]; */

//console.log(family);
var family = [];

var person = {
  name: "Yvonne",
  age: 42,
  relationship: "sister",
  children: ["Bo", "Jerret"],
  job: "teacher"
};
var person = {
  name: "Joey",
  age: 40,
  relationship: "brother",
  children: ["JoeJr", "Cirly"],
  job: "teacher"
};
var person = {
  name: "Carol",
  age: 44,
  relationship: "sister",
  children: [],
  job: "teacher"
};

function createPerson(name, age, coder, relationship, job) {
  var person = {};
  person.name = name;
  person.age = age;
  person.coder = coder;
  person.relationship = relationship;
  person.job = job;
  createPerson.push("Janis");
}

console.log(person);
