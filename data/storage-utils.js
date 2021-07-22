const USER = 'USER';

export function getLs() {
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
   
}

export function setLs(dataObject) {
    localStorage.setItem(USER, JSON.stringify(dataObject));
}

export function loadProfile() {
    const name = document.getElementById('name');
    const hp = document.getElementById('hp');
    const jewels = document.getElementById('jewels');
    const user = getLs();

    name.textContent = user.name;
    hp.textContent = user.hp;
    jewels.textContent = user.jewels;
}