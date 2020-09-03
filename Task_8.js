function threes(num){      
    var range = [];				//declare an array
    for (let i = 0; i <= num; i++) {   //get the numbers that exist betwwen 0 and the provided number inclusive, and push all into an array
        range.push(i);
    }
    var newArray = range.filter((number) => {  //filter through the array and pick those that meets the following conditions
    	stringifyNum = number.toString();     //Strigify each number 
    	if(stringifyNum.includes('3')){   		//check if the string contains a 3 and return true. 
    		return true;
    	}else{
    		return false;					//else, return false
    	}
 });
    //Only numbers that resolve to true are contained in the new array

 	return `{count: ${newArray.length}, numbers: ${newArray}}`       //get the length for count. Get the new array for numbers.

}