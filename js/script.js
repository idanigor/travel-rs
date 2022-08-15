const burger = document.querySelector('#burger')
const popupMenu = document.querySelector('#popup-menu')
const close = document.querySelectorAll('.close')
const closeBt = document.querySelector('#close')
const shadowB = document.querySelector('#shadow-area-burger')

const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const slider = document.querySelector('.slider')
const card0 = document.querySelector('#card-0')
const card1 = document.querySelector('#card-1')
const card2 = document.querySelector('#card-2')
const card3 = document.querySelector('#card-3')
const card4 = document.querySelector('#card-4')

const sliderItem = document.querySelectorAll('.slider__item')

//* burger menu

function burgerOpen(t) {
	popupMenu.classList.toggle('open')
	shadowB.classList.toggle('shadow-area')
}
shadowB.addEventListener('click', burgerOpen)
closeBt.addEventListener('click', burgerOpen)
burger.addEventListener('click', burgerOpen)

for (let i = 0; i < close.length; i++) {
	close[i].addEventListener('click', burgerClose)
}

function burgerClose() {
	setTimeout(burgerOpen, 500)
}

//* slider
const moveLeft = () => {
	slider.classList.add('transition-left')
	arrowLeft.removeEventListener('click', moveLeft)
	arrowRight.removeEventListener('click', moveRight)
	itemLeft()
}
const moveRight = () => {
	slider.classList.add('transition-right')
	arrowRight.removeEventListener('click', moveRight)
	arrowLeft.removeEventListener('click', moveLeft)
	itemRight()
}

function itemLeft() {
	for (let i = 0; i < sliderItem.length; i++) {
		if (sliderItem[i] == document.querySelector('.slider__item_active')) {
			if (i == 0) {
				sliderItem[0].classList.remove('slider__item_active')
				sliderItem[2].classList.add('slider__item_active')
				return
			} else if (i == 1) {
				sliderItem[1].classList.remove('slider__item_active')
				sliderItem[0].classList.add('slider__item_active')
				return
			} else {
				sliderItem[2].classList.remove('slider__item_active')
				sliderItem[1].classList.add('slider__item_active')
				return
			}
		}
	}
}

function itemRight() {
	for (let i = 0; i < sliderItem.length; i++) {
		if (sliderItem[i] == document.querySelector('.slider__item_active')) {
			if (i == 0) {
				sliderItem[0].classList.remove('slider__item_active')
				sliderItem[1].classList.add('slider__item_active')
				return
			} else if (i == 1) {
				sliderItem[1].classList.remove('slider__item_active')
				sliderItem[2].classList.add('slider__item_active')
				return
			} else {
				sliderItem[2].classList.remove('slider__item_active')
				sliderItem[0].classList.add('slider__item_active')
				return
			}
		}
	}
}

arrowLeft.addEventListener('click', moveLeft)
arrowRight.addEventListener('click', moveRight)
card1.addEventListener('click', moveLeft)
card3.addEventListener('click', moveRight)

slider.addEventListener('animationend', (animation) => {
	let cardBox = card2.innerHTML
	if (animation.animationName === 'move-left') {
		slider.classList.remove('transition-left')
		card2.innerHTML = card1.innerHTML
		card1.innerHTML = card0.innerHTML
		card3.innerHTML = cardBox
		card0.innerHTML = cardBox
		card4.innerHTML = card1.innerHTML
	} else {
		slider.classList.remove('transition-right')
		card2.innerHTML = card3.innerHTML
		card3.innerHTML = card4.innerHTML
		card1.innerHTML = cardBox
		card4.innerHTML = cardBox
		card0.innerHTML = card3.innerHTML
	}
	arrowLeft.addEventListener('click', moveLeft)
	arrowRight.addEventListener('click', moveRight)
})

//* popup-login

const shadowP = document.querySelector('#shadow-area-login')

function loginPopup() {
	document.querySelector('div.popup-login').classList.toggle('active')
	shadowP.classList.toggle('shadow-area')
}

document.querySelector('#button-login').addEventListener('click', loginPopup)
// document.querySelector('#account-link').addEventListener('click', loginPopup)

shadowP.addEventListener('click', loginPopup)

//* popup-login-alert

const loginForm = document.getElementById('login-form')

function formSubmitBt(evn) {
	evn.preventDefault()
	alert(
		`E-mail: ${document.getElementById('login-email').value}\nPassword: ${document.getElementById('login-password').value}`
	)
}

loginForm.addEventListener('submit', formSubmitBt)

moveLeft()
document.querySelector(
	'img.slider__arrow'
).style.opacity=0.5;