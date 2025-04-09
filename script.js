// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // prilagodi putanjama ako treba
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")], // <--- dodaj ovo
  }
  
  
  
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    if (username && password) {
        // Preusmjeravanje na rent stranicu nakon prijave
        window.location.href = "rent.html";
    } else {
        loginMessage.textContent = "Molimo unesite korisničko ime i lozinku!";
    }
}

//kartice

function displayMotors() {
    const motors = [
        {
            name: "Yamaha MT-07",
            price: "25 eur/dan",
            image: "slike/yamaha07.jpg"
        },
        {
            name: "Honda CB500F",
            price: "20 eur/dan",
            image: "slike/hondaMotor.jpg"//njuškalo
        },
        {
            name: "BMW R1250GS",
            price: "40 eur/dan",
            image: "slike/bmwMotor.webp" //adv pulse
        },
        {
            name: "Ducati Monster",
            price: "30 eur/dan",
            image: "slike/ducatiMonster.avif" //bike dekho
        }
    ];

    const motorList = document.getElementById("motor-list");
    motorList.innerHTML = "";

    motors.forEach(motor => {
        const card = document.createElement("div");
        card.className = "motor-card";
        card.innerHTML = `
            <img src="${motor.image}" alt="${motor.name}">
            <h3>${motor.name}</h3>
            <p>${motor.price}</p>
        `;
        motorList.appendChild(card);
    });
}

// Ako smo na stranici rent.html, pokreni prikaz kartica
if (window.location.pathname.includes("rent.html")) {
    displayMotors();
}




//Košarica:
let cart = [];

function updateCartDisplay() {
    const cartDisplay = document.getElementById("cart-display");
    cartDisplay.textContent = `🛒 Košarica: ${cart.length}`;
}

function addToCart(motor) {
    cart.push(motor);
    updateCartDisplay();
}



function displayMotors() {
    const motors = [
        {
            name: "Yamaha MT-07",
            price: "250 kn/dan",
            image: "slike/yamaha07.jpg"
        },
        {
            name: "Honda CB500F",
            price: "200 kn/dan",
            image: "slike/hondaMotor.jpg"
        },
        {
            name: "BMW R1250GS",
            price: "400 kn/dan",
            image: "slike/bmwMotor.webp"
        },
        {
            name: "Ducati Monster",
            price: "300 kn/dan",
            image: "slike/ducatiMonster.avif"
        }
    ];

    const motorList = document.getElementById("motor-list");
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

// Pokreni prikaz ako smo na rent.html
if (window.location.pathname.includes("rent.html")) {
    displayMotors();
    updateCartDisplay();
}


//Košarica:
let cart = [];

function updateCartDisplay() {
    const cartDisplay = document.getElementById("cart-display");
    cartDisplay.textContent = `🛒 Košarica: ${cart.length}`;
}

function addToCart(motor) {
    cart.push(motor);
    updateCartDisplay();
}

function displayMotors() {
    const motors = [
        {
            name: "Yamaha MT-07",
            price: "250 kn/dan",
            image: "slike/yamaha07.jpg"
        },
        {
            name: "Honda CB500F",
            price: "200 kn/dan",
            image: "slike/hondaMotor.jpg"
        },
        {
            name: "BMW R1250GS",
            price: "400 kn/dan",
            image: "slike/bmwMotor.webp"
        },
        {
            name: "Ducati Monster",
            price: "300 kn/dan",
            image: "slike/ducatiMonster.avif"
        }
    ];

    const motorList = document.getElementById("motor-list");
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

// Pokreni prikaz ako smo na rent.html
if (window.location.pathname.includes("rent.html")) {
    displayMotors();
    updateCartDisplay();
}




/*O NAMA*/

