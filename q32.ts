let current_users:string[]=["Alish","Farrukh","Lily","Amna","fajer"]
let new_users:string[]=["Alish","Farrukh","John","Asim","Alina"]

for (let new_user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();
    
    // Check if the lowercase version of the new username exists in the current_users list
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        console.log(`The username "${new_user}" is not available. Please enter a new username.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
}