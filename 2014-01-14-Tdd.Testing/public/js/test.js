//test.js//

/*
test( "name of test", function() {
      deepEqual(actual, expected, "my test message");
});
*/


test( "add", function() {
      deepEqual(add(2, 3), 5, "adding 2 and 3");
      deepEqual(add(2, -5), -3, "adding 2 and -5");
      deepEqual(add(1, 0), 1, "adding 1 and 0");
      deepEqual(add(1, 4), 5, "adding 1 and 4");
});

test("sum", function(){
  deepEqual(sum([11,3,8]), 22, "summing 11, 3, 8");
});

test("countEvens", function(){
  deepEqual(countEvens([3,8,9,10,11,12]), 3, "should be 3 even values");
});

//if length of string is even, make uppercase//
test("makeEvenStringsUppercase", function(){
  var actual = ['hello', 'cohort', 'iv', 'welcome', 'to', 'tdd'];
  var expected = ['hello', 'COHORT', 'IV', 'welcome', 'TO', 'tdd'];
  deepEqual(makeEvenStringsUppercase(actual), expected, "should be 3 uppercase values");
});

//want to know the length of the sentence without the spaces//


test("sumLengthOfStrings", function(){
  var strings = "this is a very long string" ;
  deepEqual(sumLengthOfStrings(strings), 21, "String should be 21 characters (spaces ignored)");
});
