(() => {
  document.querySelector('.text-input input').addEventListener('focus', (event) => {
    event.target.classList.add('focus')
  })

  document.querySelector('.text-input input').addEventListener('blur', (event) => {
    if(event.target.value === '') {
      event.target.classList.remove('focus')
    }
  })
})()
