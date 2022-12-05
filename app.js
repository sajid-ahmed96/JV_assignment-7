var img = document.getElementById('img')
var slides = document.getElementById('imgs')
var imgs = slides.getElementsByTagName('IMG')
img.src = imgs[0].src
var a = 0
function slideNext(x) {
    a = a + x
    if (a == imgs.length) {
        a = 0
        x = 0
    }
    img.src = imgs[a].src
}
function slidePrev(y) {
    a = a + y
    if (a < 0) {
        a = imgs.length - 1
        y = imgs.length - 1
    }
    img.src = imgs[a].src
}