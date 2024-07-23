// When the user enters the explore button on the 
// homepage; it takes the users name
function promptName(){
    let name = prompt("What is your name?");
    let Africa = document.querySelector("#African");
    if(name){
    Africa.innerHTML=`👋 Welcome ${name}, To Taste The Raw  Goodness Of African `;
    } else{
        Africa.innerHTML=`👋Hi lovely, welcome To Taste The Raw Goodness Of African`;
    }
    let Goodness = document.getElementById("Goodness");
    if(name){
      Goodness.innerHTML = `👋 Hi ${name}, Browse Through The African Goodness `;
    } else{
        Goodness.innerHTML=`👋Hi lovely, Browse Through The African Goodness`;
    }
}

let display = document.getElementById("display");
display.addEventListener("mouseenter", promptName);





