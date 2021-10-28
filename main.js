const handleSubmit = () => {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const r_password = document.getElementById("r_password").value;
  const errors = document.getElementsByClassName("error");

  if (firstName.length < 3) {
    errors[0].innerHTML = "Ism kamida 3 ta belgidan iborat bo'lishi kerak!";
  }
};
