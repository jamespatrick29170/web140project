const form = document.querySelector('form');
//name variables
const nameInput = document.querySelector('#name');
const nameError = nameInput.nextElementSibling;
// email varis
const emailInput = document.querySelector('#email');
const emailError = emailInput.nextElementSibling;
//subject varis
const subjectInput = document.querySelector('#subject'); 
const subjectError = subjectInput.nextElementSibling;
//message varis
const messageInput = document.querySelector('#message')
const messageError = messageInput.nextElementSibling

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('name value:', nameInput.value);
        //check name validity + error
        if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Name must be 2 characters or more'
            nameError.style.display = 'block';
        } else {
            nameError.textContent = '';
            nameError.style.display = 'none';
        }
        //check email validity + error
        if (!emailInput.checkValidity()) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }
        //check subject
        if (subjectInput.value.trim().length < 2) {
            subjectError.textContent = 'Subject must be 2 characters or more';
            subjectError.style.display = 'block';
        } else {
            subjectError.textContent = '';
            subjectError.style.display = 'none';
        }
        //check message text
        if (emailInput.value.trim().length < 10) {
            emailError.textContent = 'Message must be 10 characters or more';
            emailError.style.display = 'block';
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none'
        }
    })
}

