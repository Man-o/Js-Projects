let signupBtn=document.getElementById('s-btn')
let loginBtn=document.getElementById('l-btn')

signupBtn.addEventListener('click',()=>{
    loginBtn.classList.remove('btn-primary')
    signupBtn.classList.add('btn-primary')
    document.querySelector('.signup').classList.remove('hidden')
    document.querySelector('.login').classList.add('hidden')
})

loginBtn.addEventListener('click',()=>{
    loginBtn.classList.add('btn-primary')
    signupBtn.classList.remove('btn-primary')
    document.querySelector('.login').classList.remove('hidden')
    document.querySelector('.signup').classList.add('hidden')
})
