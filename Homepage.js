async function Load(){

    let request = new Request("Homepage.json")
    let response = await fetch(request)

    let json_obj = await response.json()

    LoadNavbar(json_obj)
    Loadherosection(json_obj)
}

let nav = document.querySelector("nav");
nav.classList.add("topnav");
let section1 = document.querySelector("section");
section1.classList.add("hero")

function LoadNavbar(obj){

    let h2 = document.createElement("h2");
    h2.textContent = "AvSaad"
    h2.classList.add("logo")
    nav.appendChild(h2)

    let div1 = document.createElement("div");
    div1.classList.add("con1")
    nav.appendChild(div1)
    
    let links = obj['Links']
    let link = obj['connect']
    
    let a1 = document.createElement("a");
    a1.href = link[0];
    a1.textContent = links[0]
    div1.appendChild(a1)

    let a2 = document.createElement("a");
    a2.href = link[1];
    a2.textContent = links[1]
    div1.appendChild(a2)

    let a3 = document.createElement("a");
    a3.href = link[2];
    a3.textContent = links[2]
    div1.appendChild(a3)

    let a4 = document.createElement("a");
    a4.href = link[3];
    a4.textContent = links[3]
    div1.appendChild(a4)

    let login = document.createElement("a");
    login.classList.add("login")
    login.href = "log.html"
    login.textContent = "Login"
    nav.appendChild(login)
}

// let x = document.createElement("video")
let x = document.querySelector("video")
x.setAttribute('id','myVideo');
x.setAttribute("src","production ID_4110672.mp4");
section1.appendChild(x);

function Loadherosection(obj){

  let htext = document.createElement("h2")
  let ht = obj['Welcome']
  htext.classList.add("htext")
  htext.textContent = ht;
  section1.appendChild(htext)

  let htext2 = document.createElement("p")
  let ht2 = obj['WelcomeD']
  htext2.classList.add("ht2")
  htext2.textContent = ht2
  section1.appendChild(htext2) 

  let button = document.createElement("a");
  button.href = "Quiz.html";
  button.textContent = "Take a Test";
  button.classList.add("btn");
  section1.appendChild(button);
}

Load()

