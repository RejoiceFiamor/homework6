
// function ClickToCall(){
//     let phone = document.querySelector("#phone");
//     phone.style.display="block";
//     phone.innerHTML=`+23328817346` 
// }
// let phone = document.querySelector("phone");
// phone.addEventListener("dblclick", ClickToCall);






function handleEmailClick() {
  const emailAddress = emailElement.textContent.slice(6); 
  emailAddress.location.href = `mailto:${rejoicemawusi57@gmail.com}`;
}
const phoneElement = document.getElementById('phone');
phoneElement.addEventListener('click', handlePhoneClick);

const emailElement = document.getElementById('email');
emailElement.addEventListener('click', handleEmailClick);
