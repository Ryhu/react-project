import events from './events'

let fields = {
  'ItemApple1': {
    name: 'Apple',
    image: 'apple',
    flavor: 'a ripe, juicy apple',
    event: events.ItemApple1,
  },
  'ItemPotion1': {
    name: 'Potion',
    image: 'potion',
    flavor: 'a Potion on the ground',
    event: events.ItemPotion1,
  },
  'ItemBread1': {
    name: 'Bread',
    image: 'bread',
    flavor: 'a Bread on the ground',
    event: events.ItemBread1,
  },
  'EventTrapPitfall1_1': {
    name: 'Suspicious grass',
    image: 'kobold',
    flavor: 'somethings not quite right here...',
    event: events.EventTrapPitfall1_1,
  },
  'ExitForest': {
    name: 'An Exit',
    image: 'exit',
    flavor: 'A way out!',
    event: events.ExitForest,
  }
}; 

export default fields;