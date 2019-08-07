// program to check the string is palindrome or not

//using for loop

function palindrome(str){
	var reversed = "";
	for( var i = str.length-1;i>=0;i--){
	reversed += str[i];
  }
	return (reversed === str)? ` ${str} is palindrome` : ` ${str} is not palindrome`;
}
console.log(palindrome("321"));

//using split reverse and join
function palindrome(str){
	let rev =  str.split("").reverse().join("");
	return (rev === str)? ` ${str} is palindrome` : ` ${str} is not palindrome`;
	}
	console.log(palindrome("MADAM"))
