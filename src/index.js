const { getColorProperties } = require('./utils/colorUtils');
const { getConfigParameters } = require('./utils/configUtils');
const { getColorsAsynchronously,getColorsSynchronously } = require('./utils/colorService')

/**
 * Fetches color information based on the provided configuration parameters.
 * Displays the fetched color information with the desired properties,
 * and logs the execution time and whether it was run synchronously or asynchronously.
 */
async function colors() {
	let startOfExecution = Date.now();

	const config = getConfigParameters();
	if (!config) { return; }

	const {colorsInDesiredOrder, desiredProperties, isAsync} = config;

	let fetchedColors;

	if (isAsync) {
		fetchedColors = await getColorsAsynchronously(colorsInDesiredOrder);
	} else {
		fetchedColors = await getColorsSynchronously(colorsInDesiredOrder);
	}

	const colorsWithDesiredProperties = getColorProperties(fetchedColors, desiredProperties);

	console.log(colorsWithDesiredProperties);
	console.log('Time taken to execute call: ' + (Date.now() - startOfExecution) + ' milliseconds ' + '| isAsynchronous: ' + isAsync);
}

colors();

/*
# Running the application:

Arguments:
1. Colors: A comma-separated list of color names (not case-sensitive).
2. isAsynchronous: A boolean indicating whether to fetch colors asynchronously or synchronously.
3. (Optional) Color properties: A comma-separated list of desired color properties. If omitted, all properties are returned by default.

Example:
node src/index.js "black,green,white,blue,red" true "Hex,name,rgb"

# macOS:
node ~/code-challenge/src/index.js "black,green,white,blue,red" true "Hex,name,rgb"
node ~/code-challenge/src/index.js "red,black,blue,white,blue" false "Hex,name,rgb"

# Windows:
node .\src\index.js "black,green,white,blue,red" true "Hex,name,rgb"
node .\src\index.js "red,black,blue,white,blue" false "Hex,name,rgb"
*/
