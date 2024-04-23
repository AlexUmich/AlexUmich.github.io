var button = document.getElementById("totop");
document.querySelector("#totop").addEventListener("click", function() {window.scroll(0, 0);});

var penguinImageLinks = ["img/penguin2.avif", "img/penguin3.webp", "img/penguin4.jpg", "img/penguin5.avif", "img/penguin6.webp", "img/penguin7.jpg", "img/penguin8.avif", "img/penguin9.jpg", "img/penguin10.webp", "img/penguin11.webp"];
var penguinpic1 = document.getElementById("penguinpic1");
var penguinpic2 = document.getElementById("penguinpic2");
var penguinpic3 = document.getElementById("penguinpic3");
penguinpic1.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * penguinImageLinks.length);
    var randomImageSrc = penguinImageLinks[randomIndex];
    penguinpic1.src = randomImageSrc;
});
penguinpic2.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * penguinImageLinks.length);
    var randomImageSrc = penguinImageLinks[randomIndex];
    penguinpic2.src = randomImageSrc;
});
penguinpic3.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * penguinImageLinks.length);
    var randomImageSrc = penguinImageLinks[randomIndex];
    penguinpic3.src = randomImageSrc;
});