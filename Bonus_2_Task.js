function replaceConsonants(str){
	var vowel = ['a','e','i','o','u'];   //array of vowels
	var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];  //array of consonants
	var newString = '';                                                                      //new string variable
	for(var i = 0; i < str.length; i++){                              //iterate through the provided string
		if(vowel.includes(str[i]) || str[i] === " "){           //if a letter is a vowel or space, concatenate it to newstring variable
			newString += str[i];
		}else if(consonants.includes(str[i])){              //if the letter is in the consonant array.....
			var index = consonants.indexOf(str[i]);        //get the index of the letter in consonant array...
			if(index === consonants.length - 1){           //check if the index refers to the last letter in the array i.e 'z'....
				newString += consonants[0];                 //if it does, concantenate the first letter in the consonant array to the new string variable....
			}else{											//if it's not the last letter in the consonant array....
				newString += consonants[index + 1];      ///concantenate the next letter in the array to the new string variable
			}
		}else{
			return "String must be lowercase letters and/or spaces";     //if any other character asides letters and spaces exists, return this message
		}
	}
	return newString;												//return new string.
}