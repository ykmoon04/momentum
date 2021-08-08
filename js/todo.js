const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#pending");
const done = document.querySelector("#done");

const TODOS_KEY = "todos"
//let toDos = JSON.parse(localStorage.getItem(TODOS_KEY));
let toDos = [];
//let done = [];


function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const deleteBtn = document.createElement("button");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add('fas','fa-eraser','fa-lg');
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.addEventListener("click", deleteToDo);

    const doneBtn = document.createElement("button");
    const doneIcon = document.createElement("i");
    doneIcon.classList.add('fas','fa-check-circle','fa-lg');
    doneBtn.appendChild(doneIcon);
    doneBtn.addEventListener("click", doneToDo);

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);
    todoList.appendChild(li);
}

function doneToDo(event){
    const li = event.currentTarget.parentElement;
    event.currentTarget.remove();

    const redo = document.createElement("button");
    const redoIcon = document.createElement("i");
    redoIcon.classList.add('fas','fa-redo','fa-lg');
    redo.appendChild(redoIcon);
    redo.addEventListener("click",restoreTodo);
    li.appendChild(redo);

    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    done.appendChild(li);
}

function deleteToDo(event){
    const li = event.currentTarget.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function restoreTodo(event){
    const li = event.currentTarget.parentElement;
    console.log(li);
    const text = li.firstElementChild;
    event.target.remove();
    const newTodoObj = {
        text:text.innerText,
        id:parseInt(li.id),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
    li.remove();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit",handleToDoSubmit);

const currentToDos = localStorage.getItem(TODOS_KEY);

if(currentToDos){
    const parsedToDos = JSON.parse(currentToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);        
}