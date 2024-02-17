
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('start');

    button.addEventListener('click', function() {
        var audio = document.getElementById('clickSound');
        audio.play();

        // Add fade-out class to body
        document.body.classList.add('fade-out');

        // Redirect after the fade-out animation duration
        setTimeout(function() {
            window.location.href = 'introduction.html';
        }, 2000); // Assuming the fade-out animation duration is 1s (1000ms)
    });
});