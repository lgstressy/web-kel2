// Popup functionality
function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(popup => popup.style.display = 'none');
    document.getElementById('overlay').style.display = 'none';
}

// Rotating text functionality
const rotatingText = document.getElementById('rotating-text');
const messages = [
    'Selamat datang di halaman kami!',
    'Kami adalah mahasiswa Program Studi Pendidikan Matematika.',
    'Semoga hari Anda menyenangkan!',
    'Kelompok 2 siap memberikan yang terbaik!'
];
let currentMessageIndex = 0;

function rotateText() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    rotatingText.textContent = messages[currentMessageIndex];
}

setInterval(rotateText, 5000); // Change message every 5 seconds
