import quests from '../data/quest-data.js';
import { findById } from '../data/findById.js';
import { setLs, getLs } from '../data/storage-utils.js';

const searchParams = new URLSearchParams(window.location.search);

const questTitle = document.getElementById('title');
const questImg = document.getElementById('quest-img');
const description = document.getElementById('description');
const choices = document.getElementById('choices');

const quest = findById(quests, searchParams.get('questId'));

questTitle.textContent = quest.title;
description.textContent = quest.description;
questImg.src = `../assets/${quest.image}`;

for (let choice of quest.choices){
    const label = document.createElement('label');
    
    const radio = document.createElement('input');
    radio.name = 'pick';
    radio.type = 'radio';
    radio.value = choice.id;

    const choiceDiv = document.createElement('div');
    choiceDiv.textContent = choice.description;

    label.append(radio, choiceDiv);

    choices.appendChild(label);

}

const pickForm = document.getElementById('pick-form');
pickForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const questForm = new FormData(pickForm);
    const choiceValue = questForm.get('pick');
    const choiceData = findById(quest.choices, choiceValue);
    const gameUser = getLs();
    gameUser.jewels += choiceData.jewels;
    gameUser.hp += choiceData.hp;
    gameUser.completed[quest.id] = true;
    setLs(gameUser);

    const mapLink = document.getElementById('map-link');
    description.textContent = choiceData.result;
    pickForm.classList.add('hidden');
    mapLink.classList.remove('hidden');

});