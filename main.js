'use strict'

const userName = document.getElementById('email')
const password = document.getElementById('senha')
const loginButton = document.getElementById('login')

const validarLogin = async () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('senha').value

    const url = 'https://back-login.vercel.app/usuarios'
    const listUsers = await fetch(url)

    const users = await listUsers.json()

    let validaUser = false

    if(email == '' || password == ''){
        alert('Preencha os campos!')
    } else {

    users.forEach(user => {
        if(user.email == email && user.senha == password){
            validaUser = true
            window.location.href = './pages/home.html'
        }
        
    });

    if(!validaUser){
        alert('Usuário não cadastrado')
    }
}
}


loginButton.addEventListener('click', () => {
    validarLogin()
})