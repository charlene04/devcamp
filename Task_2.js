function is_prime(num){ //declares a function that receives a num
	if(num === 2){				//return true is the number is 2
		return true;
	}else if(num > 1){         //if the number is greater than 1...
		for(var i =2; i < num; i++){
			if(num % i !== 0){   //divide the number by values lesser than the number. If the division has a ramainder, return true.
				return true;
			}else if(num === i*i){   //check if the number is just a squre of the divisor. If so, return false.
				return false;
			}else{
				return false;    //return false for every other scenario.
			}
		}
	}else{
		return false;    //return false if non of the above true conditions are met
	}
}


