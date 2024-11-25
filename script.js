document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.menu-burger');
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
  
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      menu.classList.toggle('active');
      nav.classList.toggle('active');
    });
  });

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    loop: true,
    allowSlideNext: false,
    allowSlidePrev: false,
  },
});



const modal = document.getElementById('modal');
const openButton = document.querySelectorAll('#button');
const closeButton = document.querySelector('.close');
const form = document.getElementById('modal-form');
const phoneInput = document.getElementById('phone');
const nameInput = document.getElementById('name');
const errorMessage = document.getElementById('phone-error');
const phoneSuccess = document.getElementById('phone-success');
const nameSuccess = document.getElementById('name-success');


function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
}


const openButtons = document.querySelectorAll('#button');

openButtons.forEach(openButton => {
  openButton.addEventListener('click', () => {
    modal.style.display = 'block';
    disableScroll();
  });
});


closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    enableScroll();
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        enableScroll();
    }
});


nameInput.addEventListener('input', () => {
    const nameValue = nameInput.value.trim();
    if (nameValue.length > 0) {
        nameSuccess.style.display = 'inline';
    } else {
        nameSuccess.style.display = 'none';
    }
});


let phoneErrorIcon = document.getElementById('phone-error-icon');
if (!phoneErrorIcon) {
    phoneErrorIcon = document.createElement('span');
    phoneErrorIcon.id = 'phone-error-icon';
    phoneErrorIcon.textContent = '✖';
    phoneErrorIcon.style.color = '#00000063';
    phoneErrorIcon.style.fontSize = '18px';
    phoneErrorIcon.style.position = 'absolute';
    phoneErrorIcon.style.right = '30px';
    phoneErrorIcon.style.top = '50%';
    phoneErrorIcon.style.transform = 'translateY(-50%)';
    phoneErrorIcon.style.display = 'none';
    phoneInput.parentElement.appendChild(phoneErrorIcon);
}


phoneInput.addEventListener('input', () => {
    let value = phoneInput.value;


    value = value.replace(/[^\d+]/g, '');


    if (value.length > 0 && value[0] !== '+') {
        value = '+' + value;
    }


    value = value
        .replace(/^(\+\d)(\d{0,3})/, '$1 $2') 
        .replace(/^(\+\d \d{3})(\d{0,3})/, '$1 $2')
        .replace(/^(\+\d \d{3} \d{3})(\d{0,2})/, '$1 $2') 
        .replace(/^(\+\d \d{3} \d{3} \d{2})(\d{0,2})/, '$1 $2'); 

    phoneInput.value = value.trim();

    validatePhoneInput(); 
});


function validatePhoneInput() {
    const phoneValue = phoneInput.value.replace(/\D/g, ''); 

    if (phoneValue.length === 0) {

        phoneSuccess.style.display = 'none'; 
        phoneErrorIcon.style.display = 'none'; 
        errorMessage.style.display = 'none'; 
    } else if (phoneValue.length === 11) {
        phoneSuccess.style.display = 'inline'; 
        phoneErrorIcon.style.display = 'none'; 
        errorMessage.style.display = 'none'; 
    } else {

        phoneSuccess.style.display = 'none'; 
        phoneErrorIcon.style.display = 'inline';
        errorMessage.textContent = '*Введите 11 значный номер'; 
        errorMessage.style.display = 'block'; 
    }
}


phoneInput.addEventListener('input', () => {
    let value = phoneInput.value;

    value = value.replace(/[^\d+]/g, '');

    if (value.length > 0 && value[0] !== '+') {
        value = '+' + value;
    }


    value = value
        .replace(/^(\+\d)(\d{0,3})/, '$1 $2') 
        .replace(/^(\+\d \d{3})(\d{0,3})/, '$1 $2') 
        .replace(/^(\+\d \d{3} \d{3})(\d{0,2})/, '$1 $2') 
        .replace(/^(\+\d \d{3} \d{3} \d{2})(\d{0,2})/, '$1 $2'); 

    phoneInput.value = value.trim();
    validatePhoneInput();
});