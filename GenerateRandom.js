/**Assignment 3
 * maythu456@gmail.com
 * Returns a random number between min (inclusive) and max (inclusive)
 */


 function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }
  
   
  console.log(  
    between(0, 1000)
  )
  
