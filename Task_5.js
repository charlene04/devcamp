var person = {     										//instantiate an object
  input: "Mr John Smith",       						//input
  output : function() {         						//output method
    return this.input.split(" ").join("%20");  			//splits the string by spaces, then joins them using the specified string("%20").
  }
};




//Call the method on the person object using: person.output()

The regular fxn would be:
================================



function newWord(sentence){
	return sentence.split(" ").join("%20");
}