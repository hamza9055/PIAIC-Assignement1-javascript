let magNames=["David Copperfield","Doug Henning","Harry Anderson","Lance Burton"];


const show_magicians = (all_magicians)=>{
   all_magicians.map(magician=>{
      console.log(magician)
   })
}

show_magicians(magNames)

const make_great = (all_magicians)=>{
  return all_magicians.map(magician=>{
      return `${magician} the great`
   })
}

let greatMagicians = make_great(magNames);


console.log("--------")
console.log("Great Magicians")
console.log("--------")
show_magicians(greatMagicians)
console.log("--------")
console.log("Original Magicians")
console.log("--------")
show_magicians(magNames)