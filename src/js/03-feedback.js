import _throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const emailInpt = document.querySelector('input');
const messageInpt = document.querySelector('textarea');

formEl.addEventListener('input', _throttle(onFormInput, 500));

function onFormInput() {
  const savedFormValues = {
    email: emailInpt.value,
    message: messageInpt.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(savedFormValues));
}

window.onload = () => {
  if (!localStorage.getItem('feedback-form-state')) {
    return;
  }
  const savedFormObj = JSON.parse(localStorage.getItem('feedback-form-state'));

  emailInpt.value = savedFormObj.email;
  messageInpt.value = savedFormObj.message;
};

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (emailInpt.value === '' || messageInpt.value === '') {
    window.alert('Please fullfill both fields');
    return;
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  emailInpt.value = '';
  messageInpt.value = '';
}
