let dungeons = {
  'Yornewood': {
    name: 'Yornewood',
    type: 'passage',
    entrance: 'Yorne',
    backgroundImage: './forest_background.jpg',
    entrances: {
      'Yorne' : 'The Bramble',
      'Jerne' : 'Heart of the Forest',
    },
    rooms: {
      'The Bramble': {
        fields: [
          'ItemApple1', 'ItemBread1', 'ItemPotion1', 'EventTrapPitfall1_1'
        ],
        exits: [
          null, 
          'Heart of the Forest',
        ]
      },
      'Heart of the Forest': {
        fields: [
          'ItemBread1', 'ItemPotion1'
        ],
        exits: [
          null, 
          'The Bramble',
        ]
      },
      'The Thinning of Trees': {
        fields: {
          
        }
      }
    },
    exits: ['Yorne'],
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