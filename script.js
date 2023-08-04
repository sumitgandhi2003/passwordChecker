function passwordChecker() {
  const password = document.getElementById("pass1").value;
  const passwordC = document.getElementById("pass2").value;
  var music = new Audio("password.mp3");
  if (password.length >= 6 && passwordC.length >= 6) {
    if (password === passwordC) {
      if (password.charAt(0) === passwordC.charAt(0).toUpperCase()) {
        music.play();
        alert("Password change Successfully");
        console.log(password);
        reset();
        console.log("Song Played Success");
      } else {
        alert("Password must have atleast one uppercase letter");
        reset();
      }
    } else {
      alert("Password must be same");
      reset();
    }
  } else {
    alert("Password should be Greater than or Equal Six Letters");
    reset();
  }
}
function typeChanger() {
  const input = document.querySelectorAll("input");
  let eye = document.getElementById("eye");
  if (eye.classList.contains("fa-eye")) {
    eye.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    eye.classList.replace("fa-eye-slash", "fa-eye");
  }
  for (let i = 0; i < input.length; i++) {
    // input[i].type = "text";
    if (input[i].type == "password") {
      input[i].type = "text";
    } else {
      input[i].type = "password";
    }
  }
}

function reset() {
  let input = document.querySelectorAll("input");
  for (let i = 0; i < input.length; i++) {
    if (input[i].type !== "checkbox" && input[i].type !== "radio") {
      input[i].value = "";
    }
  }
}
