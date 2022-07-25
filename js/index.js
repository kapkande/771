console.log(
    "1. Вёрстка соответствует макету. Ширина экрана 390px +48\n",
    "блок <header> +6\n",
    "секция preview +9\n",
    "секция steps +9\n",
    "секция destinations +9\n",
    "секция stories +9\n",
    "блок <footer> +6\n",
    "2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки.Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n",
    "нет полосы прокрутки при ширине страницы от 1440рх до 390px +7\n",
    "нет полосы прокрутки при ширине страницы от 390px до 320рх +8\n",
    "3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22\n",
    "при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +0\n",
    "при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n",
    "адаптивное меню соответствует макету +4\n",
    "при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n",
    "ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)\n",
    "при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4\n",
    "score: 73\n",
)

const sliderItems = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c"),
];
const sliderButtons = [
    document.getElementById("First"),
    document.getElementById("Second"),
    document.getElementById("Third"),
];
const sliderButtonsMobile = [
    document.getElementById('clickLeft'),
    document.getElementById('clickRight'),
];


let position = 2

let retorn = 1

function clickLeft1() {
    --position
    clickPosition()
}

function clickRight2() {
    ++position
    clickPosition()
}

function clickPosition() {
    if (position < 1) {
        position = 1
    } else if (position > 3) {
        position = 3
    }
    sliderButtonsMobile[0].style.opacity = ('1')
    sliderButtonsMobile[1].style.opacity = ('1')
    if (retorn === 1 && position === 1) {
        sliderButtonsMobile[0].style.opacity = ('0.5')
        clikFirst()
    } else if (retorn === 0 && position === 1) {
        sliderButtonsMobile[0].style.opacity = ('0.5')
    } else {}

    if (retorn === 1 && position === 2) {
        clikSecond()
    } else {}

    if (retorn === 1 && position === 3) {
        sliderButtonsMobile[1].style.opacity = ('0.5')
        clikThird()

    } else if (retorn === 0 && position === 3) {
        sliderButtonsMobile[1].style.opacity = ('0.5')

    } else {}
}



function clikFirst() {
    sliderItems[0].style.order = 2
    sliderItems[1].style.order = 3
    sliderItems[2].style.order = 1
    sliderButtons[0].classList.add('active-ball')
    sliderButtons[0].classList.remove('disabled-ball')
    sliderButtons[1].classList.add("disabled-ball")
    sliderButtons[2].classList.add("disabled-ball")
    sliderButtons[1].classList.remove("active-ball")
    sliderButtons[2].classList.remove("active-ball")
    position = 1
    retorn = 0
    clickPosition()
    setTimeout(retorn = 1, 1000);
}


function clikSecond() {
    sliderItems[0].style.order = 1
    sliderItems[1].style.order = 2
    sliderItems[2].style.order = 3
    sliderButtons[1].classList.add('active-ball')
    sliderButtons[1].classList.remove('disabled-ball')
    sliderButtons[0].classList.add("disabled-ball")
    sliderButtons[2].classList.add("disabled-ball")
    sliderButtons[2].classList.remove("active-ball")
    sliderButtons[0].classList.remove("active-ball")
    position = 2
    retorn = 0
    clickPosition()
    setTimeout(retorn = 1, 1000);
}


function clikThird() {
    sliderItems[0].style.order = 3
    sliderItems[1].style.order = 1
    sliderItems[2].style.order = 2
    sliderButtons[2].classList.add('active-ball')
    sliderButtons[2].classList.remove('disabled-ball')
    sliderButtons[0].classList.add("disabled-ball")
    sliderButtons[1].classList.add("disabled-ball")
    sliderButtons[0].classList.remove("active-ball")
    sliderButtons[1].classList.remove("active-ball")
    position = 3
    retorn = 0
    clickPosition()
    setTimeout(retorn = 1, 1000);
}


let timerId = setInterval(() => {
    ++position, setlimit(), clickPosition()
}, 12000);


function setlimit() {
    if (position > 3) { position = 1 }
}


let pageHeight = document.documentElement.scrollHeight

function heightt() {
    let heightWw = document.getElementById("wrap").scrollHeight;
    let heightStoris = document.getElementById("storis__back").scrollHeight
    if (heightWw == heightStoris) {
        alert(heightWw)
    } else { document.getElementById('storis__back').style.height = (heightWw + 'px'); }

}
const menuBurger = [
    document.getElementById("menuBurger"),
    document.getElementById("shadow"),
]

function shawow() {
    menuBurger[1].classList.toggle("shadow-open");
    menuBurger[1].style.height = (pageHeight + 'px');
}

const onMenuClick = (even) => {
    function closeAll() {
        popup.classList.remove("popup-active")
        menuBurger[0].classList.remove("menuBurger__open");
        shawow()
    }
    const target = even.target;
    const popup = document.querySelector('.popup');
    const isLogin = ['Login-BTM'].includes(target.id);
    const isBurger = ['burger'].includes(target.parentElement.className);
    const isShadow = ['shadow'].includes(target.id);
    const isAccountBTN = ['menuBurger__openAccount'].includes(target.className);
    const itFotClose = ['menuBurger__link', 'shadow shadow-open', 'menuBurger__imgClose'].includes(target.className);
    let currentPopup;
    let currentMenu;
    console.log(isAccountBTN)
    if (isBurger || isLogin || isAccountBTN) {
        shawow()
    }
    if (isLogin) {
        popup.classList.toggle("popup-active")
    } else if (isBurger) {
        menuBurger[0].classList.toggle("menuBurger__open");

    } else if (isAccountBTN) {
        closeAll()
        popup.classList.toggle("popup-active")
    } else if (itFotClose) {
        closeAll()
    }
}
const clickMenuBurger = menuBurger[0].addEventListener('click', onMenuClick);
const clickShadow = menuBurger[1].addEventListener('click', onMenuClick);
const onClickLogin = document.getElementById("Login-BTM").addEventListener('click', onMenuClick);
const onClickMenuBurger = document.getElementById("burger-lines").addEventListener('click', onMenuClick);

function clickSingIn(text) {
    let addEmail = document.getElementById('popup__email').value
    let addPassword = document.getElementById('popup__password').value
    console.log(document.body.value)
    if (!addEmail & !addPassword) {
        alert('inputs are empty')
    } else if (!addEmail) {
        alert('the input "Email" is empty')

    } else if (!addPassword) {
        alert('the input "password" is empty')

    } else {
        alert('your password = ' + addEmail + '; your email = ' + addPassword)
        addPassword = document.getElementById('popup__password').value = ''
        addEmail = document.getElementById('popup__email').value = ''
    }

}


function changePopUp() {
    lengthSignIn = document.querySelectorAll('.onSignIn').length
    lengthSignUp = document.querySelectorAll('.onSignUp').length
    for (let i = 0; i < lengthSignIn; i++) {
        let onSignIn = +document.querySelectorAll('.onSignIn')[i].classList.toggle("sign-active")

    }
    for (let i = 0; i < lengthSignUp; i++) {
        let onSignUp = document.querySelectorAll('.onSignUp')[i].classList.toggle("sign-active")
    }


}