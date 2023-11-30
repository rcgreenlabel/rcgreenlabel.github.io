const scriptURL = 'https://script.google.com/a/macros/greenlabelrecycling.com/s/AKfycbxdV02cCsA9wu1mpBq6LD4qmd43YzmCQRMVWD7-wH4VdWWQYG1zL6oJ5WnIPr-2jRm5/exec'

const form = document.forms['contact-form']
console.log(window.location);
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
