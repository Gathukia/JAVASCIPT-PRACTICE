console.log("hello")
console.log("hello world")
/*alert ("yoo")
alert ("i am just coding")*/

//variables
var b = "smoothie"; 
console.log(b);
var some = 45;
console.log(some);
//variables
var a;//declare a variable
var b= 2;//declare a variable 'b' and then assign a value 2
console.log(a);
a = 7;
var c = "i am a";
a = a + 1;
console.log(a);
c = c + "string";
console.log(c);
var sum = 10 + 10;
console.log(sum);
var difference = 2022-2003;
var d = "EDWIN your turning ";
var e = " years now";
var h = d + difference + e;
console.log(h);
var quotient = 8 / 5;
console.log(quotient);
var z = 9
z++;//increment sign ++
console.log(z);
z--//decrement sign
console.log(z);
var remainder = 25 % 11;//& checks what remains after you divide a no by anotherone
console.log(remainder);
var x = 4;
x /= 2;
console.log(x);
var myFirstName = "EDWIN";
var mySecondName = "Gathukia";
var myString = "i am a \" double quoted \"string" 
console.log(myString);
var mySTR = "first line\n\t\second line\nthird line"
console.log(mySTR); 
var a = 'i am EDWIN' + 'i am an upcoming developer \n\t\tADIOS'
console.log(a);
var myStr = 'this is first sentence.'
myStr += 'this is the second sentence'
console.log(myStr);
var j ='worthwhile';
var g ='learning to code is '
g+=j
console.log(g);
firstNameLength =g.length
console.log(firstNameLength);
firstLetter =myFirstName[0];
console.log(firstLetter);
lastLetter = g[g.length-1]
console.log(lastLetter);
function worldBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result = "";
    result += "the" + " " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store" + " " + myAdverb;
    return result;
}

console.log(worldBlanks("dog","big","run","quickly"));
console.log(worldBlanks("girl","slowly","pretty","run"));
//arrays
var ourArray = [["chicago",23]["whiteFox", 56 ]]//arrays help store multiple data in one variable
var myArray = [30,56,34,67,90,54]
var java = myArray[myArray.length-2]
console.log(java);
myArray[myArray.length-1] = 55
console.log(myArray);
var bed =[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData = bed[3][0][2]
console.log(myData);
bed .push = (myArray)
console.log(bed);
myData = bed.pop()//moves the last array int the new variable
console.log(myData);
myData = bed.shift()
console.log(myData);

//functions ,,they alow us to create reusable code
function ourReusableCode() {
    console.log("hello, world");
}

ourReusableCode();

function dennis(a,b){
    console.log(a - b);
}
dennis(2022,1996)

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}


function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal + " ";
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1(); 
fun2();

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

var sum = 3;
function addThree(num) {
    return sum += num
}
console.log(addThree(5));

var changed = 0;
function siz(num) {
    return (num + 5) / 3
}
changed = siz(4)
console.log(changed);

      //this was a lil bit tough
function bro (arr,item) {
      arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("before: " + JSON.stringify(testArr));
console.log(bro(testArr,6));
console.log("after: " + JSON.stringify(testArr));

        //boolean functions
var a = 2022
var b = 2004
var w = a - b
console.log(w);
function over18(a,b) {
if ((a-b)>= 18) {
  return 'yes, its true EDWIN,  you are an adult now!! '  
}
if ((a-b)<18) {
    return 'NO, its false EDWIN,  your still a kid'
    
}
}
console.log(over18(a,b));
function  compare(r,t) {
    if (r === t) {
     return "equal";   
    }
return "not equal";
}
console.log(over18(2022,2003));

function inequality(value) {
    if (value !== 17) {
        return "not equal"
    }
   return "equal" 
}
console.log(inequality("17"));

function testLogicalAnd(val) {
    if (val <= 50 && val >=25) {// and operator &&

        return "yes"
    }
    return "no"
}
console.log(testLogicalAnd(37));

function test(val) {
 if (val <= 10 ||val >20 ) { // logical or operator ||
     return "outside"
 }
 
 return "inside"   
}
console.log(test(19));

//else statements

function just(item) {
    var result = "";
    if (item < 10 ) {
        result = "less than 10";
}else{
    result = "more than 10"
}
return result
}

    console.log(just(45));

    function rose(val) {
        var gun = "";
        if (val > 10) {
            gun = "greater than 10"
        }else if (val < 2){
            gun = "less than 2"
        }else{
            gun ="between 3 and 9"
        }
        return gun
    }
    console.log(rose(7));

    function age(age) {
        if (age < 3) {
            return "child"
        }else if (age < 7 ) {
            return "kid"
        }else if (age < 15) {
            return "teen"
        }else if (age < 35) {
            return "adult"
        }else if (age < 39 || age < 70) {
            return "old"
        }else  {
            return "i am too old to program"
        } 
        
    }
    console.log(age(74));

  var score = ["hole-in-one","eagle","birdie","par","bogey","double-bogey","go-home"]  
  function golf(par,strokes) {
      if (strokes == 1) {
        return score[0]  
      }else if (strokes <= par-2) {
          return score[1]
      }else if (strokes == par-1) {
          return score[2]
      }else if (strokes == par) {
          return score[3]
      }else if (strokes ==par + 1) {
          return score[4]
      }else if (strokes == par + 2) {
          return score[5]
      }else if (strokes >= par + 3) {
          return score[6]
      }
      
  }
  console.log(golf(5,6));

  ///switch statements
 function blog(val) {
     var answer = "";
     switch(val) {
         case 1:
             answer = "alpha";
             break;
         case 2:
             answer = "beta";
             break; 
         case 3:
             answer = "gamma";
             break;
         case 4:
             answer = "beta";
             break;             
     }
     return answer
 } 
 console.log(blog(4));

 function siz(vpn) {
     var outCome = "";
     switch (vpn) {
         case "a":    
             outCome = "apple"
             break;
         case "b":    
             outCome = "ball"
             break;
         case "c":
             outCome = "cat"
             break;
         default:
             outCome = "staff"
             break;
     }
     return outCome
 }
 console.log(siz("v"));

 function mum(val) {
      var answer = "";
      switch (val) {
          case 1:
          case 2:    
          case 3:
              answer = "low"    
              break;
          case 4:
          case 5:    
          case 6:
              answer = "medium"
              break;
          case 7:
          case 8:
          case 9:
              answer = "high"
              break;                          
      
          default:
              answer = "infinity"
              break;
      }
  return answer   
 }
 console.log(mum(0));

  function path(val) {
      var answer = "";
      switch (val) {
          case 1:
              
              break;
      
          default:
              break;
      }
      
  }
 
  
  //boolean
  function pass(a,b) {
      return a < b;
      
  }
  console.log(pass(9,10));