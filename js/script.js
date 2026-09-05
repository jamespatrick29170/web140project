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
const messageInput = document.querySelector('#message');
const messageError = messageInput.nextElementSibling;
//nav button varis
const navButton = document.querySelector('#nav-button');
const siteNav = document.querySelector('#site-nav');

let isValid = true;

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('name value:', nameInput.value);
        //check name validity + error
        if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Name must be 2 characters or more'
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.textContent = '';
            nameError.style.display = 'none';
        }
        //check email validity + error
        if (!emailInput.checkValidity()) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }
        //check subject
        if (subjectInput.value.trim().length < 2) {
            subjectError.textContent = 'Subject must be 2 characters or more';
            subjectError.style.display = 'block';
            isValid = false;
        } else {
            subjectError.textContent = '';
            subjectError.style.display = 'none';
        }
        //check message text
        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be 10 characters or more';
            messageError.style.display = 'block';
            isValid = false; 
        } else {
            messageError.textContent = '';
            messageError.style.display = 'none';
        }
        if (isValid) {
            console.log('Form is valid')
        }
    });
    //clear errors automatically
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim().length >= 2) {
            nameError.textContent = '';
            nameError.style.display = '';   
        }
    });
    emailInput.addEventListener('input', () => {
        if (emailInput.checkValidity()) {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }
    });
    subjectInput.addEventListener('input', () => {
        if (subjectInput.value.trim().length >= 2) {
            subjectError.textContent = '';
            subjectError.style.display = 'none';
        }
    });
    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim().length >= 10) {
            messageError.textContent = '';
            messageError.style.display - 'none';
        }
    })
}

navButton.addEventListener('click', () => {
    siteNav.classList.toggle('nav-open');
    const isOpen = siteNav.classList.contains('nav-open');
    navButton.setAttribute('aria-expanded', isOpen)
 })