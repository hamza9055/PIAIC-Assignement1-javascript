// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

console.log("Tests for equality and inequality with strings")
let name = 'Ali';
console.log(name != 'Ali')
console.log(name == 'Ali')

console.log("Tests using the lower case function")
let lowerCase="Germany"
console.log(lowerCase.toLowerCase() == 'lowercase')
console.log(lowerCase.toLowerCase() != 'lowercase')

console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to")
let number=9;
console.log(number==9)
console.log(number!=9)
console.log(number<9)
console.log(number>=9)
console.log(number<=9)

console.log("Tests using 'and' and 'or' operators")
console.log(number==9 && number==5)
console.log(number==9 || number==5)


console.log("Test whether an item is or not in a array")
const fruits = ["Banana", "Orange", "Apple", "Mango"];
function fruit(items) {
    if(fruits.includes(items)) {
        return true
    }else {
        return false
    }
}

let item1 = fruit("Banana")
let item2 = fruit("Grapes")
console.log(item1)
console.log(item2)



// console.log("Test whether an item is  in a array")
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let item = fruits.includes("Banana")
// console.log(item)

// console.log("Test whether an item is not in a array")

// let item2 = fruits.includes("Grapes")
// console.log(item2)