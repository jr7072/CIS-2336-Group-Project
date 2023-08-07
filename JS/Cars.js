const imageUrls = ["../Images/front.jpg", "../Images/back.jpg", "../Images/inside.jpg"];
let currentImageIndex = 0;
const imageUrlsPagani = ["../Images/Front Angle View 1.png", 
"../Images/Front Angle View 2.png", "../Images/Front Angle View.png" ];
const imageUrlsBmw = ["../Images/front-left-side.png", "../Images/Door Handle.png", 
"../Images/Interior.png"];
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