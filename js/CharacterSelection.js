const characterData = [
    {
        name: "Tribal Warrior",
        img: "./images/characters/tribewarrior.png",
        details: "Tribal Warrior description..."
    },
    {
        name: "Necromancer",
        img: "./images/characters/necro.png",
        details: "Necromancer description..."
    },
    // ... add objects for each character
];

document.addEventListener('DOMContentLoaded', function() {
    const characters = document.querySelectorAll('.character');
    const characterDetails = document.querySelector('.character-details');
    const closeDetailsButton = document.querySelector('.close-details');


    characters.forEach((character, index) => {
        // Set the data-index attribute to associate the character div with the character data
        character.setAttribute('data-index', index);

        character.addEventListener('click', function() {
            const charIndex = this.getAttribute('data-index');
            const charData = characterData[charIndex];

            // Update the character-details div with the new content
            characterDetails.innerHTML = `
                <img src="${charData.img}" alt="${charData.name}" class="character-image">
                <h3>${charData.name}</h3>
                <p>${charData.details}</p>
            `;

            // Add the fade-in effect
            characterDetails.classList.remove('fade-in');
            // Trigger reflow for animation
            void characterDetails.offsetWidth;
            characterDetails.classList.add('fade-in','active');
        });
    });
    closeDetailsButton.addEventListener('click', function() {
        characterDetails.classList.remove('active'); // Hide the details
}); });
