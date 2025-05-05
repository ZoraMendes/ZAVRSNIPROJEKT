
function displayMotors() {
    const motors = [
        {
            name: "Yamaha",
            image: "slike/yamaha07.jpg",
            link:"vrste/yamaha.html"
        },
        {
            name: "Honda",
            image: "slike/hondaMotor.jpg",//njuškalo
            link:"vrste/honda.html"
        },
        {
            name: "BMW",
            image: "slike/bmwMotor.webp", //adv pulse
            link:"vrste/bmw.html"
        },
        {
            name: "Ducati",
            image: "slike/ducatiMonster.avif", //bike dekho
            link:"vrste/ducati.html"
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
            <a href="${motor.link}"> 
            <button class="button">Vidi sve</button>
            </a>
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










/*postavi-motor*/
const motorForm = document.getElementById('motorForm');
        const motorNameInput = document.getElementById('motorName');
        const motorMileageInput = document.getElementById('motorMileage');
        const motorYearInput = document.getElementById('motorYear');
        const motorImageInput = document.getElementById('motorImage');
        const motorDescriptionInput = document.getElementById('motorDescription');
        const preview = document.getElementById('preview');
        const previewImg = document.getElementById('previewImg');
        const previewOpis = document.getElementById('previewOpis');
        const motorGallery = document.getElementById('motorGallery');
      
       
        motorImageInput.addEventListener('change', function (e) {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
              previewImg.src = e.target.result;
              previewOpis.textContent = motorDescriptionInput.value;
              preview.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
          }
        });
      
        motorDescriptionInput.addEventListener('input', function () {
          if (motorImageInput.files.length > 0) {
            previewOpis.textContent = motorDescriptionInput.value;
          }
        });
      
        motorForm.addEventListener('submit', function (e) {
          e.preventDefault();
      
         
          const motorName = motorNameInput.value;
          const motorMileage = motorMileageInput.value;
          const motorYear = motorYearInput.value;
          const motorImage = motorImageInput.files[0];
          const motorDescription = motorDescriptionInput.value;
      
          
          if (motorName && motorMileage && motorYear && motorImage && motorDescription) {
            
            const motorCard = document.createElement('div');
            motorCard.classList.add('motor-card', 'bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'text-center');
            
            
            const motorImg = document.createElement('img');
            const reader = new FileReader();
            reader.onload = function (e) {
              motorImg.src = e.target.result;
              motorImg.classList.add('w-full', 'h-auto', 'rounded-lg');
              motorCard.appendChild(motorImg);
            };
            reader.readAsDataURL(motorImage);
      
            
            const motorNameElement = document.createElement('h3');
            motorNameElement.classList.add('mt-2', 'font-semibold');
            motorNameElement.textContent = motorName;
            motorCard.appendChild(motorNameElement);
      
            const motorInfo = document.createElement('p');
            motorInfo.classList.add('text-sm', 'text-gray-500');
            motorInfo.textContent = `Kilometraža: ${motorMileage} km, Godište: ${motorYear}`;
            motorCard.appendChild(motorInfo);
      
            const motorDesc = document.createElement('p');
            motorDesc.classList.add('mt-4', 'text-sm', 'text-gray-500');
            motorDesc.textContent = motorDescription;
            motorCard.appendChild(motorDesc);
      
           
            motorGallery.appendChild(motorCard);
      
            
            motorForm.reset();
            preview.classList.add('hidden');
          } else {
            alert('Molimo unesite sve podatke!');
          }
        });



        localStorage.setItem("kosarica", JSON.stringify(kosarica));
        function odjava() {
          // Briše košaricu
          localStorage.removeItem("kosarica");
      
          // Ako želiš, možeš obrisati i druge korisničke podatke
          localStorage.removeItem("korisnik");
      
          // Preusmjeri korisnika natrag na početnu/prijavu
          window.location.href = "prijava.html";
      }
      


