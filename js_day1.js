//our two seperate arrays one of boys and one of girls
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//Making a new variable called "all" and taking our boys array and adding the girls array too it.
const all = boys.concat(girls)

//different ways of displaying the array (Seperators).
//console.log(all.join())
//console.log(all.join('-'))

//Adding the two names to the 'end' of our array.
all.push("Lone", "Gitte")

//Adding the two names too the 'front' of the array.
all.unshift("Hans", "Kurt")

//console.log(all)

//remove the 'last' index of our array corresponding to the given parameter.
all.pop("Gitte")

//remove the 'first' index of our array corresponding to the given parameter.
all.shift("Hans")

//console.log(all)

//These two lines remove the name that is placed on index [3] in our array.
//And when it has done that once the whole array get shifted and then we remove, 
//the next name which now has taken the same spot in our array as the previous name.
all.splice(3,1)
all.splice(3,1)

//console.log(all)

//Just reverses the order of our array, so that the last index becommes the first and second last becomes second first and so on.
all.reverse()

//console.log(all)

//Sorts the array according to some value given to the letters? Couldn't really understand this system.
//But capitalized letters have an higher value then their non capitalized counterpart.
all.sort()

//console.log(all)

//It now ignores capitalized letters and sorts the names alphabetically. NYI
all.sort(
    function(a, b){
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
    }
);

//console.log(all)

//Function that capitalize all our names in the array. NYI
const mapCap = all.map(x => x.charAt(0).toUpperCase() + x.slice(1))

//console.log(mapCap)

//Function that is used 'filter'/'search' for names containing a specific letter. NYI
function filterItems(arr, query) {
    return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }
  
//console.log(filterItems(all, 'l'))
//console.log(filterItems(all, 'i'))