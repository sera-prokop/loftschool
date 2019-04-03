const axios = require('axios');

const form = document.querySelector('.contact__form');
const btn = document.querySelector('.contact__submit button');
let name, mail;

function showError(container, errorMessage) {
  // container.className = 'error';
  var msgElem = document.createElement('span');
  msgElem.className = "error";
  msgElem.innerHTML = errorMessage;
  container.appendChild(msgElem);
}

function resetError(container) {
  // container.className = '';
  if (container.lastChild.className == "error") {
    container.removeChild(container.lastChild);
  }
}

function validate(form) {
  var elems = form.elements;
  resetError(elems.name.parentNode);
  if (!elems.name.value) {
    showError(elems.name.parentNode, ' Поле должно быть заполнено');
    name = elems.name.value;

  }

  resetError(elems.email.parentNode);
  if (!elems.email.value) {
    showError(elems.email.parentNode, ' Поле должно быть заполнено');
    mail = elems.email.value;
  }

  if(elems.name.value && elems.email.value) submitForm();

}

function submitForm() {
  axios.post('./user', {
    name, mail
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

btn.addEventListener('click', function (event) {
  event.preventDefault();
  validate(form);
});
