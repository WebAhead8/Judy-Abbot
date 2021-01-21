test("check if the push (enter) is working ", (t) => {
  //   function stamiulate enter pressing to save the input.value
  input.value = "a";
  const ke = new KeyboardEvent("keypress", {
    bubbles: true,
    cancelable: true,
    key: "Enter",
  });
  input.dispatchEvent(ke);
  //   addNewMission(toDo);
  t.equal(LIST[0].name, "a");
});

test("check if the push (enter) is working ", (t) => {
  //   function stamiulate enter pressing to save the input.value
  input.value = "aaa";
  const ke = new KeyboardEvent("keypress", {
    bubbles: true,
    cancelable: true,
    key: "Enter",
  });
  input.dispatchEvent(ke);
  //   addNewMission(toDo);
  t.equal(LIST[1].name, "aaa");
});

test("check if check function works", (t) => {
  const mission = document.querySelector(".item i");
  mission.click();
  const expected = "fa co fa-check-circle";
  t.equal(mission.className, expected);
});

test("check if uncheck function works", (t) => {
  const unmission = document.querySelector(".item i");
  unmission.click();
  const expected = "fa co fa-circle-thin";
  t.equal(unmission.className, expected);
});

test("cheack if edit function works", (t) => {
  const editFun = document.querySelector(".item").childNodes[7];
  editFun.click();
  const expected = "flex";
  styleEdit = document.querySelector(".edit").style.display;
  t.equal(styleEdit, expected);
});

test("check if save function works", (t) => {
  const input1 = document.querySelector(".edit").childNodes[1];
  input1.value = "9899";
  const saveFun = document.querySelector(".edit").childNodes[3];
  saveFun.click();
  const expected = "9899";
  t.equal(LIST[0].name, expected);
});

test("delete function check", (t) => {
  const deletebutton = document.querySelector(".item").childNodes[9];
  deletebutton.click();
  const listLength = document.getElementById("list").childElementCount;
  const expected = 1;
  t.equal(listLength, expected);
  list.innerHTML = "";
  LIST = [];
  id = 0;
});
