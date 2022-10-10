
let current_users = ["Hamza", "Asad", "Usama", "Faizan", "Inshal"];
let new_user = ["Asad", "Baziq", "Usman", "Inshal", "Subhan"]
new_user.forEach((item) => {
    if (current_users.includes(item)) {
        console.log(`${item} has already been used`)
    } else {
        console.log(`${item} is available`)
    }
})


