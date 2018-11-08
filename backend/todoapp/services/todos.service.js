const ToDo = require('../models/todo.models');
_this = this;
exports.getTodos = async function(query, page, limit){
    const options = {
        page,
        limit
    };
    try {
        return await ToDo.paginate(query, options);
    } catch (e) {
        throw Error('Error while Paginating Todos')
    }
};
exports.createTodo = async function(todo){
    const newTodo = new ToDo({
        title: todo.title,
        description: todo.description,
        date: new Date(),
        status: todo.status
    });
    try{
        return await newTodo.save();
    }catch(e){
        throw Error("Error while Creating Todo")
    }
};
exports.updateTodo = async function(todo){
    let oldTodo;
    const id = todo.id;
    try{
        oldTodo = await ToDo.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }
    if(!oldTodo){
        return false;
    }
    oldTodo.title = todo.title;
    oldTodo.description = todo.description;
    oldTodo.status = todo.status;
    try{
        return await oldTodo.save();
    }catch(e){
        throw Error("And Error occured while updating the Todo");
    }
};
exports.deleteTodo = async function(id){
    try{
        const deleted = await ToDo.remove({_id: id});
        if(deleted.result.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Todo")
    }
};