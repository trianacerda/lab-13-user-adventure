import quests from '../data/quest-data.js';
import { getLs } from '../data/storage-utils.js';
import { allCompletedQuests } from '../map/all-completed-quests.js';

const gameUser = getLs();

if (gameUser.hp <= 0 || allCompletedQuests(gameUser)){
    window.location.search('../results');
}

const questLists = document.getElementById('quest-lists');

function creatQuestSpan(quest);

function creatQuestLink(quest);


for (let quest of quests) {
    const questAnchor = `../quest/?questId=${quest.id}`;
    const questLinks = document.createElement('a');
    const pTag = document.createElement('p');
    questLinks.href = questAnchor;
    questLinks.textContent = quest.title;
    questLists.appendChild(questLinks);
    questLinks.appendChild(pTag);
}