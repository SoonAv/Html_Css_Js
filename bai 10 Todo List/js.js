var input = document.querySelector('input')
var add = document.querySelector('button')
var todos = document.querySelector('.todos')
var form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    let val = input.value.trim()
    if(val){
        Addtodo({
            text: val,
            status: ''
        })
    }
    input.value = ''
})  


function Addtodo (todo) {
    // {
    //     text : 'adsadw',
    //     status: 'complete'
 
    // }
    // <li class="completed">
    //         <span>TEST adasda ads adsa adsad adsd asdasd asdwas asdwsadw awd</span>
    //         <i class="fa-solid fa-trash-can"></i>
    // </li>
    var li = document.createElement('li')
     li.innerHTML = ` 
    <span>${todo.text}</span>
           <i class="fa-solid fa-trash-can"></i>`
    if(todo.status === 'completed'){
            li.setAttribute('class','completed')
    }
    li.addEventListener('click', function(){
        this.classList.toggle('completed')
    })
    li.querySelector('i').addEventListener('click', function(e){
        this.parentElement.remove()
    })
    todos.appendChild(li)
}
saveTodoLis() {
    localStorage.setItem('todolis',)
}