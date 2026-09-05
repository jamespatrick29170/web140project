const form = document.querySelector('form');
//nav button varis
const navButton = document.querySelector('#nav-button');
const siteNav = document.querySelector('#site-nav');
//github fetch varis
const ghPfp = document.querySelector('#gh-pfp');
const ghBio = document.querySelector('#gh-bio');
const ghRepos = document.querySelector('#gh-repos');

let isValid = true;

if (form) {
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
    //check function
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

if (ghPfp) {
    fetch('https://api.github.com/users/jamespatrick29170')
        .then(response => {
            if (!response.ok) {
                throw new Error('Github API failed to load')
            }
            return response.json();
        })
        .then(data => {
            ghPfp.src = data.avatar_url;
            ghPfp.alt = `${data.login}'s Github profile picture`;
            ghBio.textContent = data.bio;
            ghRepos.textContent = `Public repos: ${data.public_repos}`
        })
        .catch(error => {
            ghBio.textContent = 'Unable to load Github data at this time';
            console.error('Github fetch failed:', error);
        });
 }