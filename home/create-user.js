export function createUser(formData){
    const newUser = {
        gold: 0,
        hp: 35,
        name: formData.get('name'),
        race: formData.get('race'),
        completed: {}
    }; 
    return newUser;
}