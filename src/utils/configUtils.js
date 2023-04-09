const validColorNames = ['black', 'white', 'blue', 'green', 'red'];
const validColorProperties = ['hex', 'rgb', 'name'];

/**
 * Parses command line arguments to get configuration parameters.
 * Validates the provided colors and properties.
 *
 * @returns {Object|null} An object containing the configuration parameters or null if invalid arguments are provided.
 */
// The purpose of this function is to parse the command line arguments and validate the provided colors and properties.
// It checks if the provided colors and properties are in the validColorNames and validColorProperties arrays.
// If the validation fails, it returns an error message with the valid options.
function getConfigParameters() {
    let colorsInDesiredOrder;
    let isAsync;
    let desiredProperties;

    try {
        colorsInDesiredOrder = process.argv[2] ? process.argv[2].split(',') : [];
        isAsync = JSON.parse(process.argv[3]);
        desiredProperties = process.argv[4] ? process.argv[4].split(',') : [];
    } catch (error) {
        console.error(`Invalid command line arguments!
            Please provide color(s) separated by a comma, isAsync bool, and desired color properties separated by a comma.
            Do keep in mind that desired properties are optional. If omitted, all properties are returned by default.
            Example: "red,white,green" true "hex,name"`);
        return null;
    }

    for (const colorName of colorsInDesiredOrder) {
        if (!validColorNames.includes(colorName.toLowerCase())) {
            console.error(`Invalid color: ${colorName}\nValid colors: ${validColorNames}`);
            return null;
        }
    }

    for (const property of desiredProperties) {
        if (!validColorProperties.includes(property.toLowerCase())) {
            console.error(`Invalid color property: ${property}\nValid color properties: ${validColorProperties}`);
            return null;
        }
    }

    return {colorsInDesiredOrder, desiredProperties, isAsync};
}

module.exports = { getConfigParameters };