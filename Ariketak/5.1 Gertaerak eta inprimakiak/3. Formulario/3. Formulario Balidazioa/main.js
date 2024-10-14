function reg(){
    const phone = document.getElementById('phone').value;
    const errorMessage = document.getElementById('error');
    errorMessage.textContent = '';

    const phoneRegex = /^6\d{8}$|^7\d{8}$|^9\d{8}$/;

    if (!phoneRegex.test(phone)) {
        errorMessage.textContent = 'Telefonoak zenbakiak bakarrik izan behar ditu.';
        event.preventDefault();
    }
}