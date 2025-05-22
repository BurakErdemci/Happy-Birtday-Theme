function playFireworks() {
    const sound = document.getElementById("fireworkSound");
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}
