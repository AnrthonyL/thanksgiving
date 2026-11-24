
function message() {
    document.getElementById("answer").innerHTML = "Happy Thanksgiving!";
}

function food() {
    let foods = ["Turkey", "Pie", "Corn", "Potatoes"];

    let x = Math.floor(Math.random() * 4);

    document.getElementById("answer2").innerHTML = foods[x];
}

function color() {
    document.body.style.backgroundColor = "orange";
}
