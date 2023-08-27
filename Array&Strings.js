//ARRAY:
//an array could be used to store the individual scores of each player

let marks =[22,14,24,29,21,15]
let subjects=['Marathi','Hindi','English',"..........."]
//console.log(marks)
//console.log(subjects)

//Arrays are generally described as "list-like objects"; 
//they are basically single objects that contain multiple values stored in a list
//Useful for any Programmer

//Types of array

//1D array
let arr = [1,2,3,4]
let fruits = ['Mango','Apple','Pienapple','Orange'] //1D arrays
//for accessing values
//console.log(fruits[2]) // index no 

//loop thruough
for(let i = 0; i<fruits.length; i++){
   // console.log(fruits[i]); // return invoke only when it_is_in function
}



//Multi-Dimensional array
//Multi-dimensional arrays are commonly used to store tables of data or matrices
let matrix = [
    [1,  2,  3], // index 0 whole set [1,2,3] in that index 0:1 value ,1:2,2:3
    [4,  5,  6], // index 1
    [7,  8,  9], // index 2
      [10, 11, 12]// index 3
  ];

  //console.log(matrix[0][1])

// loop

for(let i=0; i<matrix.length;i++){
    for(let j=0; j<matrix[i].length; j++){
        //console.log(matrix[i][j])
    }
}


//Creating array

//1) Constuctor
let newArr = new Array('akshya','ajay','vaishnavi','shivani');

//2) Array literals - Most used

let literals = ['akshay','....','....']
//console.log(literals[1])

//Modify Array Elements

newArr[3]= 'Mugale';
//console.log(newArr)



//array methods
let myArray = ["apple", "banana", "orange"];
//1) push()-insert from last
let neww = myArray.push('berry') // console this will show no. of elements
//or
myArray.push('banana')
console.log(myArray)

//2) pop()- remove from last
myArray.pop()
console.log(myArray)

//3) unshift() - add from start
myArray.unshift('pack');
console.log(myArray)

//4) shift() - remove from start
myArray.shift()
console.log(myArray)

//5) sort() - arrange a-z and 1-9
myArray.sort()
console.log(myArray)

//6) slice() -select from index..to..index This method is commonly used to make a copy of a portion of an array
let slice=myArray.slice(0,2) //index 0- apple..... index 2- berry will not print
console.log(slice) 

//7) splice() - (index no, how many) -add/Remove/Modify elements in array -original will not modify
myArray.splice(1,1,'grapes') //  -[apple,banana,berry,orange]- if how many-2 it'll delete 2 items
console.log(myArray)

//8) concat() - join two or more arrays
let numArr = [1,2,3,4]
let concatArr= numArr.concat(myArray)
console.log(concatArr)

//9) join() - Array to string join - original will not modify
let joinArr = myArray.join(',')
let joinArr2 = numArr.join(',')
console.log(joinArr)
console.log(joinArr2)

//10) reverse() - This method reverses the order of elements in an array
numArr.reverse();
console.log(numArr)

//11) fiter() - It is commonly used to filter elements from an array based on a condition.

let fileterE = numArr.filter(function(elements){
    return elements %2 === 0  // if no devided by 2 return 0 then true so print that no's

})
console.log(fileterE.reverse())

//12) map() - This method creates a new array with the results of calling 
//  a provided function on every element in the calling array.  It is commonly used to transform the elements of an array
//console.log(numArr)
let mapArr = numArr.map(num=> num*2);
console.log(mapArr)

//13) reduce(): This method applies a function against an accumulator
//    and each element in the array (from left to right) to reduce it to a single value.
// curr- currentValue , acc-accumulator - our input
let sum = numArr.reduce((acc,curr)=> acc+curr); //numArr[1,2,3,4]=10  
console.log(sum);

//14) includes() - It is commonly used to check if an array contains a specific element
let includecheck=myArray.includes('grapes');
console.log(includecheck);

//15) flat() -  It is commonly used to flatten an array that contains nested arrays
// depth of 1D, 2D,...

let multiDarr= [1,2,3,[4,5,[6,7]]];
let flattendArr = multiDarr.flat(2) // how much depth you want to.
console.log(flattendArr) 








// Strings
//A string is a data structure used to represent a sequence of characters. 
//It is often used to represent text in computer programs


//Concatenation: Concatenation is the process of joining two or more strings together.
// In JavaScript, you can concatenate strings using the + operator

var a = 'china'
var b = 'gate'
var result = a+b // Add space- a+" "+b
console.log(result)
console.log(result.length) // string lenght
console.log(result[5])// index five string

//SUBSTRING()-You can extract a substring from a string using the substring() method
console.log(result.substring(0,5)) // (start,end)
console.log(result.substring(5))

//String Search
var result2 = a+" "+b
console.log(result2)
console.log(result2.search('gate'))

//String Replace 
console.log(result.replace('china','india')) //india gate

//Working Methods
//indexOf()

let ak = 'Hello, World!' // !- 12 
let kk = "!"

function indexOf(str,substr){
    return str.indexOf(substr);
}

console.log(indexOf(ak,kk))

//remove spaces

function spaceR(a){
    let newStr = ""
    for(let i=0; i<a.length; i++){
        if(a[i] !== " "){
       newStr += a[i]
    }
  }
  return newStr;
}

let a1 = 'Akshay mugale'
let newStr = spaceR(a1)
console.log(newStr)