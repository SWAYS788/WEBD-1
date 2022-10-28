const nextE1 = document.querySelector(".next");
const prevE1 = document.querySelector(".prev")
const imagecontainerE1 = document.querySelector(".image-container");
const imgE1 = document.querySelectorAll("img");
let currentImg = 1;
nextE1.addEventListener("click", () => {
    currentImg++;
    updateImage();

});
prevE1.addEventListener("click", () => {
    currentImg--;
    updateImage();

});
function updateImage() {
    if (currentImg > imgE1.length) {
        currentImg = 1;
    }
    else if ( currentImg < 1){
        currentImg = imgE1.length;
    }
    imagecontainerE1.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    setTimeout(() => {
        currentImg++;
        updateImage();
    }, 3000);
}