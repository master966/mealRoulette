const btnDraw = document.querySelector(".js-draw");

// 간식
const snacks = ["오징어땅콩","갈비만두","김치만두","고기만두", "컵라면", "프링글스", "오다리", "숏다리", "불벅", "위대한탄생", "핫바베큐", "초코빵"];
// 점심
const lunchs = ["떡볶이", "토스트", "돈까스", "냉면"];
// 저녁
const dinners = ["순대국밥", "삼겹살", "돼지갈비", "소갈비찜", "돈갈비찜", "돼지국밥", "김치찌개"];
// 안주
const touchingsArray = ["오징어", "물회", "곱창", "막창", "대창"];
// 야식
const midnights = ["족발", "보쌈", "피자", "후라이드치킨", "간장치킨", "양념치킨", "굽네볼케이노"];

function pushArray(parent, child) {
    child.forEach(function(element) {
        parent.push(element);
    })
}

function drawMeal(event) {
    event.preventDefault();
    const snack = document.getElementsByName("snack")[0].checked;
    const lunch = document.getElementsByName("lunch")[0].checked;
    const dinner = document.getElementsByName("dinner")[0].checked;
    const touchings = document.getElementsByName("touchings")[0].checked;
    const midnight = document.getElementsByName("midnight")[0].checked;
    const menulist = [];
    if (snack == true) {
        pushArray(menulist, snacks);
    }
    if (lunch == true) {
        pushArray(menulist, lunchs);
    }
    if (dinner == true) {
        pushArray(menulist, dinners);
    }
    if (touchings == true) {
        pushArray(menulist, touchingsArray);
    }
    if (midnight == true) {
        pushArray(menulist, midnights);
    }
    const result = document.querySelector(".js-result");

    if(menulist.length === 0) {
        result.innerHTML = "⚠ 항목을 하나 이상 체크해주세요!";
    } else {
        result.innerHTML = "";
        const todays = document.createElement("span");
        todays.innerHTML = "【오늘의 메뉴는~...】"
        todays.classList.add("todays");
        todays.style.display = "block";
        result.appendChild(todays);
        
        const ranNum = Math.floor(Math.random() * menulist.length);
        const menu = document.createElement("span");
        menu.innerHTML = `${menulist[ranNum]}~!`;
        menu.classList.add("menu");
        result.appendChild(menu);
    }


}


function init() {
    btnDraw.addEventListener("click", drawMeal);
}

init();