import quests from '../data/quest-data.js';
import { getLs, loadProfile } from '../data/storage-utils.js';
import { allCompletedQuests } from '../map/all-completed-quests.js';

const gameUser = getLs();
loadProfile();

if (gameUser.hp <= 0 || allCompletedQuests(gameUser)){
    window.location.replace('../results');
}

const questLists = document.getElementById('quest-lists');

for (let quest of quests) {
    if (gameUser.completed[quest.id]){

        createQuestSpan(quest);
    } else {

        createQuestLink(quest);
    }

}

function createQuestSpan(quest){
    const span = document.createElement('span');
    span.innerText = `${quest.title} COMPLETED!!`;
    questLists.appendChild(span);
}

function createQuestLink(quest){
    const questAnchor = `../quest/?questId=${quest.id}`;
    const questLinks = document.createElement('a');
    questLinks.href = questAnchor;
    questLinks.textContent = quest.title;
    questLists.appendChild(questLinks);
}