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

    const buttonTrash = document.createElement('button')
    buttonTrash.innerHTML = '<i class="fa-solid fa-check"></i>'
    buttonTrash.classList.add('buttonTrash')
    divlist.appendChild(buttonTrash)
    
    const buttonList = document.createElement('button')
    buttonList.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>'
    buttonList.classList.add('buttonList')
    divlist.appendChild(buttonList)


    buttonList.addEventListener('click', (e)=>{
        e.preventDefault()
        divlist.remove()
    })

    buttonTrash.addEventListener('click', (e)=>{
        const itemTrash = item
        itemTrash.classList.toggle('checked')
        
    })

}


textinput.addEventListener('keyup', (e)=>{
    if(e.code === 'Enter'){
        addTodo()
    }

})