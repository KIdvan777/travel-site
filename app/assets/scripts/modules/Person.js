function Person(name,color) {
	this.name = name;
	this.color = color;
	this.greet = function () {
		console.log(this.name + this.color);
	}
}

module.exports = Person;