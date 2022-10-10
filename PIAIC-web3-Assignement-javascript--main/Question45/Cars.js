let car;
const add_car_value = (manf_name, model, args) => { //arbitary is an arr
   car = {
        manufacturer: manf_name,
        model: model,
        Exra: args,
       
    }
}
add_car_value("Honda", 17,{ color: "red", Year: 2022 })



console.log(car);


