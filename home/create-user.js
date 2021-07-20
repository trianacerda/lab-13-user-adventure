export function createUser(formData){
    const newUser = {
        jewels: 0,
        hp: 35,
        name: formData.get('name'),
        id : formData.get('magic'),
        completed: {}
    }; 
    return newUser;
}