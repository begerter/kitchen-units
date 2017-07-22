const mass = {
  oz: {
    name: {
      singular: 'ounce',
      plural: 'ounces',
      abbrev: 'oz'
    },
    conversions: {
      lb: 0.0625
    }
  },
  lb: {
    name: {
      singular: 'pound',
      plural: 'pounds',
      abbrev: 'lb',
    },
    conversions: {
      g: 453.592
    }
  },
  kg: {
    name: {
      singular: 'kilogram',
      plural: 'kilograms',
      abbrev: 'kg'
    },
    conversions: {
      g: 1000
    }
  },
  g: {
    name: {
      singular: 'gram',
      plural: 'grams',
      abbrev: 'g'
    },
    conversions: {
      lb: 0.00220462
    }
  },
  mg: {
    name: {
      singular: 'milligram',
      plural: 'milligrams',
      abbrev: 'mg'
    },
    conversions: {
      g: 0.001
    }
  }
};

module.exports = {
  mass
};
