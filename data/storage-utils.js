const USER = 'USER';

export function getLs() {
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
   
}

export function setLs(dataObject) {
    localStorage.setItem(USER, JSON.stringify(dataObject));
}