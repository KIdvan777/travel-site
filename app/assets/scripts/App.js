import $ from 'jquery';
import Person from './modules/Person';

class Adult extends Person{
	payTaxes(){
		console.log(this.name + ' ' + "now owes $0 in taxes");
	}

}


var john = new Person('ivan', 'red');

john.greet();

var jane = new Adult('jane', 'orange');

jane.greet();
jane.payTaxes();
