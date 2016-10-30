import React from 'react'; //import the reactnode library
import ReactDOM from 'react-dom'; //import the react-dom node library
import Todos from './components/Todos'; // request App react component

//Task(): Create event listener for the 'keypress' of enter and the 'add' button
//<---------------------------------------------------------------------------->
//Create global array...
var todos = []

//Create variable for 'Add Button' and 'Keypress'
var keyPress = document.getElementById('addInputField')
var clickBtn = document.getElementById('addBtn')

//Event Listener for the keyPress on the 'input field' and Add Button on 'click'
keyPress.addEventListener('keypress', pressEnter);
clickBtn.addEventListener('click', addTodo);

//Create function so that the 'addTodo' only runs once the enter key is pressed and not after every keystroke...
var pressEnter = function(event){
    if (event.key === 'Enter'){
        addTodo();
    }
}

console.log(todos)

//<---------------------------------------------------------------------------->
//<--------------------------End of Task--------------------------------------->

//Task(): Create function to add input field content to the global array 'todos'
//<---------------------------------------------------------------------------->
function addTodo(){
    var addInputValue = addInputValue.value
    addInputValue.value = ''
    todos.push(addInputValue)
    renderView(todos)
}

//<---------------------------------------------------------------------------->
//<--------------------------End of Task--------------------------------------->

//Task(): Render View
//<---------------------------------------------------------------------------->
function renderView(arrayTodoItems){
    ReactDOM.render(
        <Todos taskList={arrayTodoItems} />, document.getElementById('todoItems')
    )
}
//<---------------------------------------------------------------------------->
//<--------------------------End of Task--------------------------------------->
