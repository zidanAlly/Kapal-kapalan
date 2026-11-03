const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const context = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing webcam:", err);
        alert("Could not access webcam.");
    });

snap.addEventListener('click', () => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
});