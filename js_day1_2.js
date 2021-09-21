//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 + n2;
 }

 var sub = function(n1,n2){
    return n1 - n2
  } 

  var cb = function(n1,n2, callback)
  {
    // Simple if statement to insure that we can only input numbers and the callback needs to be a function in the parameters to this function.
    if (typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function") 
    {
    // if the conditions of our "if" statement IS met this string will be returned.
    return "Result from the two numbers: "+n1+" and "+n2+" = "+callback(n1,n2);
    }
    // if the conditions of our "if" statement IS NOT met this string will be returned.
    return "One of the provided parameters was not a number or the callback was not a function"
  }

  var mul = function (n1 , n2) {
      return n1 / n2
  }

  console.log( add(1,2) )     // This just ouputed the number 3 as expected. The add function takes the two parameters and add then togheter.

  console.log( add )          // It just printed the function, 'add' needs two parameters so it can add them togheter in order two work.

  console.log( add(1,2,3) ) ; // This also just prints the number 3. My guess is that the function only expects two parameters and choose too ignore the third parameter.
                              // Beacuese by adding a fourth parameter it will not make any diffrence to the output, so this confirms my theory.

  console.log( add(1) );      // This output 'NaN' which stands for 'Not-A-Number'.
                              // The reason js does not recognise that parameter as a number is beacuse we are missing a second parameter, and it is currently left as undefined which is not a number.     

  console.log( cb(3,3,add) ); // This outputs '3 and 3 = 6', which is exactly what we would expect as the 'cb' function is called with 3 parameters, two numbers and the a 'callback', which in this case calls our 'add' function.

  console.log( cb(4,3,sub) ); // This outputs '4 and 3 = 1', in this case the 'sub' function is called in our 'callback' parameter and we subtract the numbers from eachother, besides that it is exactly the same as the statement above.

  console.log(cb(3,3,add));   // Original Code: 'console.log(cb(3,3,add()));' The problem with that line is that in 'JS' we do not add parentheses in the end of a function call inside another function, that will simply not work and give us a syntax error.

  console.log(cb(3,"hh",add));// This is actually kind of werid, i did not expect this one too work as "hh" parameter should've given us the "NaN" error, but the add function ignores this and just add the string at the end of the first number parameter.
  
  console.log(cb(10, 2, mul)) // testing our simple function that takes two parameters and divide them.

// My array of strings.
const myArray = ["bob", "hans", "mia", "sine"]

// Here we create an array, give it some names, then we filter that array based on the lenght of the strings and make a new array of those that pass the filtering.
const newArray = myArray.filter( (x) => x.length <= 3)
console.log(newArray)

// y.charAt(0).toUpperCase() means we take the first letter of the string at every index, and then we uppercase it.
// then we say + y.slice(1), which cuts away the first letter and prints out the rest of the string at every index.
// This in combination gives us an array where the first letter of every index is uppercased and we still get the whole string printed out.
const uppercaseArray = myArray.map( (y) => y.charAt(0).toUpperCase() + y.slice(1))
console.log(uppercaseArray)


//my array of names
const htmlArr = ["Lars", "Peter", "Jan", "Ian"]

//just html start and close tags, declaring them outside the scope of the for loop.
let htmlstart = '<ul><li>'
let htmlclose = '</li></ul>'

//Our loop that takes our array and converts it into an html 'ul' list.
for (var i = 0; i < htmlArr.length; i++) 
{
    var place = htmlArr[i];
    let html = htmlstart + htmlArr.join("</li><li>") + htmlclose
    console.log(html)
}
