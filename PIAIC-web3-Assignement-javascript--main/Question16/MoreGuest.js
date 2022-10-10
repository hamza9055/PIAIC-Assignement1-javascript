// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

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
