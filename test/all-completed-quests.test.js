import { allCompletedQuests } from '../map/all-completed-quests.js';

const test = QUnit.test;

test('should return true if user has completed all quests', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        completed: {
            witch: true,
            mermaid: true, 
            genie: true
        }
    };
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = allCompletedQuests(user);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return false if user has not completed all quests', expect => {
    const user = {
        completed: {
            genie: true
        }
    };
    const expected = false;
    const actual = allCompletedQuests(user);
    expect.equal(actual, expected);
});