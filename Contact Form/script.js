document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  let isValid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const namePattern = /^[A-Za-z\s]{2,}$/;
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  } else if (!namePattern.test(name)) {
    document.getElementById('nameError').textContent = 'Name must be at least 2 letters and contain only letters and spaces.';
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailStartsWithNumber = /^[0-9]/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format.';
    isValid = false;
  } else if (emailStartsWithNumber.test(email)) {
    document.getElementById('emailError').textContent = 'Email must not start with a number.';
    isValid = false;
  }

  const messagePattern = /^[A-Za-z0-9\s.,!?'"-]{10,}$/;
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    isValid = false;
  } else if (message.length < 10) {
    document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
    isValid = false;
  } else if (!messagePattern.test(message)) {
    document.getElementById('messageError').textContent = 'Message must not contain special characters.';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('successMessage').textContent = 'Message sent successfully!';
    document.getElementById('contactForm').reset(); 
  }
});
