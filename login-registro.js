//import {UI} from './books.js';

function registerUser() {
  const Registro = document.getElementById('Registro');
  const formData = new FormData(Registro);
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  const user = new User(name, email, password);
  localStorage.setItem('user', JSON.stringify(user));
}

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

function loginUser(email, password) {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser && storedUser.email === email && storedUser.password === password) {
    // Login successful
    console.log(`Welcome, ${storedUser.name}!`);
    window.location.href = 'lista-livros.html';
  } else {
    // Login failed
    console.log('Invalid email or password.');
  }
}

  