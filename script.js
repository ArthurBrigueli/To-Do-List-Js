const textinput = document.querySelector('.textarea')
const button = document.querySelector('.button-adicionar')
const todolist = document.querySelector('.todolist')



button.addEventListener('click', (e)=>{
    e.preventDefault()

    const val = textinput.value

    if(val.length > 0){
        addTodo()
        textinput.style.border = 'none'
    }else{
        textinput.style.border = '1px solid red'
    }
})




const addTodo = ()=>{

    const divlist = document.createElement('div')
    divlist.classList.add('divlist')

    const item = document.createElement('p')
    item.id = 'item'
    item.innerText = textinput.value
    divlist.appendChild(item)

    todolist.appendChild(divlist)
    textinput.value = ''

    //checked
    const checked = document.createElement('button')
    checked.innerHTML = '<i class="fa-solid fa-check"></i>'
    checked.id = 'checked'
    divlist.appendChild(checked)
    
    //trash
    const trash = document.createElement('button')
    trash.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>'
    trash.id = 'trash'
    divlist.appendChild(trash)
    


    trash.addEventListener('click', (e)=>{
        e.preventDefault()
        divlist.remove()
    })

    checked.addEventListener('click', (e)=>{
        divlist.classList.toggle('checked1')
        
    })

}


textinput.addEventListener('keyup', (e)=>{
    if(e.code === 'Enter'){
        addTodo()
    }

})