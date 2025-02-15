/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const discoveryCountByYear = {};

  // Populate the frequency object
  data.asteroids.forEach(asteroid => {
    const discoveryYear = asteroid.discoveryYear;
    if (discoveryCountByYear[discoveryYear]) {
      discoveryCountByYear[discoveryYear]++;
    } else {
      discoveryCountByYear[discoveryYear] = 1;
    }
  });

  // Initialize variables to track the year with the maximum discoveries
  let maxCount = 0;
  let greatestYear = undefined;

  // Iterate through the frequency object to find the year with the maximum discoveries
  for (const year in discoveryCountByYear) {
    if (discoveryCountByYear[year] > maxCount) {
      maxCount = discoveryCountByYear[year];
      greatestYear = parseInt(year);
    }
  }

  return greatestYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
