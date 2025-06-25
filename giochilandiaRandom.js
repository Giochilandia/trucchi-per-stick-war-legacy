/**
 * GiochilandiaRandom - Controlled Random Number Utility
 * Author: Giochilandia
 * License: Custom
 */

const GiochilandiaRandom = {
    /**
     * Generates a random integer between min and max (inclusive).
     * @param {number} min - Minimum value.
     * @param {number} max - Maximum value.
     * @returns {number} - Random integer.
     */
    getInt(min, max) {
        if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
            console.error('[GiochilandiaRandom] Invalid parameters.');
            return NaN;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Simulates a dice roll with the given number of sides.
     * @param {number} sides - Number of sides on the dice.
     * @returns {number} - Result of the dice roll.
     */
    rollDice(sides = 6) {
        if (typeof sides !== 'number' || sides < 1) {
            console.error('[GiochilandiaRandom] Invalid number of sides.');
            return NaN;
        }
        return GiochilandiaRandom.getInt(1, sides);
    }
};

// Example usage:
// console.log(GiochilandiaRandom.getInt(5, 15)); // Random int between 5 and 15
// console.log(GiochilandiaRandom.rollDice(20));  // Simulates a 20-sided dice roll

module.exports = GiochilandiaRandom;
