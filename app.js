const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const passwad = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

console.log(firstName);

// console.log(firstName, lastName, email, password);


password.addEventListener('input', function () {
  if (password.value.length > 0) {
    togglePassword.style.display = 'block'; 
  } else {
    togglePassword.style.display = 'none'; 
  }
});

togglePassword.addEventListener('click', function () {
  
  let type;
  if (password.getAttribute('type') === 'password') {
    type = 'text';
  } else {
    type = 'password';
  }
  
  
  password.setAttribute('type', type);

  
  this.classList.toggle('visible');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  const errorFirstName = document.getElementById('errorMessage1');
  const errorLastName = document.getElementById('errorMessage2');
  const errorEmailMessage = document.getElementById('errorEmail');
  const errorPassword = document.getElementById('errorMessage3');
  const errorIcons = document.querySelectorAll('.error-icon');

  
   errorIcons.forEach(icon => icon.style.display = 'none');


  // console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorFirstName.textContent = 'First Name cannot be empty';
    errorIcons[0].style.display = 'block';
    
    
  } else {
    firstName.classList.remove('error');
    errorFirstName.textContent = '';
    
    
    
    
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    errorLastName.textContent = 'Last Name cannot be empty';
    errorIcons[1].style.display = 'block';

  } else {
    lastName.classList.remove('error');
    errorLastName.textContent = '';
    
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    errorEmailMessage.textContent = 'Looks like this is not an email';
    errorIcons[2].style.display = 'block';

  } else {
    email.classList.remove('error');
    errorEmailMessage.textContent = '';
    
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    errorPassword.textContent = 'Password cannot be empty';
    errorIcons[3].style.display = 'block';

  } else {
    password.classList.remove('error');
    errorPassword.textContent = '';
    errorIcon.style.display = 'block';
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
