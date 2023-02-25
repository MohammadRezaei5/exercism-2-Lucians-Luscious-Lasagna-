const PREPARATION_MINUTES_PER_LAYER = 2;

const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

// (40 - 35) = 5
// console.log(remainingMinutesInOven(35));

function preparationTimeInMinutes(numberOfLayers) {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
}

// (2 * 9) = 18
// console.log(preparationTimeInMinutes(9));

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

// (5 * 2) + 20 = 30
// console.log(totalTimeInMinutes(5, 20));
