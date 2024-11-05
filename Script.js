document.getElementById('yes-button').addEventListener('click', function() {
    showResponse("Yeyy!! Ayo kita buat lagi lembaran baru cerita kitaa! 💕");
});

document.getElementById('no-button').addEventListener('click', function() {
    showResponse("Aduh, gapapa kok. yang penting kita tetep deket kayak biasa yaaa, jangan canggung yaaa!!! 😸😸");
});

function showResponse(message) {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('responseText').textContent = message;
    document.getElementById('responseMessage').classList.remove('hidden');

    // Tampilkan tombol WhatsApp dengan teks yang sesuai
    const whatsappButton = document.getElementById('whatsappButton');
    whatsappButton.classList.remove('hidden');
    whatsappButton.onclick = function() {
        sendToWhatsApp(message);
    };
}

function sendToWhatsApp(message) {
    const phoneNumber = "6285879678332"; // Nomor WhatsApp tujuan
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}