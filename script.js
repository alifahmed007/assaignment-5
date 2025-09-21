// heart Area

let HeartCount =0;

const heartElements = document.getElementsByClassName("cart-heart");
for (let i = 0; i < heartElements.length; i++) {
    heartElements[i].addEventListener("click", function() {
        HeartCount++;
        document.getElementById("heart-count").innerText = HeartCount;
    });
}

// copy Area    

const copyButton = document.getElementsByClassName("copy-button");
const copyCountElement = document.getElementById("copy-count");

let copyCount = 0;

for (let i = 0; i < copyButton.length; i++) {
    copyButton[i].addEventListener("click", function () {
        const cart = this.closest(".shadow-md"); 
        const cartName = cart.querySelector(".copy-text").innerText;

        navigator.clipboard.writeText(cartName)
            .then(() => {

  

                copyCount++; 
                copyCountElement.innerText = copyCount;
                alert("Product name copied: " + cartName);
            })
            .catch(err => { 
                console.error('Failed to copy text: ', err);
            });
    });
}

