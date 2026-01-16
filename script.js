let myImgs = [
    "Alaska.png",
    "City.png",
    "Storm.png",
    "Bird.png",
    "Ocean.png",
    "Lake.png",
    "Forest.png",
    "Duck.png",
    "Iceberg.png",
    "Leopard.png",
    "Mountain.png",
    "Snow-tree.png"];
let currentIndex = 0;

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const imgNumber = document.getElementById("img-number");
const imgTitleRef = document.getElementById("img-title")
const dialog = document.getElementById("myDialog");
dialog.addEventListener("click", function (e) {
    if (e.target === dialog) {
        dialog.close();
    }
});
const dialogImage = document.getElementById("dialog-image");
prevBtn.onclick = prevImage;
nextBtn.onclick = nextImage;

function generateImages() {
    const imgRef = document.getElementById('pageContainer');

    for (let i = 0; i < myImgs.length; i++) {
        const imgRef = document.getElementById("pageContainer");
        imgRef.innerHTML += `<img class= "photo-gallery" src="${myImgs[i]}" alt="${myImgs[i]}"
        tabindex="0" onclick="zoomPhoto(${i})">`;
    }
}
function zoomPhoto(index) {
    currentIndex = index;
    updateDialog();
    prevBtn.onclick = () => {
        currentIndex = currentIndex === 0 ? myImgs.length - 1 : currentIndex - 1;
        updateDialog();
    };

    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % myImgs.length;
        updateDialog();
    };
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

function updateDialog() {
    dialogImage.innerHTML = `<img class="inside-dialog-img" src="${myImgs[currentIndex]}">`;
    imgTitleRef.innerHTML = myImgs[currentIndex];
    imgNumber.innerHTML = `${currentIndex + 1} / ${myImgs.length}`;

}






