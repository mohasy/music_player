const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const len = list.length;
const deg = 360/len;
//바뀌는 값이기 때문에 let로 선언
let num = 0; //박스의 초기 위치값설정
let active = 0;

//패널의 갯수만큼 반복을 해서 일정 각도마다 회전
for(let i =0; i<len; i++){
    list[i].style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
}

//이전 버튼 클릭
prev.addEventListener("click", () => {
    frame.style.transform = `rotate(${deg* ++num}deg)`;

    (active == 0)  ? active = len-1 : active--;
    activation();
});

//다음 버튼 클릭
next.addEventListener("click", () => {
    frame.style.transform = `rotate(${deg* --num}deg)`;

    (active == len-1) ? active = 0 : active++;
    activation();
});

//각 패널의 플레이 버튼 클릭시
for(let el of list) {
    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");

    play.addEventListener("click", e=> {
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    });
    pause.addEventListener("click", e=> {
        e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
    });
}

//버튼 활성화 함수
function activation() {
    for(let el of list){
        el.classList.remove("on");
    }
    list[active].classList.add("on");
}