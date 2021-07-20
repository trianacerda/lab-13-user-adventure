import quests from '../data/quest-data.js';
import { findById } from '../data/findById.js';

const searchParams = new URLSearchParams(window.location.search);

const questTitle = document.getElementById('title');
const questImg = document.getElementById('quest-img');
const description = document.getElementById('description');
const choices = document.getElementById('choice');

const quest = findById(quests, searchParams.get('questId'));

questTitle.textContent = quest.title; 
description.textContent = quest.description;
questImg.src = `../assets/${quest.image}`;

for (let choice of quest.choice){
    const label = document.createElement('label');
    
    const radio = document.createElement('input');
    radio.name = 'pick';
    radio.type = 'radio';
    radio.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;

    label.append(radio, span);

    choices.append(label);

}