import axios from "axios"

import urlGet from './config'
import 'core-js'

interface GetData {
    name: string
    surname: string
    deposit: string
    drawn: string
    total: number
    id: number
  }

const url = window.location.search
const urlObj = new URLSearchParams(url).get("id")



const profileDescription = document.querySelector('.profile-decription')!
const deposited = document.querySelector('.deposited-value')!
const drawn = document.querySelector('.drawn-value')!
const total = document.querySelector('.total-value')!

const containerBalances = document.querySelector('.container-balances')!

const btnNewTransition = document.querySelector('.btn-newTransition') as HTMLButtonElement

const render = data => {
  
    const name = `${data.find( dataId => dataId.id.toString() === urlObj)?.name}`
    const surname = `${data.find( dataId => dataId.id.toString() === urlObj)?.surname}`

    const depositedValue = `${data.find( dataId => dataId.id.toString() === urlObj)?.deposit}`
    const drawnValue = `${data.find( dataId => dataId.id.toString() === urlObj)?.drawn}`

    if(parseInt(drawnValue) > parseInt(depositedValue)){
    }

    const totalValue = parseInt(depositedValue) - parseInt(drawnValue)

    profileDescription.innerHTML = `Hello  ${name}  ${surname}, welcome!`

    deposited.innerHTML = `€ ${depositedValue} `
    drawn.innerHTML = `€ ${drawnValue}`
    total.innerHTML = `€ ${totalValue}`
}
axios.get<Array<GetData>>(urlGet).then(response => render(response.data))



function newTransition() {
  const div = document.createElement('div')
  div.classList.add('new-transition')

  const val = document.createElement('input')
  val.setAttribute('placeholder', 'Deposit or withdraw')
  div.appendChild(val)


  const btnDeposit = document.createElement('button')
  btnDeposit.classList.add('btn-deposit')
  btnDeposit.textContent = 'Deposit'
  div.appendChild(btnDeposit)

  btnDeposit.onclick = function() {
    axios.patch(`${urlGet}/${urlObj}`, {deposit: val.value.replace(".", ''), drawn: '0'})
    .then(data => data)
  }

  const btnWithdraw = document.createElement('button')
  btnWithdraw.classList.add('btn-withdraw')
  btnWithdraw.textContent = 'Withdraw'
  div.appendChild(btnWithdraw)

  btnWithdraw.onclick = function(){
    axios.patch(`${urlGet}/${urlObj}`, {drawn: val.value.replace(".", '')})
    .then(data => data)
  }


  containerBalances.insertBefore(div, containerBalances.firstElementChild)
}

btnNewTransition.addEventListener('click', newTransition)