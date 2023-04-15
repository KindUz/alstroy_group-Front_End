var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");

image2.addEventListener("click", function() {
    var temp = image1.src;
    image1.src = image2.src;
    image2.src = temp;
});

image3.addEventListener("click", function() {
    var temp = image1.src;
    image1.src = image3.src;
    image3.src = temp;
});