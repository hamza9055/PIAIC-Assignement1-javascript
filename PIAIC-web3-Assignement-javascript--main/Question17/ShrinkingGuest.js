// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let names = ["Asad", "Inshal", "Baziq", "Zubair"];
for (i = 0; i < names.length; i++)
console.log(`Asalam-o-Alikum! ${names[i]} I would like to invite you to dinner`);

console.log("-------------------")

var refused="Baziq"
console.log(refused+" Can't Come to dinner")
console.log("-------------------")

names[2]="Faizan";

for (let i = 0; i < names.length; i++){
console.log(`Asalam-o-Alikum! ${names[i]} I would like to invite you to dinner`);
    
}
console.log("\n-------------------\n");
console.log("Hello! I have found bigger Table for the Dinner\n\t");


names.unshift("Usman");
names.splice(3, 0, "Habib");
names.push("Haris")

for (i = 0; i < names.length; i++) {
  console.log(
    `Asalam-o-Alikum! ${names[i]} I would like to invite you to dinner`
  );
}

console.log("\n-------------------\n");
console.log("I can invite only two Persons\n\t");

while (names.length > 2) {
  let item = names.pop();
  console.log(
    `Asalam-o-Alikum ${item} Sorry, I can't  to invite you to dinner`
  );
}
console.log("\n-------------------\n");

for (i = 0; i < names.length; i++) {
  console.log(`Asalam-o-Alikum ${names[i]} , you are still  invited  to dinner`)
  ;
  }

console.log("\n-------------------\n");

console.log("\nRemove All");

while (names.length > 0) {
  let item = names.pop();
  console.log(
    `Asalam-o-Alikum ${item} Sorry, I can't  to invite you to dinner`
  );
}

console.log("Empty Array:", names);
