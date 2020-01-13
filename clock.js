const clockContainer = document.querySelector('.js-clock'),
    clockTitle = document.querySelector("h1");

//1.1 개발자도구 - consol 창으로 Date()함수를 파악한다. 하단 순서대로 기입
//1.1 const date = new Date();
//1.1 date
//1.1 date.getDay() //뒤에 ()를 꼭 붙인다.

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
    
}
function init(){
    getTime();
}

init();