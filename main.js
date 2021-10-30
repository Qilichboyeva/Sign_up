const handleSubmit = () => {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const r_password = document.getElementById("r_password").value;
  const errors = document.getElementsByClassName("error");
};

const checkNames = (name) => {
  let result;
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (name.length > 3 && name.length < 24) {
    for (let i = 0; i < name.length; i++) {
      result = alphabet.includes(name[i]);
    }
  }
  return result;
};

const checkUserName = (username) => {
  let result;
  let alphabet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if (username.length > 3 && username.length < 24) {
    for (let i = 0; i < username.length; i++) {
      result = alphabet.includes(username[i]);
    }
  }
  return result;
};

const checkPasswords = (p, r_p) => {
  if (p.length >= 8) {
  }
};

console.log(checkUserName("diyorbek0309"));
