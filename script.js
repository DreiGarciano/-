document.getElementById("noButton").addEventListener("mouseover", function() {
    // Set a smaller range for the button's movement
    const range = 150;

    const randomX = Math.floor(Math.random() * (range * 2)) - range;
    const randomY = Math.floor(Math.random() * (range * 2)) - range;

    this.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    // Set a smaller range for the button's movement
    const range = 150;

    const randomX = Math.floor(Math.random() * (range * 2)) - range;
    const randomY = Math.floor(Math.random() * (range * 2)) - range;

    this.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

document.getElementById("noButton").addEventListener("click", function() {
    changeImage();
});

function changeImage() {
    document.querySelector("img").src = "https://media1.tenor.com/m/ZPtqi2iOSYEAAAAC/goma-cat-jdonyu.gif"; // Replace with your new image URL
}
