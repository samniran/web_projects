let generatebtn = document.getElementById("generate");
let min = document.getElementById("min");
let max = document.getElementById("max");
let resultContainer = document.getElementById("result");
let error=document.getElementById("error");

function randomNum() {
    let minval = Number(min.value);
    let maxval = Number(max.value);

    if (minval > maxval) {
        generatebtn.style.display = "none";
        resultContainer.style.display = "none";
        error.style.display="block"
    } else {
        generatebtn.style.display = "block";
        generatebtn.addEventListener("click", () => {
            let num = Math.floor(Math.random() * (maxval - minval + 1)) + minval;
            resultContainer.innerText = num;
            resultContainer.style.display = "block";
            error.style.display="none";

        });
    }
}

window.addEventListener("load", randomNum);

// Add event listeners for the "input" event on both "min" and "max" inputs
min.addEventListener("input", randomNum);
max.addEventListener("input", randomNum);
