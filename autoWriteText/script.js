
const div = document.getElementById("container")
const p = document.createElement('p');
p.classList.add('text');

const text = "Hello users to my world!";

let index = 0;
function autoText() {
    
    


    p.innerText = text.slice(0, index);
    
    index++;

    if(index > text.length - 1) {
        index = 0;
    }
    div.appendChild(p)
}

setInterval(autoText, 100)