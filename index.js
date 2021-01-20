const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Variables
let LIST, id;

//classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// get item from localstorage
let data = localStorage.getItem("TODO");

// check if data is not empty
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length; // set the id to the last one in the list
  loadList(LIST); // load the list to the user interface
} else {
  // if data isn't empty
  LIST = [];
  id = 0;
}
// load items to the user's interface
function loadList(array) {
  array.forEach(function (item) {
    addNewMission(item.name, item.id, item.done, item.trash);
  });
}

// clear the local storage
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// Show todays date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Adding Todo to the list :------->
function addNewMission(toDo, id, done, trash) {
  // if the toDo is in the trash, don't allow the user from add it again!
  if (trash) {
    return; //to stop the function without adding the toDo
  }

  if (done) {
    var DONE = CHECK;
    var LINE = LINE_THROUGH;
  } else {
    DONE = UNCHECK;
    LINE = "";
  }

  const text = `
    <li class="item">
     <i class="fa ${DONE} co" job="complete" id="${id}"></i>
      <p class="text ${LINE}">${toDo}</p>
      <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>`;

  list.insertAdjacentHTML("beforeend", text); //add new element at the end of the list in the html page ul
}

// add an item to the list with the enter key

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const toDo = input.value;
    // checks if the input isn't empty--->
    if (toDo) {
      addNewMission(toDo, id); // send the input to the add function to add the job to the frontend(for the user)
      LIST.push({ name: toDo, id: id, done: false, trash: false }); //add the job info to the array list in  the backend(for the devloper)
      id++; //increase the id by one every time there is a new job
    }
    input.value = "";
  }
});

// function editMission() {
//   pass;
// }

// function deleteMission() {
//   pass;
// }

// function checkMission() {
//   pass;
// }

// function categorizeMission() {
//   pass;
// }

// function showOnCallendar() {
//   pass;
// }

// function remindMe() {
//   pass;
// }

// function filter() {
//   pass;
// }
