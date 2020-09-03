function passwordValidator(pass){
	if (/^\d+$/.test(pass)) {  //tests if the entire string is digits
   		return "1 - Weak";
	}
	if (/^[a-zA-Z]+$/.test(pass)) { //tests if the entire string is letters
   		return "0 - Very Weak";
	}
	if(/^[0-9a-zA-Z]+$/.test(pass)){ //tests if the entire string is mixture of letters and digits
		return "2 - Strong";
	}
	if(/[0-9a-zA-Z]/.test(pass) && /[^a-zA-Z0-9]/.test(pass)){  //tests if the entire string comprises of digits and letters, AND also contains Non-digits and Non-letters
		return "3 - Very Strong";
	}
}