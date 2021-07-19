import { setLs } from '../data/storage-utils.js';
import { createUser } from './create-user.js';

const homeForm = document.getElementById('home-form');

homeForm.addEventListener('submit', e => {
    e.preventDefault(); 
    const formData = new FormData(homeForm); 
    const newUser = createUser(formData);
    setLs(newUser);
    window.location.replace('./map');

});



