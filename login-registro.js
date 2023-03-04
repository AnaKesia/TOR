class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }
  
  // Retrieve the user object from local storage, or create a new one
  let user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    user = new User('', '', '');
  }
  
  // Save the user object to local storage
  function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  // Update the user object and save it to local storage when the sign-up form is submitted
  const signUpForm = document.getElementById('sign-up-form');
  signUpForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    user.name = name;
    user.email = email;
    user.password = password;
  
    saveUser(user);
  });
  
  // Use the user object to authenticate the user when the login form is submitted
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (user.email === email && user.password === password) {
      // Show a welcome message
      const welcomeMessage = document.getElementById('welcome-message');
      welcomeMessage.innerText = `Bem-vindo, ${user.name}!`;
  
      // Enable the book list form
    MostrarLivros()
    } else {
      alert('Invalid email or password.');
    }
  });
  
