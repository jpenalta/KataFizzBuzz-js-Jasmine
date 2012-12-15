function FizzBuzz(){};

multiploDeTres = function(entrada){
	return entrada % 3 == 0;
}

multiploDeCinco = function(entrada){
	return entrada % 5 == 0;
}

FizzBuzz.prototype.calcula = 
	function(entrada) {
		if(multiploDeTres(entrada) && multiploDeCinco(entrada)){
			return "FizzBuzz";
		} else if(multiploDeTres(entrada)){
			return "Fizz";
		}else if (multiploDeCinco(entrada)){
			return "Buzz";
		}
		return entrada;
	};
