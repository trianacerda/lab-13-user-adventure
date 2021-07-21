import { getLs } from '../data/storage-utils.js';

const gameUser = getLs();
const storyDisplay = document.getElementById('story-display');

const hp = gameUser.hp;
const jewels = gameUser.jewels;

let story = `${gameUser.name} you have completed your adventure as a ${gameUser.id}. 
You collected ${jewels} jewels and had ${hp} hp.`;

storyDisplay.textContent = story;

if (hp > 0){
    st
}