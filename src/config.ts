const regexName = /^[A-Za-z]{3,7}$/
const regexPass = /^[0-9\w\.,-@#$%]{6,10}$/

const regexEm = /^[\w.-]+@[\w.-]+\.[\w]{2,}$/
const regexSurname = /^[A-Za-z]{3,9}$/


let url = 'http://localhost:3000/data'

export {regexName, regexSurname, regexEm, regexPass}
export default url