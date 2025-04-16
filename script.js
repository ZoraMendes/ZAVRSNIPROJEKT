document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
  
    function updateCartDisplay() {
        const cartDisplay = document.getElementById("cart-display");
        if (cartDisplay) {
            cartDisplay.textContent = `🛒 Košarica: ${cart.length}`;
        }
    }
  
    function addToCart(motor) {
        cart.push(motor);
        updateCartDisplay();
    }
  
    function displayMotors() {
        const motors = [
            { name: "Yamaha MT-07", price: "250 kn/dan", image: "slike/yamaha07.jpg" },
            { name: "Honda CB500F", price: "200 kn/dan", image: "slike/hondaMotor.jpg" },
            { name: "BMW R1250GS", price: "400 kn/dan", image: "slike/bmwMotor.webp" },
            { name: "Ducati Monster", price: "300 kn/dan", image: "slike/ducatiMonster.avif" }
        ];
  
        const motorList = document.getElementById("motor-list");
        if (!motorList) return;
  
        motorList.innerHTML = "";
  
        motors.forEach(motor => {
            const card = document.createElement("div");
            card.className = "motor-card";
            card.innerHTML = `
                <img src="${motor.image}" alt="${motor.name}">
                <h3>${motor.name}</h3>
                <p>${motor.price}</p>
                <button>Dodaj u košaricu</button>
            `;
            const btn = card.querySelector("button");
            btn.addEventListener("click", () => addToCart(motor));
            motorList.appendChild(card);
        });
    }
  
    if (document.getElementById("motor-list")) {
        displayMotors();
        updateCartDisplay();
    }
  });
  