const { getColor } = require('./apiMock');

class Color {
	constructor(name) {
		this.name = name;
	}

	async fetchColor() {
		return getColor(this.name);
	}
}

class Green extends Color {
	constructor() {
		super('green');
	}
}

class Blue extends Color {
	constructor() {
		super('blue');
	}
}

class Red extends Color {
	constructor() {
		super('red');
	}
}

class White extends Color {
	constructor() {
		super('white');
	}
}

class Black extends Color {
	constructor() {
		super('black');
	}
}

class ColorFactory {
	createColor(colorName) {
		switch (colorName.toLowerCase()) {
			case 'green':
				return new Green();
			case 'blue':
				return new Blue();
			case 'red':
				return new Red();
			case 'white':
				return new White();
			case 'black':
				return new Black();
			default:
				throw new Error('Unknown color');
		}
	}
}

module.exports = { Green, Blue, Red, White, Black, ColorFactory };