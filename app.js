window.onload = function () {
  let send = document.getElementById("button2");
  let btn3 = document.getElementById("btn3");
  let submit = document.getElementById("submit");

  submit.onclick = function () {
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    console.log(name.value);
    if (name.value == "sinha" && password.value == "1234") {
      window.location.href = "index.html";

     // window.open("index.html");
    } else {
      document.getElementById("msg").innerHTML =
        "Please provide correct credentials.";
    }
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
  btn3.onclick = function () {
    let list = document.getElementById("list");

    if (list) {
      list.innerHTML = "";
    }

    let containr = document.getElementById("container");
    if (containr) {
      containr.innerHTML = "";
    }

    async function load_pic() {
      const url = "https://api.imgflip.com/get_memes";

      const options = {
        method: "GET",
      };

      let response = await fetch(url, options);

      const resjs = await response.json();

      console.log(resjs.data.memes.length);
      let rand = Math.floor(Math.random() * 100);
      let a = resjs.data.memes[rand].url;

      let res2 = await fetch(a, options);
      console.log(res2);
      if (res2.status === 200) {
        const imageBlob = await res2.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        const image = document.createElement("img");
        image.id = "image";
        image.src = imageObjectURL;
        console.log(image);
        const container = document.getElementById("container");
        container.append(image);
      } else {
        console.log("HTTP-Error: " + response.status);
      }
    }
    load_pic();
  };
  send.onclick = function () {
    let list = document.getElementById("list");
    let input = document.getElementById("button1").value;

    if (!input) {
      alert("kuch dal be bsdk");
    }
    if (list) {
      list.innerHTML = "";
    }

    console.log(input);

    let word = input;
    let res = [];
    const userAction = async (word) => {
      fin =
        "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" +
        word;
      const response = await fetch(fin);
      const myJson = await response.json(); //extract JSON from the http response

      res = myJson[3];
      return res; // do something with myJson
    };

    userAction(word);

    setTimeout(() => {
      for (let i = 0; i < res.length; i++) {
        const li = document.createElement("li");
        li.id = i;
        li.className = "listing";
        li.innerHTML = res[i];
        list.appendChild(li);

        clickEvent = function () {
          window.open(li.innerHTML);
        };

        li.addEventListener("click", clickEvent);
      }
    }, 1000);

    //         send.disabled = "true"
    //         const style = document.createElement('style');

    // style.textContent = `

    // #button2:hover{

    //   }`;

    // send.appendChild(style);
  };
};
