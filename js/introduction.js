document.addEventListener('DOMContentLoaded', function() {
    var modalData = [
        { img: './images/introduction/act.png',
            text: 'In the dimly lit hall of the "Twilight\'s End" tavern,' +
                ' an eclectic mix of adventurers,' +
                ' mercenaries, and curious locals gather under the glow of flickering candles.' +
                ' The air is thick with the scent of spiced ale and the murmur of hushed conversations.' +
                ' Tales of distant lands and epic quests blend with the bard\'s soft melody,' +
                ' creating an atmosphere of anticipation and camaraderie.',
        audio: './audio/introduction/audio1.mp3'},

        { img: './images/introduction/act2.png',
            text: 'Suddenly, the tavern door swings open with a creak,' +
                ' drawing all eyes to the figure silhouetted against the moonlit night.' +
                ' It\'s Old Merek, the town crier, his face etched with worry.' +
                ' With a shaky hand, he pins a parchment to the notice board—a task that seems to drain the last of his strength.' +
                ' "A monster," he whispers, his voice barely carrying over the now-silent crowd.' +
                ' "A beast terrorizing our lands, devouring livestock,' +
                ' and casting a shadow of fear over our people.',
            audio: './audio/introduction/audio2.mp3'},

        { img: './images/introduction/act3.png',
            text: 'The parchment, illuminated by a nearby candle,' +
                ' reveals a call to arms. The local lord, desperate for a solution, offers a bounty beyond imagination for the creature\'s defeat.' +
                ' It\'s not just a job; it\'s a quest that could forge legends and restore peace to the realm.',
            audio: './audio/introduction/audio3.mp3' },

        { img: './images/introduction/act4.png',
            text: 'As discussions erupt across the tavern, the focus shifts to you.' +
                ' This is your moment, the beginning of a journey that will test your mettle and determination.' +
                ' Before you lies the path of heroes, fraught with danger and glory.',
            audio: './audio/introduction/audio4.mp3'}

    ];

    var currentIndex = 0;
    var modal = document.getElementById('introModal');
    var modalImage = document.getElementById('modalImage');
    var modalText = document.getElementById('modalText');
    var nextButton = document.getElementById('nextButton');
    var modalAudio = document.getElementById('modalAudio'); // Get the audio element


    // Function to update modal content
    function updateModalContent(index) {
        modalImage.src = modalData[index].img;
        modalText.textContent = modalData[index].text;
        modalAudio.src = modalData[index].audio;
        modalAudio.play();
    }

    // Show first content
    updateModalContent(currentIndex);
    modal.style.display = 'block';

    // Event listener for the next button
    nextButton.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex < modalData.length) {
            modalAudio.pause(); // Stop current audio
            modalAudio.currentTime = 0; // Reset audio playback to the start
            updateModalContent(currentIndex);
        } else {
            modal.style.display = 'none'; // Hide modal when done
            modalAudio.pause(); // Ensure audio is stopped when modal is closed
            modalAudio.currentTime = 0;

            // Redirect to "CharacterSelection.html"
            window.location.href = 'CharacterSelection.html';

        }
    });
});
