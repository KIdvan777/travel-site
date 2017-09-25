// john ={
// 	name: "john",
// 	color: "green",
// 	greet: function(){
// 		console.log(this.name + this.color);
// 	}
// }

// john.greet();

function Person(name,color) {
	this.name = name;
	this.color = color;
	this.greet = function () {
		console.log(this.name + this.color);
	}
}

john = new Person('john', 'red');

john.greet();