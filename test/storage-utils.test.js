import { getLs, setLs } from '../data/storage-utils.js';

const test = QUnit.test;

test('setLS should put expected into LS with user info', (expect) => {
    const expected = {
        name: 'Tala',
        id: 'mermaid',
        hp: 5,
        jewel: 35,
        completed: {}

    };
    
    setLs(expected);
    const actual = getLs();

    expect.deepEqual(actual, expected);
});