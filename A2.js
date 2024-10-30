// // Question No. 1 - Find Grades based upon the marks(M) obtained by a student. 
function findGradesFunction(){
    var M = 15;
    switch(true){
        case(41<= M && M<= 50):
                console.log("A");
                break;
        case(31<= M && M<= 40):
                console.log("B");
                break;
        case(21<= M && M<= 30):
                console.log("C");
                break;
        case(11<= M && M<= 20):
                console.log("D");
                break;
        case(M <= 10):
                console.log("E");
                break;
        default:
                console.log("Invalid Marks");
                console.log("Enter the Marks from 0 to 50");
                break;
    }
}
findGradesFunction();

// Question No. 2 - Find the value from the table corresponding to an input character and return it. 
function getValue(){
let C = "P";
if(C === "P" || C === "p"){
        console.log("PrepBytes");
}
else if(C === "Z" || C === "z"){
        console.log("Zenith");
}
else if(C === "E" || C === "e"){
        console.log("Expert Coder");
}
else if(C === "D" || C === "d"){
        console.log("data Structure");
}
else{
        console.log("Invalid");
}
}
getValue();

// Question No. 3 - Take three numbers and print the largest among them. 
function Max_out_of_three(X, Y, Z) {
    if (X === Y && Y === Z) {
        return -1;  
    } else {
        return Math.max(X, Y, Z);  
    }
}


const X = 4;
const Y = 4;
const Z = 4;
console.log(Max_out_of_three(X, Y, Z)); 

// Question No. 4 - find and return second smallest integer among the three integers. 
function findSecondSmallest(A, B, C){
var numbs = [A, B, C];
numbs.sort((a,b) => a - b);
return numbs[1];
}
var A = 23;
var B = 90;
var C = 2;
console.log(findSecondSmallest(A, B, C));

// Question No. 5 - Check Whether the triangle is Acute or Obtuse 
function Triangle_Check(){
        let A = 60;
        let B = 1;
        let C = 120;
           if (A < 90 && B < 90 && C < 90) {
        console.log("Acute");
    } else {
        console.log("Obtuse");
    }
}
Triangle_Check();
