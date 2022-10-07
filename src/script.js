let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button-generate");

let sizePassword = document.querySelector("#value");

let containerPassword = document.querySelector("#container-password");
let password = document.querySelector("#generated-password");

let charset = "abcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
let newPassword = "";

sizePassword.innerHTML = String(sliderElement.value).padStart(2, '0')

slider.oninput = function(){
  sizePassword.innerHTML = String(this.value).padStart(2, '0')

}

function generatePassword(){

  let receiveCharacterFromFor = "";

  for(let i = 0, baseCharacterAmount = charset.length; i < sliderElement.value; i++){

    receiveCharacterFromFor += charset.charAt(Math.floor(Math.random() * baseCharacterAmount));
  }
  
  containerPassword.classList.remove("hide-password");
  password.innerHTML = receiveCharacterFromFor;
  newPassword = receiveCharacterFromFor;
}

function copyGeneratedPassword(){
  navigator.clipboard.writeText(newPassword).then(() => alert("Senha copiada!"))
}

