function palindrome(str) {
    var reverseString = "";
    for (var i = str.length - 1; i >= 0; i--) {  //iterate in reverse and add the letters to form a new string.
        reverseString += str[i];
    }

    if(reverseString === str){    //check if the new string is same as the original string
    	return "Yes";
    }else{
    	return "No";
    }
    
}