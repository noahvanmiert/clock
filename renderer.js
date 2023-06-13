/*
    Made by Noah Van Miert
*/

const second_time = 1000
const minute_time = second_time * 60;
const hour_time = minute_time * 60;

const time_txt = document.getElementById('time')
const date_txt = document.getElementById('date')

function getStrTime(time) {
    if (time < 10) return `0${time}`
    
    return time
}


const days_of_week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


setInterval(() => {
    var today = new Date()
    var time = `${getStrTime(today.getHours())}:${getStrTime(today.getMinutes())}:${getStrTime(today.getSeconds())}`
    var date = `${days_of_week[today.getDay() - 1]}, ${today.getDate()} ${months[today.getMonth()]}`

    time_txt.innerHTML = time
    date_txt.innerHTML = date
})