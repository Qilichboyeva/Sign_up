const handleSubmit = () => {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const r_password = document.getElementById("r_password").value;
  const errors = document.getElementsByClassName("error");
  if (!checkNames(firstName)) {
    errors[0].innerHTML = "zfjksgajfgvjashfgvfv";
  }
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

const checkEmail = (email) => {
  let regexEmail = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/;
  if (email.match(regexEmail)) {
    return true;
  }

  return false;
};

const checkPasswords = (p) => {
  let chars = "@#$%^&",
    l_letters = "abcdefghijklmnopqrstuvwxyz",
    u_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers = "0123456789";
  let hasLLetter = false,
    hasULetter = false,
    hasNumber = false,
    hasChar = false;
  if (p.length >= 8) {
    for (let i = 0; i < p.length; i++) {
      if (l_letters.includes(p[i])) {
        hasLLetter = true;
        continue;
      } else if (u_letters.includes(p[i])) {
        hasULetter = true;
        continue;
      } else if (numbers.includes(p[i])) {
        hasNumber = true;
        continue;
      } else if (chars.includes(p[i])) {
        hasChar = true;
        continue;
      }
    }
  }

  return hasLLetter && hasULetter && hasNumber && hasChar;
};

const comparePasswords = (p, r_p) => p === r_p;

console.log(checkEmail("diyorbe5454k@aaa.ru"));
