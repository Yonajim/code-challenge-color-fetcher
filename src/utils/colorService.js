// The purpose of this module is to provide functions for fetching color information.
// It offers two functions: one for fetching colors asynchronously and another for fetching them synchronously.

const { ColorFactory } = require('../classes');
const colorFactory = new ColorFactory();

/**
 * Fetches color information for a list of color names asynchronously.
 * If there is an error while fetching a color, it logs the error and continues with the remaining colors.
 *
 * @param {Array<string>} colorsInDesiredOrder - An array of color names in the desired order.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of color information objects.
 */
async function getColorsAsynchronously(colorsInDesiredOrder) {
    try {
        const colorPromises = colorsInDesiredOrder.map(colorName => colorFactory.createColor(colorName).fetchColor());
        return await Promise.all(colorPromises);
    } catch (error) {
        console.error(`Error while fetching colors asynchronously: ${error.message}`);
        return [];
    }
}

/**
 * Fetches color information for a list of color names synchronously.
 * If there is an error while fetching a color, it logs the error and continues with the remaining colors.
 *
 * @param {Array<string>} colorsInDesiredOrder - An array of color names in the desired order.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of color information objects.
 */
async function getColorsSynchronously(colorsInDesiredOrder) {
    const colors = [];

    for (const colorName of colorsInDesiredOrder) {
        try {
            const newColor = await colorFactory.createColor(colorName).fetchColor();
            colors.push(newColor)
        } catch (error) {
            console.error(`Error while fetching color "${colorName}" synchronously: ${error.message}`);
        }
    }

    return colors;
}

module.exports = { getColorsAsynchronously,getColorsSynchronously };