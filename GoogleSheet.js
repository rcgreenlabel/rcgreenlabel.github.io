const scriptURL = 'https://script.google.com/a/macros/greenlabelrecycling.com/s/AKfycbweIVMtFPw3oBLpMHlbfW40JsYsvyM3O2eFt9HhMJWF7vVei3J80I4I1iapHB7E5wPP/exec'

const form = document.forms['contact-form']
console.log(window.location);
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
