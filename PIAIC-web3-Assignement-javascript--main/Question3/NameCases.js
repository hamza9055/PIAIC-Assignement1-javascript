
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }

const person="Talha hamid"
console.log("Lower Case: " + person.toLowerCase())
console.log("Upper Case: " + person.toUpperCase())
console.log("Upper Case: " + titleCase(person))

