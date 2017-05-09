function Calculator(ScaleOfNotation){

	this.num1 = '';
	this.num2 = '';

	function ConvertToInt(){

		num1 = parseInt(num1);
		num2 = parseInt(num2);
	}

	function Summa(){

		if (ScaleOfNotation == 10) {

			ConvertToInt();
			console.log(num1+num2);
		}

		else {

			ConvertToInt();
			var sum = num1 + num2;
			console.log(sum.toString(2));
		}

		
	}

	Summa();	
}

var Dec = new Calculator(10);
var Bin = new Calculator(2);