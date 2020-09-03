function even_odd_summation(arr){  //decalre a function that takes an array as argument 
	var even = 0; //declare a variable for even and set to zero
	var odd = 0;  //declare a variable for odd numbers and set to zero
	arr.forEach(function(item){ //loop through the items in the array
		if(item % 2 !== 0 || item === 1){  //check for 'oddiness'
			odd += item  //successively sum up the matching items and save it to the variable
		}else{          //Get called if no 'oddiness'
			even += item //successive sum up the matching items and save it to variable
		}	
	})
	return [even , odd]   //return an array of the respective sums.
	console.log([even, odd])  //display my result for testing/debugging
}

