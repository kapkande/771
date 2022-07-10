console.log(
    "1 Вёрстка валидная +10\n",
    " для проверки валидности вёрстки используйте сервис https://validator.w3.org/\n",
    "валидной вёрстке соответствует надпись Document checking completed. No errors or warnings to show. В таком случае баллы за пункт требований выставляем полностью. \n",
    "если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований \n",
    "2 Вёрстка семантическая +20 \n",
    "В коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше): \n",
    "<header>, <main>, <footer> +3 \n",
    "четыре элемента <section> (по количеству секций) +3 \n",
    "только один заголовок <h1> +3 \n",
    "три заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3 \n",
    "один элемент <nav> (панель навигации) +3 \n",
    "два списка ul > li > a (панель навигации, ссылки на соцсети) +3 \n",
    "четыре кнопки <button> +2 \n",
    "3 Вёрстка соответствует макету +48 \n",
    "блок <header> +6 \n",
    "секция preview +9 \n",
    "секция steps +9 \n",
    "секция destinations +9 \n",
    "секция stories +9 \n",
    "блок <footer> +6 \n",
    "4 3 Вёрстка соответствует макету +48 \n",
    "для построения сетки используются флексы или гриды +2 \n",
    "при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2 \n",
    "фоновый цвет тянется на всю ширину страницы +2 \n",
    "иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2 \n",
    "изображения добавлены в формате .jpg +2\n",
    "есть favicon +2 \n",
    "Интерактивность, реализуемая через css +20 \n",
    "плавная прокрутка по якорям +5 \n",
    "иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса (допускается добавление своих вариантов иконок github или RSSchool) https://rs.school/js-stage0/ +5 \n",
    "интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5 \n",
    "обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5 \n",
    "score: 110\n",
)

document.addEventListener('DOMContentLoaded', function() {
    if (test === 0) {
        aaaa()

    }
});
let aa, bb, cc

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
    document.getElementById('clickLeft').style.opacity = ('1')
    document.getElementById('clickRight').style.opacity = ('1')
    if (retorn === 1 && position === 1) {
        document.getElementById('clickLeft').style.opacity = ('0.5')
        clikFirst()
    } else if (retorn === 0 && position === 1) {
        document.getElementById('clickLeft').style.opacity = ('0.5')
    } else {}

    if (retorn === 1 && position === 2) {
        clikSecand()
    } else {}

    if (retorn === 1 && position === 3) {
        document.getElementById('clickRight').style.opacity = ('0.5')
        clikTird()

    } else if (retorn === 0 && position === 3) {
        document.getElementById('clickRight').style.opacity = ('0.5')

    } else {}
}

function clikFirst() {
    aa = 2
    bb = 3
    cc = 1
    document.getElementById("a").style.order = aa
    document.getElementById("b").style.order = bb
    document.getElementById("c").style.order = cc
    document.getElementById("First").classList.add('active-ball')
    document.getElementById("First").classList.remove('disabled-ball')
    document.getElementById("Secand").classList.add("disabled-ball")
    document.getElementById("Tird").classList.add("disabled-ball")
    document.getElementById("Secand").classList.remove("active-ball")
    document.getElementById("Tird").classList.remove("active-ball")
    position = 1
    retorn = 0
    clickPosition()
    setTimeout(retorn = 1, 1000);
}


function clikSecand() {
    aa = 1
    bb = 2
    cc = 3
    document.getElementById("a").style.order = aa
    document.getElementById("b").style.order = bb
    document.getElementById("c").style.order = cc
    document.getElementById("Secand").classList.add('active-ball')
    document.getElementById("Secand").classList.remove('disabled-ball')
    document.getElementById("First").classList.add("disabled-ball")
    document.getElementById("Tird").classList.add("disabled-ball")
    document.getElementById("Tird").classList.remove("active-ball")
    document.getElementById("First").classList.remove("active-ball")
    position = 2
    retorn = 0
    clickPosition()
    setTimeout(retorn = 1, 1000);
}


function clikTird() {
    aa = 3
    bb = 1
    cc = 2
    document.getElementById("a").style.order = aa
    document.getElementById("b").style.order = bb
    document.getElementById("c").style.order = cc
    document.getElementById("Tird").classList.add('active-ball')
    document.getElementById("Tird").classList.remove('disabled-ball')
    document.getElementById("First").classList.add("disabled-ball")
    document.getElementById("Secand").classList.add("disabled-ball")
    document.getElementById("First").classList.remove("active-ball")
    document.getElementById("Secand").classList.remove("active-ball")
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

function clikBurger() {
    document.getElementById("menuBurger").classList.toggle("close");
    document.getElementById("menuBurger").classList.toggle("open");
    document.getElementById("shadow").classList.toggle("shadow-close");
    document.getElementById("shadow").classList.toggle("shadow-open");
    height()

}

function height() {
    document.getElementById('shadow').style.height = (pageHeight + 'px');
}