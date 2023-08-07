const imageUrls = ["../Images/mccleren/front.jpg", "../Images/mccleren/back.jpg", "../Images/mccleren/inside.jpg"];
let currentImageIndex = 0;
const imageUrlsPagani = ["../Images/Front Angle View 1.png", 
"../Images/Pagani Huayra/Front Angle View 2.png", "../Images/Pagani Huayra/Front Angle View.png" ];
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
        imageElement.src = imageUrls[currentImageIndex];
        }
        function changeImageBackwardBmw() {
        const imageElement = document.getElementById("image");
        currentImageIndex = (currentImageIndex - 1 + imageUrlsBmw.length) % imageUrlsBmw.length;
        imageElement.src = imageUrlsBmw[currentImageIndex];
        }