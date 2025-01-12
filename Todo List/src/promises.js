const todolist = require('./todolist')

getAllTodos = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (!todolist || todolist.length == 0) {
                reject(new Error('No data'));
            } else {
                resolve(todolist);
            }
        }, 1000);
        })
}

const createTodo = (todo) => {
    return new Promise((resolve, reject) => {
        if (!todo || !todo.id || !todo.title) {
            reject('No data to be added');
        } else {
            todolist.push(todo);
            resolve(todo);
        }
    });
};

module.exports ={
    createTodo,getAllTodos
}