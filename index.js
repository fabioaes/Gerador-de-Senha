const input = document.querySelector('input')
const button = document.querySelector('button')
const div = document.querySelector('.print')

button.addEventListener('click', ()=> {
   if (input.value === '') {
      input.setAttribute('placeholder','Campo obrigatório')
      input.classList.add('obrigatorio')
   } else {
   input.classList.remove('obrigatorio') 
   input.setAttribute('placeholder','Número de caracteres')  
   printPassword(passRandom(input.value))
   input.value = ''
   }
})

const passRandom = (length) => {   
  var result  = ''  
  var objeto = 'ABCDEFGHIJ@#$KLMNOPQRSTUVWXYZa#$bcdefghijklmno!@$pqrstuvwxyz0123456789'
  var objetoLength = objeto.length
  for ( var i = 0; i < length; i++ ) {
      result += objeto.charAt(Math.floor(Math.random() * objetoLength));    
  } 
    return result
}

const printPassword = (password) => {   
   div.innerHTML = password   
}

