const addData = (data) => {
  let allRecords = localStorage.getItem("users");
  if ((allRecords == null)) {
    allRecords = '[]';
  }
  let users = JSON.parse(allRecords)
  console.log(users)
  users = [...users, data];
  localStorage.setItem("users", JSON.stringify(users));
};

const validateEmail = (email) => {
  const regex = new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]+$");
  return regex.test(email);
};

const validateNumberField = (text) => {
  return !isNaN(text) && !isNaN(parseFloat(text)) && text !== "";
};

const validateTextField = (text) => {
  return text.trim().length !== 0;
};

const hideAllValidations = () => {
  let validationElements = document.getElementsByClassName("validation");
  for (var i = 0; i < validationElements.length; i++) {
    validationElements[i].style.display = "none";
  }
};

const validator = (validationOutput, validationId) => {
  if (!validationOutput) {
    document.querySelector(`#${validationId}`).style.display = "block";
  }
  return validationOutput;
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    hideAllValidations();
    document
      .querySelector("#submit")
      .addEventListener("click", function (event) {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const age = document.querySelector("#age").value;
        const sal = document.querySelector("#sal").value;
        const email = document.querySelector("#email").value;
        const remarks = document.querySelector("#remarks").value;
        hideAllValidations();
        if (
          validator(validateTextField(name), "nameValidation") &&
          validator(validateNumberField(age), "ageValidation") &&
          validator(validateNumberField(sal), "salValidation") &&
       
          validator(validateTextField(remarks), "remarksValidation")
        )
          addData({ name, age, sal, email, remarks });
      });
  },
  false
);
