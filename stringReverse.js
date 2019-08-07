// Program to reverse a string

//using built in reverse method

function reverse(str){
	return str.split("").reverse().join("");
	}
	console.log(reverse("This is reversed string"))

//using for loop

function revrese(str){
	var reversed = "";
	for( var i = str.length-1;i>=0;i--){
	reversed += str[i];
  }
	return reversed;
}
console.log(reverse("This is reversed string using for loop"));

// Using Recursion substr() and charAt()

function reverse(str){
	/* if(str ==="")
	return "";
	else
	return reverse(str.substr(1)) + str.charAt(0); */

	//Ternary Operator
	return (str === '' )? '': reverse(str.substr(1))+ str.charAt(0);
	}

console.log(reverse("This is reversed string using Recursion"));
