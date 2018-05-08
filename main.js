function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

const add = document.getElementById("add");
const iceBox = document.getElementById("icebox");

let addItemToIceBox = () => {
    let addItemContent = document.getElementById("itemContent").value;

    let createElementFromHtml = htmlString => {
        let div = document.createElement("div");
        div.innerHTML = htmlString.trim();
        div.draggable = true;
        div.id = "test" + Math.round(Math.random() * 100);
        div.addEventListener("dragstart", drag, false);
        // div.onload = function(event) {
        //     this.addEventListener("dragstart", drag, false);
        // };
        return div;
    };

    let a = createElementFromHtml(addItemContent);
    console.log(a);

    iceBox.appendChild(a);
};

add.addEventListener("click", () => {
    return addItemToIceBox();
});
