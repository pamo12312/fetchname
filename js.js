fetch('https://swapi.dev/api/people/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Data se nepodařilo načíst');
        }
        return response.json();
    })
    .then(data => {
        const characters = data.results.map(character => character.name);
        const characterList = document.getElementById('characterList');
        characters.forEach(character => {
            const listItem = document.createElement('li');
            listItem.textContent = character;
            characterList.appendChild(listItem);
        });
        console.log(data.results)
    })
    .catch(error => {
        console.error('Chyba:', error);
    });
