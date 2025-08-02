const registerForm = document.getElementById('registerForm')
const fullname = document.getElementById('fullname')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('pswd')
const confirmPassword = document.getElementById('confirm-password')
const message = document.getElementById('message')

registerForm.addEventListener('submit', (event) => {
  event.preventDefault()

  if (password.value !== confirmPassword.value) {
    message.textContent = 'Password do not match'
    return 
  }

  const user = {
    fullname: fullname.value,
    username: username.value,
    email: email.value,
    password: password.value
  }
  const userString = JSON.stringify(user)
  localStorage.setItem('user', userString)
  window.location.href = './sign-in.html'
})