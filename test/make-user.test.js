import { createUser } from '../home/create-user.js';
const test = QUnit.test;

test('test if creatUser is making a new user', (expect) => {
    const expected = {
        name: 'Tala',
        id: 'mermaid',
        hp: 35,
        jewels: 0,
        completed: {}

    };

    const userInfo = new FormData();
    userInfo.set('name', 'Tala');
    userInfo.set('magic', 'mermaid');

    const actual = createUser(userInfo);

   
    expect.deepEqual(actual, expected);
});
