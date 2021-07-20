import quests from '../data/quest-data.js';

const questLists = document.getElementById('quest-lists');

for (let quest of quests) {
    const questAnchor = `../quest/?questId=${quest.id}`;
    const questLinks = document.createElement('a');
    const pTag = document.createElement('p');
    questLinks.href = questAnchor;
    questLinks.textContent = quest.title;
    questLists.appendChild(questLinks);
    questLinks.appendChild(pTag);
}