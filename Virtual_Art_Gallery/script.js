const artworks = document.querySelectorAll(".artwork");
let currentIndex = 0;

function showArtwork(index) {
    artworks.forEach((art, i) => {
        art.style.display = i === index ? "block" : "none";
    });
}

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % artworks.length;
    showArtwork(currentIndex);
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    showArtwork(currentIndex);
});
showArtwork(currentIndex);
