const burgerBtn = document.querySelector('.header__burgerbtn')
const burgerMenu = document.querySelector('.burgerMenu')
const headerContainer = document.querySelector('.header__container')
const close = document.querySelector('.close')


const imgPub1 = document.querySelector('#imgPub1')
const imgPub2 = document.querySelector('#imgPub2')
const sliderBtnL = document.querySelector('.sliderBtnl')
const sliderBtnR = document.querySelector('.sliderBtnR')

const prodImg1 = document.querySelector('#prodImg1')
const prodImg2 = document.querySelector('#prodImg2')
const sliderBack = document.querySelector('.slider_arrow_back')
const sliderFront = document.querySelector('.slider_arrow_front')

console.log(imgPub2)
console.log(imgPub1)

burgerBtn.addEventListener('click', () => {
    
    burgerMenu.style.display = 'flex'
    headerContainer.style.display = 'none'
      
})

close.addEventListener('click', () => {
    burgerMenu.style.display = 'none'
    headerContainer.style.display = 'flex'
})
let j = 0
sliderBack.addEventListener('click', () => {
    if(j == 0) {
        prodImg1.classList.add('production__image2')
        prodImg1.classList.remove('production__image1')

        prodImg2.classList.add('production__image1')
        prodImg2.classList.remove('production__image2')
        ++j
    } else {
        prodImg1.classList.remove('production__image2')
        prodImg1.classList.add('production__image1')

        prodImg2.classList.remove('production__image1')
        prodImg2.classList.add('production__image2')
        --j
    }
    
})
sliderFront.addEventListener('click', () => {
    if(j == 1) {
        prodImg1.classList.remove('production__image2')
        prodImg1.classList.add('production__image1')

        prodImg2.classList.remove('production__image1')
        prodImg2.classList.add('production__image2')
        --j
    } else {
        prodImg1.classList.add('production__image2')
        prodImg1.classList.remove('production__image1')

        prodImg2.classList.add('production__image1')
        prodImg2.classList.remove('production__image2')
        ++j
    }
    
})


let i = 0;
sliderBtnR.addEventListener('click', () => {
    if(i == 0) {
        imgPub1.classList.remove('sliderImg')
        imgPub1.classList.add('sliderImg3')
        imgPub2.classList.remove('sliderImg3')
        imgPub2.classList.add('sliderImg')
        ++i
    } else {
        imgPub2.classList.remove('sliderImg')
        imgPub2.classList.add('sliderImg3')
        imgPub1.classList.remove('sliderImg3')
        imgPub1.classList.add('sliderImg')
        --i
    }
  
})

sliderBtnL.addEventListener('click', () => {
    if(i == 1) {
        imgPub1.classList.remove('sliderImg3')
        imgPub1.classList.add('sliderImg')
        imgPub2.classList.remove('sliderImg')
        imgPub2.classList.add('sliderImg3')
        --i
    } else {
        imgPub2.classList.remove('sliderImg3')
        imgPub2.classList.add('sliderImg')
        imgPub1.classList.remove('sliderImg')
        imgPub1.classList.add('sliderImg3')
        ++i
    }
})