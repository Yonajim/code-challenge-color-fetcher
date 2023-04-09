# Code Challenge

This repository contains a solution to a code challenge used to assess developers' knowledge and skills. The task involved fetching color information based on user input and displaying the fetched colors with specified properties. The application supports running both synchronously and asynchronously.

## Requirements

The original requirements of the code challenge include:

1. It must be possible to run the program and get back the colors green, blue, and red in HEX format.
2. It must be possible to define the colors using their names like red, blue, and green.
3. It must be possible to define the order the colors are returned.

OBS: The API mock must be used and it must not be changed.

Additional requirements:

1. The program must support the colors white and black.
2. The program must be able to return the RGB values.
3. It must be possible to run the program asynchronously, getting all the colors at the same time.
4. It must be possible to run the program synchronously, getting one color at a time.

## Usage

### Input Arguments

The application accepts three input arguments:

1. Colors: A list of color names separated by commas (e.g., "red,green,blue"). Color names are not case-sensitive.
2. IsAsynchronous: A boolean value indicating whether the program should run asynchronously (true) or synchronously (false).
3. Color Properties (optional): A list of desired color properties separated by commas (e.g., "hex,name,rgb"). If no properties are provided, all properties are returned by default.

### Running the Application

To run the application, open a terminal (on macOS or Linux) or a command prompt (on Windows), navigate to the repository's root directory, and execute the following commands:

#### macOS / Linux
```bash
# Asynchronously
node src/index.js "black,green,white,blue,red" true

# Synchronously
node src/index.js "red,black,blue,white,blue" false

# With specified properties
node src/index.js "black,green,white,blue,red" true "hex,name,rgb"
```
#### Windows
```bash
# Asynchronously
node .\src\index.js "black,green,white,blue,red" true

# Synchronously
node .\src\index.js "red,black,blue,white,blue" false

# With specified properties
node .\src\index.js "black,green,white,blue,red" true "hex,name,rgb"
```

### Output
The application will display the fetched color information with the desired properties, the execution time, and whether it was run synchronously or asynchronously.

## Code Structure

The code is organized into the following directories and files:

1. `src/`: Contains the main source files.
   - `index.js`: The main entry point of the application.
   - `classes.js`: Contains color classes and a factory for creating color objects.
   - `apiMock/`: Contains a mock API for fetching color information.
     - `index.js`: The mock API implementation.
   - `utils/`: Contains utility functions.
     - `colorUtils.js`: Functions for filtering color objects based on desired properties.
     - `configUtils.js`: Functions for parsing command-line arguments and validating configuration parameters.
     - `colorService.js`: Functions for fetching color information synchronously and asynchronously.

## Contribution

Feel free to open issues or submit pull requests if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the [MIT License](LICENSE).
