import { createUser } from "./createUser.js";
import { getUserById, getUsers } from "./fetchUser.js"


//Fetch data from all users
document.getElementById('fetchUser').addEventListener('click', async ()=> {
    try {
        const users = await getUsers();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
})

//Fetch Data from a single user
document.getElementById('fetchUserById').addEventListener('click', async ()=> {
    try {
        const user = await getUserById(1);
        console.log(user);
        return user;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
})

//Send new user to db
document.getElementById('createUser').addEventListener('submit', async (event)=> {
    try {
        const users = await createUser(persona);
        event.preventDefault();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
})

