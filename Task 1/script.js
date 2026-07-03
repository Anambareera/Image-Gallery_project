// ==========================
// Search Bar
// ==========================

const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

if (search) {
    search.addEventListener("keyup", function () {

        let value = search.value.toLowerCase().trim();

        cards.forEach(function(card) {

            let category = card.getAttribute("data-category").toLowerCase();

            if (value === "" || category.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}


// ==========================
// Image Popup
// ==========================

const images = document.querySelectorAll(".card img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

images.forEach((img, index) => {

    img.addEventListener("click", function () {

        modal.style.display = "block";
        modalImg.src = this.src;
        currentIndex = index;

    });

});

closeBtn.addEventListener("click", function () {

    modal.style.display = "none";

});

nextBtn.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    modalImg.src = images[currentIndex].src;

});

prevBtn.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    modalImg.src = images[currentIndex].src;

});

window.addEventListener("click", function (e) {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});