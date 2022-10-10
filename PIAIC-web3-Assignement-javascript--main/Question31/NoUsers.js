let userNames = ["admin", "Asad", "Usama", "Faizan", "Inshal"];

userNames.map((user)=>{
    if(user === 'admin'){
        console.log(`Hello admin, would you like to see a status report?`)
    }else{
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
})
users = [];
if(users.length ===0){
    console.log("We need to find some users")
}
