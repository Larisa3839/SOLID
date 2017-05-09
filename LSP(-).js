function Calculator(){

	this.num1 = '';
	this.num2 = '';

	function ConvertToInt(){

		num1 = parseInt(num1);
		num2 = parseInt(num2);
	}

	function Summa(){

		ConvertToInt();
		console.log(num1+num2);
	}

	Summa();	
}

var Dec = new Calculator();
var Bin = new Calculator();