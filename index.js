let form = document.querySelector('form');
form.addEventListener('submit', addTodo);

function addTodo(e){
    e.preventDefault();
    let li = document.createElement('li');
    li.addEventListener('click', completeTodo)
    let input = document.querySelector('#item').value;
    li.innerText = input;
    let button = document.createElement('button')
    button.innerText = 'X'
    button.addEventListener('click', removeTodo);
    li.appendChild(button)
    let ul = document.querySelector('ul');
    ul.appendChild(li);
}

function removeTodo(e){
    console.log(e)
    console.log(e.target)
    console.log(e.target.parentNode)
    e.target.parentNode.remove();
}

function completeTodo(e){
   if(e.target.getAttribute('aria-checked') !== 'true'){
       e.target.setAttribute('aria-checked', 'true');
   }
   else e.target.setAttribute('aria-checked', 'false');
}


