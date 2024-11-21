document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        // Uncheck the checkbox to close the menu
        document.getElementById('check').checked = false;
    });
});


document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_c0u20ps', 'template_gailcws', this)
        .then(function () {
            alert('Message sent successfully!');
        }, function (error) {
            alert('Failed to send message. Error: ' + error);
        });
});