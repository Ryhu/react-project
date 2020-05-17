let items = {
  'Apple': {
    name: 'Apple',
    type: 'consumable',
    image: 'apple',
    flavor: 'a ripe, juicy apple',
    effectDescription: 'heals 5 HP, 5 Hunger',
    HPUp: 5,
    HungerUp: 5,
    gold: 1,
  },
  'Potion': {
    name: 'Potion',
    type: 'consumable',
    image: 'potion',
    flavor: 'a potion made of red herbs',
    effectDescription: 'heals 50 HP',
    HPUp: 50,
    gold: 10,
  },
  'Bread': {
    name: 'Bread',
    type: 'consumable',
    image: 'bread',
    flavor: 'made of bread.',
    effectDescription: 'heals 10 HP, 20 Hunger',
    HPUp: 10,
    HungerUp: 20,
    gold: 3,
  },
  'Rock': {
    name: 'Rock',
    type: 'crafting',
    image: 'rock',
    flavor: 'kinda hard.',
    gold: 1,
  },
}

export default items;