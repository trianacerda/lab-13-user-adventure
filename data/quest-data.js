
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
            you scurry away and as you think you're in the clear you trip over your shoelace.......BOOM you hit the ground and the witches snatch you up! Down 50 HP and NO jewels!.
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
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        jewels: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 jewels.
        `,
        hp: 0,
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
    prerequisites: ['dragon', 'monsters'],
    image: 'genie.jpeg',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 jewels pieces!',
        hp: 0,
        jewels: 40
    }, {
        id: 'jewelsen',
        description: 'A jewelsen Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        jewels: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        jewels: 0
    }]
};

const quests = [
    witch, 
    mermaid,
    genie,
];

export default quests;