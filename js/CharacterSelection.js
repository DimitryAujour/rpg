const characterData = [
    {
        name: "Tribal Warrior",
        img: "./images/characters/tribewarrior.png",
        details: "A valiant protector of ancient lands, this warrior channels the spirit of ancestors to guard and lead in battle."
    },
    {
        name: "Necromancer",
        img: "./images/characters/necro.png",
        details: " Shrouded in mystery, the Necromancer wields the forbidden arts to summon and command the undead."
    },
    {
        name: "Samurai",
        img: "./images/characters/samurai.png",
        details: " With a heart bound by honor and a sword as sharp as their resolve, the Samurai stands as a noble defender of the realm."
    }
    ,
    {
        name: "Timescolar",
        img: "./images/characters/timescolar.png",
        details: " A sage who has unlocked the secrets of time, the Time Scholar can bend moments to their will, outsmarting any foe."
    },
    {
        name: "Dark Knight",
        img: "./images/characters/darkKnight.png",
        details: " Once a noble knight, now turned to darkness, this formidable warrior strikes fear into the hearts of those who dare to cross."
    },
    {
        name: "Shaman",
        img: "./images/characters/shaman.png",
        details: "  A bridge between the physical and spiritual worlds, the Shaman calls upon nature's forces to heal and harm in the old ways."
    }

];

const selectedCharacters = [];
document.addEventListener('DOMContentLoaded', function() {
    const characters = document.querySelectorAll('.character');
    const characterDetails = document.querySelector('.character-details');
    const closeDetailsButton = document.querySelector('.close-details');

    function updateCheckboxState() {
        // If 3 characters are selected, disable all other checkboxes
        const checkboxes = document.querySelectorAll('input[name="chosenCharacter"]');
        if (selectedCharacters.length >= 3) {
            checkboxes.forEach(cb => {
                if (!selectedCharacters.includes(cb.value)) {
                    cb.disabled = true;
                }
            });
        } else {
            // If less than 3 are selected, ensure all checkboxes are enabled
            checkboxes.forEach(cb => cb.disabled = false);
        }
    }
    function toggleStartGameButton() {
        let startButton = document.querySelector('.start-game-button');
        // Check if the button already exists
        if (selectedCharacters.length === 3 && !startButton) {
            // Create the button if it doesn't exist and exactly 3 characters are selected
            startButton = document.createElement('button');
            startButton.textContent = 'Start Game';
            startButton.classList.add('start-game-button');
            // Append it to a specific element, adjust the selector as needed
            document.querySelector('.character-details').appendChild(startButton);

            // Add event listener to the Start Game button, if needed
            startButton.addEventListener('click', function() {
                // Code to start the game or navigate to the game page
                localStorage.setItem('selectedCharacters', JSON.stringify(selectedCharacters));
                // Redirect to the game page
                window.location.href = 'Map.html';
                console.log('Starting game with:', selectedCharacters);
            });
        } else if (selectedCharacters.length !== 3 && startButton) {
            // Remove the button if it exists and the number of selected characters is not 3
            startButton.remove();
        }
    }

    characters.forEach((character, index) => {
        character.setAttribute('data-index', index);

        character.addEventListener('click', function() {
            const charIndex = this.getAttribute('data-index');
            const charData = characterData[charIndex];

            characterDetails.innerHTML = `
                <img src="${charData.img}" alt="${charData.name}" class="character-image">
                <h3>${charData.name}</h3>
                <p>${charData.details}</p>
                <form>
                <label for="chosenCharacter${index}">Choose this character</label>
                <br>
                <input type="checkbox" id="chosenCharacter${index}" name="chosenCharacter" value="${charData.name}">
                </form>
            `;

            const checkbox = document.querySelector(`#chosenCharacter${index}`);
            checkbox.checked = selectedCharacters.includes(charData.name);
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    selectedCharacters.push(charData.name);
                    if (selectedCharacters.length > 3) {
                        // Prevent more than 3 selections
                        this.checked = false;
                        selectedCharacters.pop();
                        alert("You can only select up to 3 characters.");
                    }
                } else {
                    const indexToRemove = selectedCharacters.indexOf(charData.name);
                    if (indexToRemove > -1) {
                        selectedCharacters.splice(indexToRemove, 1);
                    }
                }
                updateCheckboxState();
                toggleStartGameButton();
            });

            updateCheckboxState();

            characterDetails.classList.remove('fade-in');
            void characterDetails.offsetWidth;
            characterDetails.classList.add('fade-in', 'active');
        });
    });
    closeDetailsButton.addEventListener('click', function() {
        characterDetails.classList.remove('active'); // Hide the details
}); });
