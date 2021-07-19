export function getLs() {
    const userString = localStorage.getItem('USER') || '[]';
    const newUser = JSON.parse(userString);
    return newUser;
}

export function setLs(arr) {
    localStorage.setItem('RESULTS', JSON.stringify(arr));
}