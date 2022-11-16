const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

console.log(tabsParent);

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 3) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    console.log(target);
    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                console.log(i);
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

modalTrigger.addEventListener("click", openModal);

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

closeModalBtn.addEventListener("click", closeModal);

//Homework

//Task 1

let slideId = 0
const SlideSec = () => {
    slideId++
    if(slideId > 3) {
        slideId=0
    }
    hideTabContent()
    showTabContent(slideId)
}

setInterval(SlideSec, 800)

//Task 2

scrollModal =()=> {

    window.addEventListener('scroll', () => {

            const scrollHeight = document.documentElement.scrollHeight;

            const clientHeight = window.pageYOffset + document.documentElement.clientHeight;

            const ScrollEnd = Math.abs(scrollHeight - clientHeight) < 10;

            if(ScrollEnd){
                openModal()

            }
        }
    )
}

window.addEventListener("scroll", scrollModal)
