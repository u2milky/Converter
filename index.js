let number;
let converted;
let base;

window.onload = () => {
    document.getElementById('errorHandler').hidden = true;

    document.getElementById("numberA").addEventListener("input", function() {
        number = this.value;
        console.log(number);
    });

    document.getElementById("base").addEventListener("input", function() {
        base = this.value;
        console.log(base);
        if (base > 36 || base < 2) {
            document.getElementById('errorHandler').hidden = false;
            document.getElementById("errorHandler").innerHTML = "The base is invalid! Only accepts base between 2 and 36.";
        } else {
            document.getElementById('errorHandler').hidden = true;
        }
    });

    document.getElementById("butt3").onclick = function () {
        converted = parseInt(number, base);
        document.getElementById("converted").innerHTML = "Here's the converted number: " + converted;
    };

    // get the current hour using the Date object
    const hour = new Date().getHours();

    // select the body element
    const body = document.querySelector('body');

    // set the background color based on the time of day
    if (hour >= 6 && hour < 12) {
        document.body.style.background = "url('morning.jpg')";
    } else if (hour >= 12 && hour < 18) {
        document.body.style.background = "url('afternoon.jpg')";
    } else {
        document.body.style.background = "url('night.png')";
    }

    console.log(converted);
};
