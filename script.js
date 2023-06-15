var input = document.querySelector('.input')
var paragrafoAlert = document.querySelector('.p-alert')
var agrupamentoAlert = document.querySelector('.agrupamento-alert')
var botaoAlert = document.querySelector('.btn-enviar')

function alertaEmail() {
   input.classList.add('input-alert')
   paragrafoAlert.style.display = "block"
   agrupamentoAlert.style.flexDirection = "row-reverse"
   agrupamentoAlert.style.justifyContent = "space-between"
}

function validatorEmail(input) {
  let emailPattern = /\S+@\S+\.\S+/
  return emailPattern.test(input)
}

function loader() {
  var div = document.querySelector('.loader')
  div.style.display = "flex"
  setTimeout(() => hideLoader(), 1500)

}

function hideLoader() {
  var div = document.querySelector('.loader')
  div.style.display = "none"

}
botaoAlert.onclick = function() {
  var input = document.querySelector('.input')
  if(input.value == '') {
    document.querySelector('.email-required').innerHTML = 'Email required!' 
  }
  else {
    document.querySelector('.email-required').innerHTML = '' 
    if (validatorEmail(input.value) === false) {
      console.log(validatorEmail(input.value))
      console.log("email falso!")
      alertaEmail()
    }
    else {
      loader()
      setTimeout(() => {
        emailChecked()
      }, 1500);
    }
  }
}

function emailChecked() {
  document.querySelector('.container-main').style.display = "none"
  document.querySelector('.container-left').style.display = "none"
  document.querySelector('.container-right').style.display = "none"
  document.querySelector('.container-main2').style.display = "block"
  document.querySelector('.checked-p').innerHTML = `A confirmation email has been sent to <strong>${input.value}</strong>. Please open it and click the button inside to confirm your subscription.`

}

function returnToStart() {
  window.location.reload()
}


//create a new element in html to add a image from mobile devices
var divImg = document.querySelector('.container-img')
var img = document.createElement("img");
img.src= "assets/images/illustration-sign-up-mobile.svg";
img.classList.add('img-sec')
divImg.appendChild(img);



