//DOM 이란 ? document 라는 텍스트를 object 화 한 것.
//다음은 title을 DOM 화 해보겠다는 것을 뜻한다.
const title = document.getElementById("title");
//개발자도구에서 console.dir()를 이용하여 title과 document를 찍어 확인해보자
title.innerHTML="Hi! From JS";
title.style.color="red";

document.title="I own you now";


//document.querySelector
const title2 = document.querySelector("#title"); //document에서 id가 title인 애를 찾아 dom 객체화를 한다. document.querySelector(".title")을 하면 undefined가 뜸


//2.1javascript는 이벤트에 반응하기 위해서 만들어짐, html과 css를 위해 만들어진 것이 아님
//2.1직접 우리가 이벤트를 가로채서 핸들링 할 수가 있다는 것을 의미함

function handleResize(event) {
    console.log("I have been resized");
    console.log(event);
}

window.addEventListener("resize", handleResize) 
//2.2haneldResize()는 함수를 바로바로 호출하는것이지만, 
//2.2이것은 handleResize를 필요할 때에, 필요한 시점에 호출하는 것을 의미함
//2.3window.addEventListener("resize", handleResize())와 위의 함수를 비교해 볼것



//2.4
const BASE_COLOR= "#34495e";

function handleClick(event){
    title.style.color = "blue";
}
function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click",handleClick); // title을 클릭되어지길 기다리고 있음. 클릭이벤트를 예의주시하고 있음
    
}

//와이파이 리스너
function handleOffline(){
    console.log("Bye bye");
}
function handleOnline(){
    console.log("Welcomeback");
}
window.addEventListener("online",handleOffline);
window.addEventListener("offline",handleOnline);



