//All main JS Script
(() => {

  'use strict'

  var toggleTheme = document.getElementById('toggleTheme')
  var imgl = document.getElementById('svglogin') 

  toggleTheme.addEventListener('click', () => {
    if (toggleTheme.classList.contains('i-dark')){
      imgl.src = "img/logind.svg"
      toggleTheme.classList.add('i-light')
      toggleTheme.classList.remove('i-dark')      
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    }else{
      imgl.src = "img/login.svg"
      toggleTheme.classList.add('i-dark')
      toggleTheme.classList.remove('i-light')      
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
})

//small input on mobile view
if ( window.innerWidth < 768 ) {
  let inputs = document.getElementsByClassName('input-group')
  for (let elem of inputs) {
    elem.classList.add('input-group-sm');
  }
}

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })

})()
  
