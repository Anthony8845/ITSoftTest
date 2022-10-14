const burgerBtn = document.querySelector('.header__burgerbtn')
const burgerMenu = document.querySelector('.burgerMenu')
const headerContainer = document.querySelector('.header__container')
const close = document.querySelector('.close')

burgerBtn.addEventListener('click', () => {
    
    burgerMenu.style.display = 'flex'
    headerContainer.style.display = 'none'
      
})

close.addEventListener('click', () => {
    burgerMenu.style.display = 'none'
    headerContainer.style.display = 'flex'
})