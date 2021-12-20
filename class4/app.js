const formId = "save-later-form";
const saveButton = document.querySelector("#save");
const alertBox = document.querySelector(".alert");
let form = document.querySelector(`#${formId}`);
let formElements = form.elements;
const userList = document.getElementById("userList");

function UserQuestion(obj) {
  this.questions = obj.questions;
  this.email = obj.email;
  this.fullName = obj.fullName;
  this.phone = obj.phone;
  UserQuestion.all.push(this);
}
UserQuestion.all = [];

const getFormData = () => {
  let data = {};
  for (let i = 0; i < formElements.length; i++) {
    data[formElements[i].name] = formElements[i].value;
  }
  new UserQuestion(data);
};

saveButton.onclick = (event) => {
  event.preventDefault();
  getFormData();
  localStorage.setItem("userQuestion", JSON.stringify(UserQuestion.all));
  const message = "Form draft has been saved!";
  displayAlert(message);
  populateForm();
  form.reset();
};

const displayAlert = (message) => {
  alertBox.innerText = message;
  alertBox.style.display = "block";
  setTimeout(function () {
    alertBox.style.display = "none";
  }, 1000);
};

const getLS = () => {
  if (localStorage.userQuestion) {
    let data = JSON.parse(localStorage.getItem("userQuestion"));
    for (let i = 0; i < data.length; i++) {
      new UserQuestion(data[i]);
    }
  }
};

const populateForm = () => {
  userList.innerHTML = "";
  if (localStorage.key("userQuestion")) {
    for (let i = 0; i < UserQuestion.all.length; i++) {
      let li = document.createElement("li");
      li.textContent = UserQuestion.all[i].questions;
      userList.appendChild(li);
    }
    const message = "Form has been refilled with saved data!";
    displayAlert(message);
  }
};

getLS();
populateForm();
