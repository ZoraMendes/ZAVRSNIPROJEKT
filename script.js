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

function displayMotors() {
    const motors = [
        { name: "Yamaha MT-07", price: "250 kn/dan" },
        { name: "Honda CB500F", price: "200 kn/dan" },
        { name: "BMW R1250GS", price: "400 kn/dan" },
        { name: "Ducati Monster", price: "300 kn/dan" }
    ];

    const motorList = document.getElementById("motor-list");
    motorList.innerHTML = "";

    motors.forEach((motor) => {
        const div = document.createElement("div");
        div.classList.add("motor-item");
        div.textContent = `${motor.name} - ${motor.price}`;
        motorList.appendChild(div);
    });
}

// Prikaz motora na rent.html
if (window.location.pathname.endsWith("rent.html")) {
    displayMotors();
}


/*O NAMA*/
c
