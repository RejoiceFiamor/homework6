//adding click to call

function clickToCall() {
  let showcontact= document.getElementById("showcontact");
  showcontact.style.display = "block";
  showcontact.innerHTML = `0248817346`;
}
let action = document.getElementById("action");
action.addEventListener("click", clickToCall);
