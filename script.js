window.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Store the form data in localStorage
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.push(formDataObject);
        localStorage.setItem('formData', JSON.stringify(storedData));

        // Optionally, you can clear the form after storing the data
        contactForm.reset();

        alert('Form data stored locally!');
    });
});

// Retrieve data from local storage
const storedDataString = localStorage.getItem('formData');

// Convert the JSON string back to an object
const storedData = JSON.parse(storedDataString);

// Now, 'storedData' contains the form data retrieved from local storage
console.log(storedData);
