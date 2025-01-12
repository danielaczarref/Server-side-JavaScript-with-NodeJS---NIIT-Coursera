const users = require('./users')

const getAllUsers = ()=>{
    return new Promise((resolve, reject) => {
        if (users.length > 0) {
            resolve(users);
        } else {
            reject(new Error('No users'));
        }
    })
}

const createUser = (user) => {
    return new Promise((resolve, reject) => {
        if (!user || !user.id || !user.name) {
            reject('No user to be added')
        } else {
            users.push(user);
            resolve(user);
        }
    })
 }

 const getAUserByID = (id) =>{
    return new Promise((resolve, reject) => {
        const userSelected = users.filter((user) => {
            if (user.id == id) {
                return user
            }
        });
        if (userSelected.length > 0) {
            resolve(userSelected);
        } else {
            reject('User does not exist');
        }
    })
}

const displayUsers = async (user) => {
   const allUsers = null;
   return allUsers;
}

const displayAUser = async(id) =>{
    const user = null;
    return user;
}

module.exports = {
    getAllUsers, getAUserByID, createUser, displayAUser, displayUsers
}