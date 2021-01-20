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
    //list.innerHTML = "";
  });
  
test("check if the push (enter) is working ", (t) => {
    //   function stamiulate enter pressing to save the input.value
    input.value = "abc";
    const ke = new KeyboardEvent("keypress", {
      bubbles: true,
      cancelable: true,
      key: "Enter",
    });
    input.dispatchEvent(ke);
    //   addNewMission(toDo);
    t.equal(LIST[1].name, "abc");
    
  });
  

  
  test("chceked todo", t =>{
     const missions = document.querySelector(".item i");
     const completed =missions.firstChild;
     console.log(missions)
     completed.className ="fa fa-check-circle co"
    //const completed = document.getElementsByClassName("fa fa-check-circle co");
    
    t.equal(completed.length, 1)

    console.log("completed test check")

  })

  list.innerHTML = "";