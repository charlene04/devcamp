function maxChar(str) {
  var mapping = {};
  var arr = [];
  var max = 0;
  var maxChar = '';

  // create character mapping
  for (let char of str) {     //iterate through the string.
    if (mapping[char]) {    //if the character exists in the mapper, increase the count.
      mapping[char]++;       
    } else {              //if it does not exist, add it and set the count to 1.
      mapping[char] = 1;
    }
  }

  // find the most commonly used character
  for (let char in mapping) {       //iterate through the mapper
    if (mapping[char] > max) {      //if the count of a character is greater than `max value`, set max to the value of count.
      max = mapping[char];
      maxChar = char;               //declare the character with the count as the most occured character
    }
  }
    arr.push(maxChar);     //push the character in the array.

  for (let char in mapping) {           //iterate through the mapper again
    if (mapping[char] === max && !arr.includes(char)) {     //check if any character shares same max value, and is not a member of the array yet.
      arr.push(char);         //push the character into the array
    }
  }
    if(arr.length === 1){    //check is there is only one character. If yes, print just the character.
      return arr[0]
    }else{                //if no, print the array instead.
      return arr;
    }
}