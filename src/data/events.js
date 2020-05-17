let events = {
  ItemApple1: {
    title: 'An Apple',
    image: 'apple',
    text: 'You come across an apple on the ground!',
    buttons: [
      {
        name: 'Take',
        effects: [
          ['GetItem', 'Apple'],
          ['EndEvent']
        ]
      },
      {
        name: 'Discard',
        effects: [
          ['EndEvent']
        ]
      },
    ]
  },
  ItemPotion1: {
    title: 'A Potion',
    image: 'Potion',
    text: 'You come across an Potion on the ground!',
    buttons: [
      {
        name: 'Take',
        effects: [
          ['GetItem', 'Potion'],
          ['EndEvent']
        ]
      },
      {
        name: 'Discard',
        effects: [
          ['EndEvent']
        ]
      },
    ]
  },
  ItemBread1: {
    title: 'A Bread',
    image: 'Bread',
    text: 'You come across a loaf of bread on the ground!',
    buttons: [
      {
        name: 'Take',
        effects: [
          ['GetItem', 'Bread'],
          ['EndEvent']
        ]
      },
      {
        name: 'Discard',
        effects: [
          ['EndEvent']
        ]
      },
    ]
  },
  ExitForest: {
    title: 'An Exit!',
    image: 'Exit',
    text: 'The forest clears up, revealing an opening in the trees and a weathered road leading out of the forest.',
    buttons: [
      {
        name: 'Continue',
        effects: [
          ['LeaveDungeon'],
        ]
      },
    ]
  },
  EventTrapPitfall1_1: {
    title: 'ITS A TRAP!',
    image: 'kobold',
    text: 'As you take a step forward, you get this eerie feeling before your foot touches the ground. Do you throw yourself sideways (uses 5 energy) at the last moment, or continue the step?',
    buttons: [
      {
        name: 'Dodge',
        effects: [
          ['ContinueEvent', 'EventTrapPitfall1_2'],
        ]
      },
      {
        name: 'Step forward',
        effects: [
          ['ContinueEvent', 'EventTrapPitfall1_3'],
        ]
      },
    ]
  },
  EventTrapPitfall1_2: {
    title: 'ITS A TRAP!',
    image: 'kobold',
    text: 'Using 5 points of stamina, you throw yourself sideways. After picking yourself up, you poke at the ground you would have stepped with a stick. The earth gives way and reveals a massive hole, at least 5 feet deep. Good thing you avoided that!',
    buttons: [
      {
        name: 'Continue',
        effects: [
          ['DecreaseHunger', 5],
          ['EndEvent']
        ]
      },
    ]
  },
  EventTrapPitfall1_3: {
    title: 'ITS A TRAP!',
    image: 'kobold',
    text: 'Ignoring your instincts, you step forward anyway. What kind of idiot would take such a drastic measure for a stupid suspicion, anyway? As you step forward, the ground opens up, revealing a massive pitfall trap. After you hit the bottom, taking 10 damage, you wonder who would make such a thing in the middle of a place like this.',
    buttons: [
      {
        name: 'Continue',
        effects: [
          ['DecreaseHP', 10],
          ['EndEvent']
        ]
      },
    ]
  },
}

export default events;