// Inicializa EmailJS primero
var script = document.createElement('script');
script.src = "https://cdn.emailjs.com/dist/email.min.js";
document.head.appendChild(script);
script.onload = function() {
    emailjs.init("tu_user_id"); // Reemplaza "tu_user_id" con tu User ID de EmailJS
};

// Luego, puedes incluir el resto de tu código
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu2').style.display = document.querySelector('.menu2').style.display === 'block' ? 'none' : 'block';
});

function IrACyberpunk() {
    window.open("https://madnaxss.github.io/CyberpunkForm.github.io/formulari2.html", "_blank");
}

function IrAJocNadal() {
    window.open("https://madnaxss.github.io/JuegoNavidad.github.io/JocNadal.html", "_blank");
}

function IrAAkinator() {
    window.open("https://madnaxss.github.io/Akinator.github.io/Akinator2.html", "_blank");
}

function IrATresEnRaya() {
    window.open("https://madnaxss.github.io/TresEnRaya.github.io/Tres_En_Raya.html", "_blank");
}

function IrAInstagram()
{
    window.open("https://www.instagram.com/_.albertoruiz._/", "_blank");
}

function IrATwitter()
{
    window.open("https://x.com/madnuxiss?t=MSjsNPpflm0_Eofp6Vg1FA&s=09", "_blank");
}

function MensajeForm() {

    var nombre = document.querySelector('input[name="nombre"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var phone = document.querySelector('input[name="phone"]').value;
    var subject = document.querySelector('input[name="subject"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    if (nombre && email && phone && subject && message) {
        alert("Gracias por tu mensaje");
    
    } else {
        alert("Por favor, completa todos los campos del formulario.");
    }
}
