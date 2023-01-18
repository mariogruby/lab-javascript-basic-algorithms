// Iteration 1: Names and Input
let hacker1 = "mario";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "google";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    
    }else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }else{
    console.log(`Wow, you both have equally long names, 5 characters!`);
    }

// Iteration 3: Loops
let result = '';
for(i = 0; i < hacker1.length; i++){
  hacker1[i];
  result+= hacker1[i].toUpperCase() + ' ';
  }
console.log(result);


let reversedName = '';  
for(i = hacker2.length - 1; i >= 0; i--){
  hacker2[i];
  reversedName += hacker2[i];
}
console.log(reversedName);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The navigator goes first definitely.");
} else {
  console.log("What? You both have the same name?");
}

