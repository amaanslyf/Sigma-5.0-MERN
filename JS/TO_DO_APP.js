let Todo=[];
let req=prompt("What would you like to do?");
while(true){
    if(req=='exit'){
        console.log("OK, YOU QUIT THE APP");
        break;
    }
    if(req=='list'){
        console.log("------------------------");
        for(let tasks of Todo){
            console.log(`${Todo.indexOf(tasks)}: ${tasks}`);
        }
        console.log("------------------------");
    }    
    else if (req=='new'){
        let newTodo=prompt("Enter new todo");
        Todo.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if (req=='delete'){
        let idx=prompt("Enter the index of the todo to delete");
        if(idx>=0 && idx<Todo.length){
            let removedTodo=Todo.splice(idx,1);
            console.log(`Todo removed from the list ${idx, removedTodo}`);
        }
        else{
            console.log("Invalid index");
        }
    }else{
        console.log("Please enter a valid command");
    }
        
    req=prompt("What would you like to do?");
}