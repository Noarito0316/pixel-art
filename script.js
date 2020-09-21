boardmaker();

document.querySelectorAll(".color")[0].classList.add("selected");
document.querySelector("#clear-board").addEventListener("click", function() {
    document.querySelectorAll('.pixel').forEach(item => {
        item.style.backgroundColor = "white";
    })
});

document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', event => {
        let selectedColor = document.querySelector(".selected");
        let previusColor = document.querySelector(".selected");
        let colorexib = window.getComputedStyle(item, null).getPropertyValue("background-color")
        previusColor.classList.remove("selected");
        item.classList.add("selected");
        document.querySelector(".exibition-color").style.backgroundColor = colorexib;
    })
})

document.querySelector("#board-size-button").addEventListener("click", boardmaker)

function boardmaker() {
    let boardsize = document.querySelector("#board-size").value;
    let boardref = document.querySelector("#pixel-board");
    let boardWidth = boardsize * 40;
    let boardHeight = boardsize * 40;
    if (boardsize > 60) {
        alert("numero maximo é 60");
        document.querySelector("#board-size").value = 5;
    } else {
        if (boardsize < 0) {
            alert("numero minimo é 0");
            document.querySelector("#board-size").value = 5;
        } else {
            boardref.innerHTML = ""
            boardref.style.height = boardHeight + "px";
            boardref.style.width = boardWidth + "px";
            for (nPixels = 0; nPixels < boardsize * boardsize; nPixels += 1) {
                let pixel = document.createElement("div");
                pixel.classList.add("pixel");
                boardref.appendChild(pixel);
            }
            pixelmaker();
        }
    }
}

function pixelmaker() {
    document.querySelectorAll('.pixel').forEach(item => {
        item.addEventListener('click', event => {
            let elementSelected = document.querySelector(".selected");
            let elementWithCssProp = window.getComputedStyle(elementSelected, null).getPropertyValue("background-color");
            item.style.backgroundColor = elementWithCssProp;
        })
    })
}