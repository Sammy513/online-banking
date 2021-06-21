import axios from 'axios'


import "core-js"
import  {regexName, regexSurname, regexEm, regexPass} from './config'
import urlPost from './config'

// DOM -----------------
const valName = document.getElementById('val-name') as HTMLInputElement
const valSurname = document.getElementById('val-surname') as HTMLInputElement
const valEm = document.getElementById('val-em') as HTMLInputElement
const valPass = document.getElementById('val-pass') as HTMLInputElement

const errorBox = document.querySelector('.error') as HTMLDivElement

const registerBtn = document.getElementById('register-btn') as HTMLButtonElement
const form = document.querySelector('.form') as HTMLFormElement
//------------------------

function closeBoxError() {
  errorBox.style.transform = 'scaleY(0%)'
}

form.addEventListener('click', closeBoxError)


// -------------------------
const signUp = (e: Event) => {
    e.preventDefault()
    if(regexName.test(valName.value) && regexSurname.test(valSurname.value) && regexPass.test(valPass.value) && regexEm.test(valEm.value)) {

        axios.post(urlPost, {name: valName.value,surname: valSurname.value, email: valEm.value, password: valPass.value, registeredIn: Date.now(), deposit: '0', drawn: '0'})

  } else {
     errorBox.style.transform = 'scaleY(100%)'
  }
}

form.addEventListener('submit', signUp)