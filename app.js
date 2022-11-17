window.onload = function () {
  let send = document.getElementById("button2");
  let btn3 = document.getElementById("btn3");
  let submit = document.getElementById("submit");

  submit.onclick = function () {
    window.open('kg.pptx')
  };

  window.addEventListener(
    "keydown",
    function (e) {
      let keyPressed = e.key.toUpperCase();
      if (keyPressed == "ENTER") {
        submit.click();
      }
    },
    false
  );
  
};
