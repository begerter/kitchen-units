const volume = {
  tsp: {
    name: {
      singular: 'teaspoon',
      plural: 'teaspoons',
      abbrev: 'tsp'
    },
    conversions: {
      cup: 0.0208333
    }
  },
  Tbsp: {
    name: {
      singular: 'tablespoon',
      plural: 'tablespoons',
      abbrev: 'Tbsp'
    },
    conversions: {
      cup: 0.0625
    }
  },
  cup: {
    name: {
      singular: 'cup',
      plural: 'cups',
      abbrev: null
    },
    conversions: {
      l: 0.236588
    }
  },
  'fl oz': {
    name: {
      singular: 'fluid ounce',
      plural: 'fluid ounces',
      abbrev: 'fl oz'
    },
    conversions: {
      cup: 0.125
    }
  },
  pnt: {
    name: {
      singular: 'pint',
      plural: 'pints',
      abbrev: 'pnt'
    },
    conversions: {
      cup: 2
    }
  },
  qt: {
    name: {
      singular: 'quart',
      plural: 'quarts',
      abbrev: 'qt'
    },
    conversions: {
      cup: 4
    }
  },
  gal: {
    name: {
      singular: 'gallon',
      plural: 'gallons',
      abbrev: 'gal'
    },
    conversions: {
      cup: 16
    }
  },
  ml: {
    name: {
      singular: 'milliliter',
      plural: 'milliliters',
      aliases: ['millilitre', 'millilitres'],
      abbrev: 'ml'
    },
    conversions: {
      l: 0.001
    }
  },
  l: {
    name: {
      singular: 'liter',
      plural: 'liters',
      aliases: ['litre', 'litres'],
      abbrev: 'l'
    },
    conversions: {
      cup: 4.22675
    }
  }
};

module.exports = {
  volume
};
