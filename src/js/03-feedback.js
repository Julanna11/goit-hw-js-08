const throttle = require("lodash.throttle");
// import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';

const formData = {};
        
const form = document.querySelector('.feedback-form');
// const email = document.querySelector('.feedback-form input');
// const message = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}; 

populateForm();

function onFormSubmit(e) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.preventDefault();
    const {elements: { email, message }
  } = e.currentTarget;
    if (email.value === "" || message.value === "") {
   return console.log("Fill all the fields");
  };
  
// сброс всех полей
  e.currentTarget.reset();
  // очистим локал сторадж
  localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  try {
    if (savedMessage) {
       const { email, message }
       = JSON.parse(savedMessage);
      form.elements.email.value = email || '';
      form.elements.message.value = message || '';
    }
  }
  catch (error) {
    console.error('If error: ', error.message);
  }
};


