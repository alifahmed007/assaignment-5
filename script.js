// heart Area

let HeartCount =0;

const heartElements = document.getElementsByClassName("cart-heart");
for (let i = 0; i < heartElements.length; i++) {
    heartElements[i].addEventListener("click", function() {
        HeartCount++;
        document.getElementById("heart-count").innerText = HeartCount;
    });
}

