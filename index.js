let images = [
    "11576681.jpg",
    "istock-856362748_c6f.webp",
    "i (1).webp",
    "shutterstock_221032825.webp",
    "The_London_Fireworks_Display.jpg"
]

let index = 0;

let carusel = document.getElementById("photo");
let next = document.getElementById("next")

next.addEventListener("click", function(){
    index++;
    if (index >= images.length){
        index = 0;
    }
    carusel.src = images[index];
});