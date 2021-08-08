const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImg = document.createElement("img");
bgImg.classList.add("bg");
bgImg.src = `img/${chosenImage}`;
//bgImg.src = "http://source.unsplash.com/random/2160x1440/?nature";
document.body.appendChild(bgImg);


