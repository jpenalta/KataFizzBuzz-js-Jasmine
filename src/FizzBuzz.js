function FizzBuzz(){};

FizzBuzz.prototype.calcula = 
	function(entrada) {
		if((entrada % 3) == 0){
			return "Fizz";
		}
		return entrada;
	};
