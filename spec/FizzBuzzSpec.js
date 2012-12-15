describe("Kata Fizz Buzz",function(){
	var fizzBuzz;

	beforeEach(function(){
		fizzBuzz = new FizzBuzz();
	});
	
	it("1 devuelve 1",
		function(){
			var resultado = fizzBuzz.calcula(1);
			expect(resultado).toBe(1);
		}
	);

	it("2 devuelve 2",
		function(){
			var resultado = fizzBuzz.calcula(2);
			expect(resultado).toBe(2);
		}
	);

	it("3 devuelve Fizz",
		function(){
			var resultado = fizzBuzz.calcula(3);
			expect(resultado).toBe("Fizz");
		}
	);

	it("5 devuelve Buzz",
		function(){
			var resultado = fizzBuzz.calcula(5);
			expect(resultado).toBe("Buzz");
		}
	);
	it("5 devuelve Buzz",
		function(){
			var resultado = fizzBuzz.calcula(5);
			expect(resultado).toBe("Buzz");
		}
	);

	it("15 devuelve FizzBuzz",
		function(){
			var resultado = fizzBuzz.calcula(15);
			expect(resultado).toBe("FizzBuzz");
		}
	);

});
