function openTrailer(videoSrc) {
    const popup = document.getElementById("trailerPopup");
    const video = document.getElementById("trailerVideo");

    popup.style.display = "flex";
    video.src = videoSrc + "?autoplay=1&rel=0"; // autoplay the trailer
}

function closeTrailer() {
    const popup = document.getElementById("trailerPopup");
    const video = document.getElementById("trailerVideo");

    popup.style.display = "none";
    video.src = ""; // stop video
}

window.onclick = function(event) {
    const popup = document.getElementById("trailerPopup");
    if (event.target === popup) {
        closeTrailer();
    }
}