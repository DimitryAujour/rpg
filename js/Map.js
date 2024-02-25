document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the selected characters from local storage
    const selectedCharacters = JSON.parse(localStorage.getItem('selectedCharacters'));

    // Assuming you have a container to display the characters
    const charactersContainer = document.querySelector('.characters-container');

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

    selectedCharacters.forEach(characterName => {
        // Find the full character data from characterData by name
        const character = characterData.find(char => char.name === characterName);

        if(character) {
            // Create elements to display the character
            const characterElement = document.createElement('div');
            characterElement.classList.add('character');

            characterElement.innerHTML = `
                <img src="${character.img}" alt="${character.name}">
                <h3>${character.name}</h3>
            `;

            // Append the new elements to the container
            charactersContainer.appendChild(characterElement);
        }
    });
});
