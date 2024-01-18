document.addEventListener("DOMContentLoaded", function () {
    let imgBox = document.getElementById("imgBox");
    let qrimage = document.getElementById("qrimg");
    let qrtext = document.getElementById("qrtxt");
    let genbtn = document.getElementById("generate");
    let sucmes = document.getElementById("success");

    function generateQr() {
        if (qrtext.value.trim() == "") {
            imgBox.style.display = "none";
            sucmes.textContent = "Give a text";
            sucmes.style.color = "red";
            sucmes.style.display = "block";
        } else {
            sucmes.style.display = "none"; // Hide the message
            sucmes.style.color = "green";
            sucmes.textContent = "Here's your qr!";
            imgBox.style.display = "block";
            qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext.value);
            sucmes.style.display = "block";
        }
    }

    genbtn.addEventListener("click", generateQr);
});
