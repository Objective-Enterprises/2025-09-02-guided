function validateLogIn () {
  const sessionLogin = sessionStorage.getItem('login')
  const login = JSON.parse(sessionLogin)
  if (!login) {
    alert('You must login')
    window.location.href = '../sign-in.html'
    return 
  }
  const uName = document.getElementById('uName')
  const localUser = localStorage.getItem('user')
  const user = JSON.parse(localUser)
  uName.textContent = user.username
  const signOut = document.getElementById('signout')
  signOut.addEventListener('click', () => {
    sessionStorage.setItem('login', false)
    window.location.href = '../sign-in.html'
  })
}