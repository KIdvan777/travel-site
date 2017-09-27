class Person{
	constructor(name , color){
		this.name = name;
		this.color = color;
	}

	greet (){
		console.log(this.name + ' ' + this.color);
	}
}

export default Person;
