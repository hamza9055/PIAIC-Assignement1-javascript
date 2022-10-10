// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


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

