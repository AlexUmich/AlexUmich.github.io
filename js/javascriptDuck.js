var button = document.getElementById("totop");
document.querySelector("#totop").addEventListener("click", function() {window.scroll(0, 0);});

var duckImageLinks = ["img/duck2.avif", "img/duck3.jpg", "img/duck4.jpg", "img/duck5.jpg", "img/duck6.jpg", "img/duck7.jpg", "img/duck8.jpg", "img/duck9.jpg", "img/duck10.jpg", "img/duck11.jpg"];
var duckpic1 = document.getElementById("duckpic1");
var duckpic2 = document.getElementById("duckpic2");
var duckpic3 = document.getElementById("duckpic3");
duckpic1.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * duckImageLinks.length);
    var randomImageSrc = duckImageLinks[randomIndex];
    duckpic1.src = randomImageSrc;
});
duckpic2.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * duckImageLinks.length);
    var randomImageSrc = duckImageLinks[randomIndex];
    duckpic2.src = randomImageSrc;
});
duckpic3.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * duckImageLinks.length);
    var randomImageSrc = duckImageLinks[randomIndex];
    duckpic3.src = randomImageSrc;
});