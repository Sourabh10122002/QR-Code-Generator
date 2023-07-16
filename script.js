let qrText = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");


function generateQR() {
    console.log("first");
    if(qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrText.value;
    imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(()=> {
            qrText.classList.remove('error');
        })
    }
}
