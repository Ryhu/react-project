let dungeons = {
  'Yornewood': {
    name: 'Yornewood',
    type: 'passage',
    entrance: 'Yorne',
    entranceRoom: 'The Bramble',
    exit: 'Jerne',
    exitRoom: 'The Bramble',
    backgroundImage: './forest_background.jpg',
    rooms: {
      'The Bramble': {
        fields: [
          'ItemApple1', 'ItemBread1', 'ItemPotion1', 'EventTrapPitfall1_1'
        ],
        exits: [
          { event: 'ExitForest', fieldIndex: 'centerField' },
        ]
      },
    },
  }
};

export default dungeons;

// 'Heart of the Forest': {
//   fields: {
    
//   }
// },
// 'The Thinning of Trees': {
//   fields: {
    
//   }
// }