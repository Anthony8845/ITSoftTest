const burgerBtn = document.querySelector('.header__burgerbtn')
const burgerMenu = document.querySelector('.burgerMenu')
const headerContainer = document.querySelector('.header__container')
const close = document.querySelector('.close')

const imgPubClass1 = document.querySelector('.sliderImg1')
const imgPubClass2 = document.querySelector('.sliderImg3')
const imgPub1 = document.querySelector('#imgPub1')
const imgPub2 = document.querySelector('#imgPub2')
const sliderBtnL = document.querySelector('.sliderBtnl')
const sliderBtnR = document.querySelector('.sliderBtnR')

const sliderBack = document.querySelector('.slider_arrow_back')
const sliderFront = document.querySelector('.slider_arrow_front')
const img1 = document.querySelector('.production__image1')
const img2 = document.querySelector('.production__image2')

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
        img1.style.background = 'url("../img/prodImage2.png") center/contain no-repeat'
        img2.style.background = 'url("../img/prodImage1mob.png") center/contain no-repeat'
        ++j
    } else {
        img2.style.background = 'url("../img/prodImage2.png") center/contain no-repeat'
        img1.style.background = 'url("../img/prodImage1mob.png") center/contain no-repeat'
        --j
    }
    
})
sliderFront.addEventListener('click', () => {
    if(j == 1) {
        img2.style.background = 'url("../img/prodImage2.png") center/contain no-repeat'
        img1.style.background = 'url("../img/prodImage1mob.png") center/contain no-repeat'
        --j
    } else {
        img1.style.background = 'url("../img/prodImage2.png") center/contain no-repeat'
        img2.style.background = 'url("../img/prodImage1mob.png") center/contain no-repeat'
        ++j
    }
    
})


let i = 0;
sliderBtnR.addEventListener('click', () => {
    if(i == 0) {
        imgPub2.style.background = 'url("../img/venarus900.png")center/ contain no-repeat'
        imgPub1.style.background = 'url("../img/venarus450.png")center/ contain no-repeat'
        ++i
    } else {
        imgPub1.style.background = 'url("../img/venarus900.png")center/ contain no-repeat'
        imgPub2.style.background = 'url("../img/venarus450.png")center/ contain no-repeat'
        --i
    }
  
})

sliderBtnL.addEventListener('click', () => {
    if(i == 1) {
        imgPub1.style.background = 'url("../img/venarus900.png")center/ contain no-repeat'
        imgPub2.style.background = 'url("../img/venarus450.png")center/ contain no-repeat'
        --i
    } else {
        imgPub2.style.background = 'url("../img/venarus900.png")center/ contain no-repeat'
        imgPub1.style.background = 'url("../img/venarus450.png")center/ contain no-repeat'
        ++i
    }
})