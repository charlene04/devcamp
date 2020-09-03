function return_prime(arr){ //declares a function that receives an array
	var newArray = arr.filter((number) => {  //run a filter method on the array while assigning the reult to a variable
  for (var i = 2; i <= number; i++) {			//iterating through numbers that are greater than 2
    if (number % i === 0 && number !== i) return false;   //Checking if the number is divisible without remainder and also confirming that the divisor is not equal to the number itself. If the condition returns to true, then the Number is not a prime number.
  }
  return true;  //else, it is a prime number.
});
	return newArray; //returns the filtered array.
}



//The filter method selects items that returns "true", and discards those that returns "false"

