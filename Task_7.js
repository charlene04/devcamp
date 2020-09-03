//Returns the standard deviation
function standardDeviation(arr){
	len = arr.length;				//get the length of the array
	SODS = SumDevSquared(arr);			//get the value of the SumDevSquared helper function
	return Math.sqrt(SODS/len);				//return the standard deviation
}




//Returns the Mean
function Mean(arr){
	var N = arr.length;			//get the array length
	var S = 0						//declare a summation variable
	arr.forEach(function(num){			//Each number in the array gets added to the summation variable
		S += num
	})

	return S/N 						//retun the mean
}


//Returns the Sum of Deviation squared
function SumDevSquared(arr){
	 var mean = Mean(arr); 					//get the value of the mean
	 var squareArray = []; 						//decalre an array
	 var sum = 0;								//decalre a summation variable
	 arr.forEach(function(num){ 				//for each number in the array, subtract the mean and square the result, then push the final result into the array
	 	squareArray.push((num - mean)*(num - mean)) 
	 }) 

	 squareArray.forEach(function(squaredNum){			//Add all the numbers in the array.
	 	sum += squaredNum
	 })
	 return sum;						//return the total sum

}