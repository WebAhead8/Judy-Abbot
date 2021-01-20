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
