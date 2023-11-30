const scriptURL = 'https://script.google.com/a/macros/greenlabelrecycling.com/s/AKfycbxOTlaEw8Ovu86ev4yOzzU0ddGU7325vwoZ8kJCL-4/dev'

const form = document.forms['contact-form']
console.log(window.location);
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
