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


// coin Area

const callButtons = document.getElementsByClassName("call-button");

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function(event) {
        event.preventDefault();

        const coinCountElement = document.getElementById("coin-count");
        let coinCount = parseInt(coinCountElement.innerText);

        if (coinCount >= 20) {
            const totalCoin = coinCount - 20;
            coinCountElement.innerText = totalCoin;

            
            if (totalCoin === 0) {
                alert("Your coins have run out!");
            }

        } else {
            alert("You do not have enough coins. 20 coins are required to make a call.");
        }
    });
}

const callBtn = document.getElementsByClassName("call-button");
const callHistoryContainer = document.getElementById("call-history");
const clearBtn = document.getElementById("clear-history")
const transactionData = [];

for (let btn of callBtn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();


        const card = this.closest(".bg-white");
        const serviceName = card.querySelector("h3").innerText;
        const serviceNumber = card.querySelector(".copy-text").innerText;

        const data = { 
            name: serviceName,
            number: serviceNumber,
            date: new Date().toLocaleTimeString() 
        };

        transactionData.push(data);

 
        callHistoryContainer.innerHTML = "";
        for (const tx of transactionData) {
            const entry = document.createElement("div");
            entry.innerHTML = `
                <div class="call-entry flex items-center justify-between p-4 border-2 border-gray-300 rounded-lg mb-4">
                    <div>
                        <h2>${tx.name}</h2>
                        <p>${tx.number}</p>
                    </div>
                    <p>${tx.date}</p>
                </div>
            `;
            callHistoryContainer.appendChild(entry);
        }
    });
}   

clearBtn.addEventListener("click", function() {
    callHistoryContainer.innerHTML = "";
    transactionData.length = 0; 
});