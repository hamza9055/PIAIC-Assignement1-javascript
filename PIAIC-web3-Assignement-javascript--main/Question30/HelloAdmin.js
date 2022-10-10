// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let userNames = ["admin", "Asad", "Usama", "Haizan", "Inshal"];


userNames.forEach(function login(name) {
    if(name === "admin") {
        console.log("Hey Admin Would you like to See Report?")
    }else {
        console.log(`Hello ${name} thank you for logging in again`)
    }
}
)

