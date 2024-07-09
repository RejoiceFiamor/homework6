//When the user enters the explore button on the 
//homepage; it takes the users name
function promptName(){
    let name = prompt("What is your name?");
    let Africa = document.querySelector("#African");
    Africa.innerHTML=`👋 Welcome ${name}, To Taste The Raw  Goodness Of African `;
    let Goodness = document.getElementById("Goodness");
    Goodness.innerHTML =`👋 Hi ${name}, Browse Through The African Goodness `;
}

let display = document.getElementById("display");
display.addEventListener("mouseenter", promptName);


//Added a click eventto the okro img
function alertokro(){
    alertokro("https://www.healthline.com/nutrition/okra-health-benefits");
}

let vegetable = document.querySelector("#okro");
vegetable.addEventListener("dblclick",alertokro);

// adding click to load more event
function loadMore(){
    let lean = document.getElementById("learn"); //element that contain the images
    lean.style.display="flex";
}
let leann = document.getElementById("leann");
leann.addEventListener("click", loadMore);

