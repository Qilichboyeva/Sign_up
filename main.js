const handleSubmit = () => {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const r_password = document.getElementById("r_password").value;
  const errors = document.getElementsByClassName("error");

// firstName
function validateFname() {
  const FirstName = document.getElementById('Name').value;
  if(FirstName =="")
  {
    document.getElementById('exampleFirstName').innerHTML="Ismingizni to'ldiring";
    return false;
  }
  return true;
 }
// LastName
function validateFname() {
  const lastName = document.getElementById('Name').value;
  if(LastName =="")
  {
    document.getElementById('exampleLastName').innerHTML="Familiyangiznii to'ldiring";
    return false;
  }
  return true;
};

  if(lastName == "" {
    document.getElementById('lastname').innerHTML = "Familiyangizni to'ldiring";
    return false;
  }

  if(userName == "") {
    document.getElementById('username').innerHTML = "Usernamingizni to'ldiring";
    return false;
  }

  if(email == "") {
    document.getElementById('email').innerHTML = "emailingizni to'ldiring";
    return false;
  }

  if((pass.length <= 2) ||(password.length > 10)) {
    document.getElementById('password').innerHTML = "user length must be between 2 and 10";
    return false;
  }
  if(r_password <= 2) || (r_password.length > 10) {
    document.getElementById('r_password').innerHTML = " ++ Please fill the r_password field";
    return false;
  }
