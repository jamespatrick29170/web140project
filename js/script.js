const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const nameError = nameInput.nextElementSibling;

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('name value:', nameInput.value);
        if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Name must be 2 characters or more'
            nameError.style.display = 'block';
        } else {
            nameError.textContent = '';
            nameError.style.display = 'none';
        }
    })
}