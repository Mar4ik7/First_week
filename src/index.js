const password = document.getElementById('password')
const toggle = document.getElementById('toggle')

function showHide() {
    if(password.type === 'password'){
        password.setAttribute('type', 'text')
        toggle.classList.add('hide')
    }
    else{
        password.setAttribute('type', 'password')
        toggle.classList.remove('hide')
    }
}


let pass = document.querySelector('.email');
let login = document.querySelector('.password');


pass.addEventListener('input', changeBackground);
login.addEventListener('input', changeBackground);

function changeBackground() {
  if (pass.value !== '' && login.value !== '') {
    document.querySelector('button').style.background = '#FF9232';
  } else {
    document.querySelector('button').style.background = '#DCDCDC';
  }
}