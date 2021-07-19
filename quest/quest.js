import quests from '../data/quest-data.js';
import findById from '../data/findById.js';

const searchParams = new URLSearchParams(window.location.search);

const questTitle = document.getElementById('title');
const questImg = document.getElementById('img');
const description = document.getElementById('description');
const choice = document.getElementById('choice');

const quest = findById(quests, searchParams.get('questId'));

questTitle.textContent = quest.title; 
description.textContent = quest.description;
questImg.src = quest.image;

for(let pick of quest.choice){
    const label = document.createElement('label');
    const radio = 

}