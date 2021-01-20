// Select the Elements
const clear = document.querySelector('.clear')
const dateElement = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')

// Variables
var LIST, id

//classes names
const CHECK = 'fa-check-circle'
const UNCHECK = 'fa-circle-thin'
const LINE_THROUGH = 'lineThrough'
const SAVE = 'fa fa-save deee'
const EDIT = 'fa fa-edit de'

// get item from localstorage
let data = localStorage.getItem('TODO')
console.log(data, 'data')
// check if data is not empty
if (data) {
  LIST = JSON.parse(data)
  id = LIST.length // set the id to the last one in the list
  loadList(LIST) // load the list to the user interface
} else {
  // if data isn't empty
  LIST = []
  id = 0
}

// load items to the user's interface
function loadList (array) {
  array.forEach(function (item) {
    addNewMission(item.name, item.id, item.done, item.trash)
  })
}

// clear the local storage
clear.addEventListener('click', function () {
  localStorage.clear()
  location.reload()
})

// Show todays date
const options = { weekday: 'long', month: 'short', day: 'numeric' }
const today = new Date()

dateElement.innerHTML = today.toLocaleDateString('en-US', options)

//const list = [{todo: "drink Coffe", id:}, {todo: "shower"}, {todo: "drink cola"}, {todo: "eat vegtables"}, {todo: "read book"}]

// Adding Todo to the list :------->
function addNewMission (toDo, id, done, trash) {
  // if the toDo is in the trash, don't allow the user from add it again!
  if (trash) {
    return
  }

  const DONE = done ? CHECK : UNCHECK
  const LINE = done ? LINE_THROUGH : ''

  const item = `<li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p id="${id}" class="text ${LINE}">${toDo}</p>
    <div class="edit" id="edit">
    <input type="item" id="${id}" placeholder="edit to-do" ></input>
    <i class="fa fa-save deee" job="save" id="${id}"></i>
    </div>
    <i class="fa fa-edit dee" job="edit" id="${id}"></i>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
  </li>`

  list.insertAdjacentHTML('beforeend', item) //add new element at the end of the list in the html page ul
}

// add an item to the list with the enter key
document.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const toDo = input.value
    // checks if the input isn't empty--->

    if (toDo) {
      addNewMission(toDo, id) // send the input to the add function to add the job to the frontend(for the user)
      LIST.push({ name: toDo, id: id, done: false, trash: false }) //add the job info to the array list in  the backend(for the devloper)
      console.log(LIST)
      id++ //increase the id by one every time there is a new job
    }
    input.value = ''
  }
})

// function editMission(){
//     pass
// }

function deleteMission (element) {
  element.parentNode.parentNode.removeChild(element.parentNode)
  console.log(element.id)

  LIST[element.id].trash = true
}

function checkMission (element) {
  element.classList.toggle(CHECK)
  element.classList.toggle(UNCHECK)
  element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH)
  LIST[element.id].done = LIST[element.id].done ? false : true
}

// edit to do
function editMission (element) {
  let num = element.id
  console.log(num)
  const index = LIST.findIndex(text => text.id == num)
  console.log(index)
  document.getElementsByClassName('edit')[index].style.display = 'flex'
  console.log('div display')
}
// save to do
function saveMission (element) {
  let num1 = element.id
  const index1 = LIST.findIndex(text => text.id == num1)
  let oldInputValue = document.getElementsByClassName('text')[index1]
  let newInputValue = element.previousSibling.previousSibling
  oldInputValue.textContent = newInputValue.value
  newInputValue.value = ''
  document.getElementsByClassName('edit')[index1].style.display = 'none'
}

list.addEventListener('click', function (event) {
  const element = event.target // return the clicked element inside list
  const elementJob = element.attributes.job.value // complete or delete
  console.log(element)
  if (elementJob == 'complete') {
    checkMission(element)
  } else if (elementJob == 'delete') {
    deleteMission(element)
  } else if (elementJob === 'edit') {
    editMission(element)
  } else if (elementJob === 'save') {
    saveMission(element)
  }

  // add item to localstorage ( this code must be added where the LIST array is updated)
  localStorage.setItem('TODO', JSON.stringify(LIST))
})

