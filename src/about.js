//adding click to call

function clickToCall() {
  let showcontact= document.getElementById("showcontact");
  showcontact.style.display = "block";
  showcontact.innerHTML = `0248817346`;
}
let action = document.getElementById("action");
action.addEventListener("click", clickToCall);

// adding a link button from about us page to product page
function BackToProductPage(){
  let unique = document.getElementById("unique");
  unique.style.display = "block";
}
let product = document.getElementById("RawFoodProduct")
product.addEventListener("dblclick",BackToProductPage);

