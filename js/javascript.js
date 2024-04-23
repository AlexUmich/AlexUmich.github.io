var button = document.getElementById("totop");
document.querySelector("#totop").addEventListener("click", function() {window.scroll(0, 0);});

var catImageLinks = ["img/cat2.jpg", "img/cat3.webp", "img/cat4.jpg", "img/cat5.jpg", "img/cat6.jpg", "img/cat7.jpg", "img/cat8.jpg", "img/cat9.jpg", "img/cat10.jpg", "img/cat11.jpg"];
var catpic1 = document.getElementById("catpic1");
var catpic2 = document.getElementById("catpic2");
var catpic3 = document.getElementById("catpic3");
catpic1.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * catImageLinks.length);
    var randomImageSrc = catImageLinks[randomIndex];
    catpic1.src = randomImageSrc;
});
catpic2.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * catImageLinks.length);
    var randomImageSrc = catImageLinks[randomIndex];
    catpic2.src = randomImageSrc;
});
catpic3.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * catImageLinks.length);
    var randomImageSrc = catImageLinks[randomIndex];
    catpic3.src = randomImageSrc;
});