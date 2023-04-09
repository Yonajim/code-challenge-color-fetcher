/**
 * Filters color objects based on the desired properties.
 * If no desired properties are provided, it returns the original color objects.
 *
 * @param {Array} colors - An array of color objects.
 * @param {Array} desiredProperties - An array of desired color property names.
 * @returns {Array} An array of color objects with filtered properties.
 */
// The purpose of this function is to filter the color objects based on the desired properties.
// The function iterates through each color object and compares its properties with the desired properties.
// If a match is found, the property is added to the result object.
function getColorProperties(colors, desiredProperties) {
    if (desiredProperties.length === 0) {
        return colors;
    }

    return colors.map(color => {
        const result = {};

        for (const desiredProperty of desiredProperties) {
            for (const colorProperty in color) {
                if(colorProperty.toLowerCase() === desiredProperty.toLowerCase()) {
                    result[colorProperty] = color[colorProperty];
                    break;
                }
            }
        }

        return result;
    });
}

module.exports = { getColorProperties };