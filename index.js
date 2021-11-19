let message = `Welcome to our amazing TO DO app`

for(const user of users){
    message += `Hi ${user.name} your ID is ${user.id} and your address is ${user.address.city}\n`
}

alert(message)

const id = Number(prompt(`Please, enter your id number: `))

toDoList =  ``

if(isNaN(id) || id>12 || id<0){
    alert("Your ID was incorrect")
}else {
    
    for(const todo of todos){
        if(id === todo.id){
            toDoList += `To Do: ${todo.title}\n`
        }
    }


    const confirmation = confirm('Do you want to see the current list, press "ok"\nDo you want to add a to-do on the list press "cancel"')

    if(confirmation){
        alert(toDoList)
    }else{
        const addToDo = prompt("Please add your to-do")
        todos.push({userId: id, id: todos.length+1, title: addToDo, completed: false})
        toDoList += `To Do: ${addToDo}\n`
        alert(toDoList)
    }
    
}




