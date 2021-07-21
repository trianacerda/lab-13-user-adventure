
const witch = {
    id: 'witch',
    title: 'A Coven of Witches',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'witch.jpeg',
    description: `
        you have messed around with a little too much magic and have stumbled upon the witches quarters. these witches are nothing to mess with....make a choice...
    `,
    choices: [{
        id: 'sell',
        description: 'sell them something they may want',
        result: `
            you weren't a convincing enough!! And now they turned you into a toad! That cost you MINUS 15 HP and NO jewels gained!
        `,
        hp: -15,
        jewels: 0
    }, {
        id: 'spell',
        description: 'cast a spell that you just learned',
        result: `
            you cast a spell that you were not convinced it would work.....BUT IT DID! You froze the witches for a short time and got away with their spell book! 
            PLUS 30 HP and 50 jewels!
        `,
        hp: +30,
        jewels: 50
    }, {
        id: 'run',
        description: 'just act like you forgot something and say, "hey what is THAT" and RUN!!!!!',
        result: `
            you scurry away and as you think you're in the clear you trip over your shoelace.......
            BOOM you hit the ground and the witches snatch you up! Down 50 HP and NO jewels!.
        `,
        hp: -50,
        jewels: 0
    }]
};

const mermaid = {
    id: 'mermaid',
    title: 'A Mermaids Reef',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'mermaid.jpeg',
    description: `
        you took a deep breath and jumped into the depths of the ocean. 
        as you're swimming you find yourself in a reef but not just any reef......this ones occupied. 
    `,
    choices: [{
        id: 'swim',
        description: 'get your arms flapping and swim the heck out of THURRRRRR',
        result: `
            you start swimming as fast as you can and you get caught in a net! you are trapped and feel doomed until a swordfish accidently 
            swims into your net and cuts you up an opening before swimming away. PHEW! This cost your MINUS 5 HP but you gained 20 jewels!
        `,
        hp: -5,
        jewels: 20
    }, {
        id: 'claim',
        description: 'claim the house and make it yours!',
        result: `
            you attempted to take the house and you were EVICTED...fast. MINUS 45 and no jewels for you!
        `,
        hp: -45,
        jewels: 0
    }, {
        id: 'housewarming',
        description: 'leave a house warming gift of thingamabobs',
        result: `
            your gift was accepted with happiness! You earned 40 HP and 90 JEWELS!
        `,
        hp: 40,
        jewels: 90
    }]
};

const genie = {
    id: 'genie',
    title: 'A Genies Bottle',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'genie.jpeg',
    description: `
        here is a genie in a bottle! what will you do?
    `,
    choices: [{
        id: 'rub',
        description: 'rub the lamp!',
        result: 'You grab 40 jewels pieces and 5 HP!',
        hp: 5,
        jewels: 40
    }, {
        id: 'walk',
        description: 'walk away- it is NOT yours!',
        result: 'you missed out on a chance for a wish or 3! MINUS 50 HP and NO jewels for you',
        hp: -50,
        jewels: 0
    }, {
        id: 'pass',
        description: 'pick up the lamp and give it to someone else',
        result: 'your kindness was rewarded 35 HP and 40 JEWELS!',
        hp: 35,
        jewels: 40
    }]
};

const quests = [
    witch, 
    mermaid,
    genie,
];

export default quests;

