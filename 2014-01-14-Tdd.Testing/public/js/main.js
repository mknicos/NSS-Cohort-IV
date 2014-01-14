//main.js//
//


function add(a,b){
  return a + b;
}

function sum(numbers){
  var ans = 0;
  for(var i = 0; i < numbers.length; i++) {
    ans += numbers[i];
  }
    return ans;
}


function countEvens(myArray){
  var count = 0;
  for (var i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0)
      count ++;
  }
  return count;
}

function makeEvenStringsUppercase(myArray){
  var newArray = [];
  for (var i = 0; i < myArray.length; i++)
    if (myArray[i].length % 2 === 0)
       newArray[i] = myArray[i].toUpperCase;
    else
      newArray[i] = myArray[i];

  return newArray;
}

function sumLengthOfStrings(string){
    newArray= string.split(' ').join('');
    return newArray.length;
}









