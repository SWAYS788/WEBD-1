const containerE1 = document.querySelector(".container");
const btnE1 = document.querySelector(".btn");
const popupconatinerE1 = document.querySelector(".popup-container");
const closeiconE1 = document.querySelector(".close-icon");
btnE1.addEventListener("click",()=>{
    containerE1.classList.add("active");
    popupconatinerE1.classList.remove("active")
})
closeiconE1.addEventListener("click",()=>{
    containerE1.classList.remove("active");
    popupconatinerE1.classList.add("active");
})