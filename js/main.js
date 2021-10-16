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

prev.addEventListener("click", () => {
    frame.style.transform = `rotate(${deg* ++num}deg)`;
        //현재 순번이 0이 되면 마지막 순번으로 초기화
        // if(active == 0) {
        //     active = len-1;
        //     //마지막 순번이 아니면 1씩 감소
        // } else {
        //     active--;
        // }

        (active == 0)  ? active = len-1 : active--;
        for(let el of list){
            el.classList.remove("on");
        }
        list[active].classList.add("on");
});

next.addEventListener("click", () => {
    frame.style.transform = `rotate(${deg* --num}deg)`;
    // //현재 순번이 마지막 순번이 되면 0으로 초기화
    // if(active == len-1) {
    //     active = 0;
    //     //마지막 순번이 아니면 1씩 증가
    // } else {
    //     active++;
    // }

    (active == len-1) ? active = 0 : active++;
    for(let el of list){
        el.classList.remove("on");
    }
    list[active].classList.add("on");
});