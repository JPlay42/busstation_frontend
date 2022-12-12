// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import flatpickr from "flatpickr";
import datepicker from 'js-datepicker'


//!HEADER
const supportLink = document.querySelector('.header__help')

supportLink.addEventListener('click', () => {
    supportLink.classList.toggle('active')
})

let schedule = [
    {
        cityFrom: "Луцьк",
        cityTo: "Київ",
        date: "10.11.2022",
        remainingPlaces: 20
    },
    {
        cityFrom: "Луцьк",
        cityTo: "Одеса",
        date: "10.11.2022",
        remainingPlaces: 20
    },
    {
        cityFrom: "Київ",
        cityTo: "Рівне",
        date: "10.11.2022",
        remainingPlaces: 20
    },
]

let citiesTo = [
    "Київ",
    "Луцьк",
    "Одеса",
    "Ужгород",
    "Львів",
]

let list = [
    "Київ",
    "Луцьк",
    "Одеса",
    "Ужгород",
    "Львів",
]



const inputFrom = document.querySelector('.form__from')
const inputTo = document.querySelector('.form__to')
const form = document.querySelector('.order__form')
const date = document.querySelector('.form__date')

const picker = datepicker(date, {
    customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
    customMonths: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
    startDay: 1,
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value
    },
    onSelect: function (input, instance, date) {

    }
})

form.addEventListener('submit', checkForm)

const tickets = document.querySelector('.schedule__list')

function checkForm(e) {
    e.preventDefault()
    if (!(inputTo.classList.contains('error') || inputFrom.classList.contains('error'))) {
        let flag = false
        for (let item of schedule) {
            if (item.date === date.value && item.cityFrom === inputFrom.value && item.cityTo === inputTo.value) {
                tickets.innerHTML = ''
                tickets.innerHTML += `
                    <div class="route__top top-route">
                        <div class="top-route__departure">
                            <div class="top-route__time">06:40</div>
                            <div class="top-route__date">Ср, 2 Лис</div>
                            <div class="top-route__location">${item.cityFrom}</div>
                            <div class="top-route__point">Автовокзал "Центральний"</div>
                        </div>
                        <div class="top-route__arrival">
                            <div class="top-route__time">12:30</div>
                            <div class="top-route__date">Ср, 2 Лис</div>
                            <div class="top-route__location">${item.cityTo}</div>
                            <div class="top-route__point">Зупинка біля центрального вокзалу</div>
                        </div>
                        <div class="top-route__actions">
                            <div class="top-route__price">500грн</div>
                            <div class="top-route__btn">Обрати</div>
                        </div>
                    </div>
                `
                flag = true
            }
        }
        if (!flag) {
            tickets.innerHTML = '<h2 class="not-found">Маршрут не знайдено</h2>'
        }
    }
}


inputFrom.addEventListener('blur', checkCity)
inputTo.addEventListener('blur', checkCity)
inputFrom.addEventListener('focus', removeError)
inputTo.addEventListener('focus', removeError)


function removeError(e) {
    e.target.classList.remove('error')
}

function checkCity(e) {
    if (!list.includes(event.target.value)) {
        event.target.value = ''
        event.target.classList.add('error')
    }
}



// input.addEventListener('keyup', () => {
//     for (let i of list) {
//         if (i.toLowerCase().startsWith(input.ariaValueMax.toLowerCase()) && input.value != '') {
//             console.log(0)
//         }
//     }
// })
