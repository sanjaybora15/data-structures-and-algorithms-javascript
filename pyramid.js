/* print a Pyramid  

input = 10
output :
    *
   ***
  *****
 *******
*********
*/

function pyramid(n){
    middle = Math.floor((2*n-1)/2)
    console.log(middle)
    for( let row =0 ; row <=n-1; row++){
        result = ""
        for( let column = 0; column <= 2*n-1; column++){
            
            if(middle - row <= column && middle + row >= column){
                result += '*'
            }else{
                result += ' '
            }
        }
        console.log(result)
    }
}
pyramid(5)
