document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const statusMessage = document.getElementById('statusMessage');
    statusMessage.innerText = "Enviando...";

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Configura EmailJS
    emailjs.send("service_mhr8p5m", "template_ajyxqdc", {
        from_name: name,
        from_email: email,
        message: message,
    }, "-mDW_NUtjpNDM899v")
    .then(function (response) {
        statusMessage.innerText = "Mensaje enviado exitosamente!";
        document.getElementById('contactForm').reset(); // Limpiar formulario
    }, function (error) {
        statusMessage.innerText = "Error al enviar el mensaje. Por favor, inténtelo de nuevo.";
    });
});