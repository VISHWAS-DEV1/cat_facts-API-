const Url = "https://cat-fact.herokuapp.com/facts";

let paragraph = document.querySelector("#para1");
let button = document.querySelector(".btn");
const getfacts = async () =>{
    let response = await fetch(Url);
    // console.log(response);
    let data =await response.json();
    console.log(data);
    paragraph.innerText = data[Math.floor(Math.random()*data.length)].text;
}
button.addEventListener("click", getfacts);


