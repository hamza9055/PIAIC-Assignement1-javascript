// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


let names = ["Asad", "Inshal", "Baziq", "Zubair"];
for (i = 0; i < names.length; i++)
console.log(`Asalam-o-Alikum! ${names[i]} I would like to invite you to dinner`);

console.log("-------------------")

var refused="Baziq"
console.log(refused+" Can't Come to dinner")
console.log("-------------------")

names[2]="Faizan";
names = names;
for (let i = 0; i < names.length; i++){
console.log(`Asalam-o-Alikum! ${names[i]} I would like to invite you to dinner`);
    
}
console.log(`I am inviting ${names.length} peoples`);
