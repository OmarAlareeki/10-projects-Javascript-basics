const imgs = document.getElementById("imgs");

const imgsLength = document.querySelectorAll("#imgs img");

let index = 0;

function runCarousel() {

    index++;

    if(index > imgsLength.length - 1) {
        index = 0;
    }

    // imgs.style.transform = `translateX(${-index * 400}px)`;
    imgs.style.transform = `translateX(${-index * 400}px)`;
}

setInterval(runCarousel, 2000);