const form = document.querySelector("#form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector(".nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector(".subjectError");
const request = document.querySelector("#request");
const requestError = document.querySelector(".requestError");
const formSuccess = document.querySelector(".formSuccess");
const submit = document.querySelector(".submit");

submit.style.filter = "grayscale(100%)";

function checkAllInput() {
  if (checkLength(fullName.value, 0) && checkEmail(email.value) && subject.value !== "defaultValue" && checkLength(request.value, 19)) {
    formSuccess.style.display = "block";
    submit.disabled = false;
    submit.style.filter = "grayscale(0%)";

  } else {
    formSuccess.style.display = "none";
    submit.disabled = true;
    submit.style.filter = "grayscale(100%)";
  }
}

fullName.addEventListener("keyup", checkAllInput);
email.addEventListener("keyup", checkAllInput);
request.addEventListener("keyup", checkAllInput);
subject.addEventListener("keyup", checkAllInput);

fullName.addEventListener("blur", (event) => {
  if (checkLength(fullName.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
});

fullName.addEventListener("focus", (event) => {
  if (fullName) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
});

email.addEventListener("blur", (event) => {
  if (checkEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
});

email.addEventListener("focus", (event) => {
  if (email) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
});

request.addEventListener("blur", (event) => {
  if (checkLength(request.value, 19)) {
    requestError.style.display = "none";
  } else {
    requestError.style.display = "block";
  }
});

request.addEventListener("focus", (event) => {
  if (request) {
    requestError.style.display = "none";
  } else {
    requestError.style.display = "block";
  }
});

subject.addEventListener("blur", (event) => {
  if (subject.value !== "defaultValue") {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
});

subject.addEventListener("focus", (event) => {
  if (subject) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
});

function submitForm(event) {
  event.preventDefault();
  formSuccess.innerHTML = "You can now send the message!";

  formSuccess.innerHTML = "Your message has been sent!";

  setTimeout(() => {
    formSuccess.style.display = "none";
  }, 2000);

  form.reset();
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const checkPattern = regEx.test(email);
  return checkPattern;
}