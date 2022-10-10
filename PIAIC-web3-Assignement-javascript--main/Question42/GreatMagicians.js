let magNames=["David Copperfield","Doug Henning","Harry Anderson","Lance Burton"];


function show_magicians(arryMagicians){
    arryMagicians.map((magician)=>{
        console.log(magician)
    })
}

show_magicians(magNames)


function make_great(all_magicians) {
    return all_magicians.map(magician=>{
        return `${magician} the great`
    })
}

magNames = make_great(magNames);

show_magicians(magNames)
