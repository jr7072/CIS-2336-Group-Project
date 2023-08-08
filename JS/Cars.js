const imageUrls = ["../Images/mccleren/front.jpg", "../Images/mccleren/back.jpg", "../Images/mccleren/inside.jpg", "../Images/mccleren/left side.jpg",
"../Images/mccleren/right back portion.jpg", "../Images/mccleren/right back.jpg","../Images/mccleren/right side.jpg"];
let currentImageIndex = 0;
const imageUrlsPagani = ["../Images/Pagani Huayra/Front Angle View 1.png", 
"../Images/Pagani Huayra/Front Angle View 2.png", "../Images/Pagani Huayra/Front Angle View.png", 
"../Images/Pagani Huayra/Front View.png", "../Images/Pagani Huayra/Rear Angle View 1.png",
"../Images/Pagani Huayra/Rear Angle View.png", "../Images/Pagani Huayra/Rear View.png",
"../Images/Pagani Huayra/Side View 1.png", "../Images/Pagani Huayra/Side View.png"];
const imageUrlsBmw = ["../Images/bmw i8/front-left-side.png", "../Images/bmw i8/Door Handle.png", 
"../Images/bmw i8/Interior.png", "../Images/bmw i8/Rear Medium Side View.png",
"../Images/bmw i8/Rear Right Side.png", "../Images/bmw i8/Taillight.png",
"../Images/bmw i8/Wheel.png"];
function changeImageForward() {
const imageElement = document.getElementById("image");
currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
imageElement.src = imageUrls[currentImageIndex];
}
function changeImageBackward() {
const imageElement = document.getElementById("image");
currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
imageElement.src = imageUrls[currentImageIndex];
}

function changeImageForwardPagani() {
    const imageElement = document.getElementById("image");
    currentImageIndex = (currentImageIndex + 1) % imageUrlsPagani.length;
    imageElement.src = imageUrlsPagani[currentImageIndex];
    }
    function changeImageBackwardPagani() {
    const imageElement = document.getElementById("image");
    currentImageIndex = (currentImageIndex - 1 + imageUrlsPagani.length) % imageUrlsPagani.length;
    imageElement.src = imageUrlsPagani[currentImageIndex];
    }

    function changeImageForwardBmw() {
        const imageElement = document.getElementById("image");
        currentImageIndex = (currentImageIndex + 1) % imageUrlsBmw.length;
        imageElement.src = imageUrlsBmw[currentImageIndex];
        }
        function changeImageBackwardBmw() {
        const imageElement = document.getElementById("image");
        currentImageIndex = (currentImageIndex - 1 + imageUrlsBmw.length) % imageUrlsBmw.length;
        imageElement.src = imageUrlsBmw[currentImageIndex];
        }