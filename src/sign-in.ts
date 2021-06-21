import axios from 'axios'

import  {regexName, regexPass} from './config'
import urlGet from './config'
import "core-js"


interface GetData {
  name: string,
  password: string,
  id: number
}

// --------------------
const signInName = document.getElementById('sing-in-name') as HTMLInputElement
const signInPass = document.getElementById('sign-in-pass') as HTMLInputElement

const errorBox = document.querySelector('.erro') as HTMLDivElement

const formSignIn = document.querySelector('.form-sign-in') as HTMLFormElement
// -----------------

function closeError() {
  errorBox.style.transform = 'scaleY(0%)'
}

formSignIn.addEventListener('click', closeError)
//----------------------

function signIn(e: Event) {
  e.preventDefault()
  const response = axios.get<Array<GetData>>(urlGet).then(response => response.data)

  response.then(response => response.map(({name, password, id}) => {
    if(regexName.test(signInName.value) && (regexPass.test(signInPass.value))) {
      if(name.toLowerCase() === signInName.value.toLowerCase() && password.toLowerCase() === signInPass.value.toLowerCase()) {
        window.location.assign(`banking.html?id=${id}`)
      } else {
      errorBox.style.transform = 'scaleY(100%)'
      }
    }
  }))
}
formSignIn.addEventListener('submit', signIn)