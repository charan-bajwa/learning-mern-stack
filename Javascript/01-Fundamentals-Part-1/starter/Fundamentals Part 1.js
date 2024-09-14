// Varialbles & values convention
/*
let js = 'amazing';
 if (js === 'amazing') alert('JavaScript is FUN !!!!');
 let firstName = "Simmi";
 let first_name = "charan";
 let $function = "344";
 let PI = "3.1415"
 console.log(40 + 29 + 333 + 22 - 244);
 console.log(firstName);
 console.log(first_name);
 console.log($function);
 console.log(PI);
*/
// Data Types
/*
let javascpritIsFun = true;
console.log(javascpritIsFun);
console.log(typeof true);
console.log(typeof javascpritIsFun);
console.log(typeof 23);
console.log(typeof 'Bheem');
javascpritIsFun = 'Yes!'
console.log(typeof javascpritIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 19992;
console.log(year);
console.log(typeof year);
console.log(typeof null);
*/


//Let,Const And Var
/*
let age = 19;
age = 20;
const birthYear = 2004;
var job = "programmer"
job = "teacher"
*/

// Basic Operators

// Math Operators


// const now = 2077;
// const ageCharan = now - 2004;
// const ageSimmi = now - 2004;
// console.log(ageCharan,ageSimmi);
// console.log(ageCharan*3,ageSimmi/12,8**3);


/* const firstName = "Charansingh";
   const lastName = "Bajwa";
   console.log(firstName+" "+lastName);
*/

/*
const firstName = "Simone";
const middleName = "Dolphy";
const lastName = "Dsilva";
console.log(firstName+" "+middleName+" "+lastName);
*/

//Assignment operators
// let x = 10 + 89;
// x+=10;//x=x+10=109
// x-=10;//x=x-10=99
// x*=10;//x=x*10=990
// x/=10;//x=x/10=99
// x++;//x=x+1=100
// x--;//x=x-1=99

// console.log(x);

// Comparison operators 
// console.log(ageCharan > ageSimmi);
// console.log(ageSimmi >= 18);
// const isFullage = ageSimmi >= 18 ;

// Operator Precedence

// const now = 2024;
// const ageCharan = now - 2004;
// const ageSimmi = now - 2004;
// console.log(now - 2004 > now - 2004);

// let x , y ;
// x = y = 25 - 10 - 5;
// console.log(x,y);

// const averageAge = (ageCharan + ageSimmi)/2;
// console.log(ageCharan,ageSimmi,averageAge);

// Strings & Template Literals

// const firstName = "Simmi";
// const job = "Teacher";
// const birthYear = 2004;
// const year = 2038;
// const simmi = "I'm " + firstName + ', a '+ (year-birthYear) + " years old " + job + '!';
// const simmiNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
// console.log(simmi);
// console.log(simmiNew);

// console.log(`just a regular string saying kachuva `);
// console.log("Kachuva\n\Chickoo\n\Chimmi");
// console.log(`kachuva
// chickoo
// chimmi`);

//if & else Statements

// Example 1 :

// const age = 15
// const yearsLeft = 18 - age ;

// if(age>=16){
//    console.log(`Sarah can start driving license 🚗`);
// }else{
//    console.log(`Sarah is too young. Wait another ${yearsLeft} years. Thank You :)  `);
// }

//Example 2 :

// const birthYear =2011;
// let century;
// if (birthYear<=2000){
//    century= 20;
//    console.log(`This person was born in ${century}th century.`);
// }else{
//    century = 21;
//    console.log(`This person was born in ${century}st century.`);
// }

// Type Conversion

// const inputYear = `2004`;
// console.log(Number(inputYear),inputYear);
// console.log(Number(inputYear)+18);

// console.log(Number(`Simmi`));
// console.log(typeof NaN);

// console.log(String(23),23);

// type Coersion

// console.log(4+4+5+`9`);
// console.log(`21`-10-`2`+`33`);
// console.log(`2`*`2`);
// console.log(`12`/`2`);

// let n = `1`+ 1;     // 11;
// n=n-1;              // 11-1 = 10 
// console.log(n);

// console.log(`Im `+20+` years `+` old `);

// Truthy And Falsy Values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean(`Simmi`));

// Example 1 :

// console.log(Boolean(0)); SHOWCASE :

// const money = 0;

// if(money){
//    console.log(`Don't spend it all :)`);
// }else{
//    console.log(`Get a Job moron ;(`);
// }

// Example 2 :

// console.log(Boolean(undefined)); SHOWCASE :

// let shemdi;

// if(shemdi){
//    console.log(`Shemdi is DEFINED`);
// }else{
//    console.log(`Shemdi is UNDEFINED`);
// }

//Example 3 :

//   console.log(Boolean(0)); &  console.log(Boolean(undefined)); SHOWCASE :

// let Cokduku = 0;
// if(Cokduku){
//    console.log(`Cokduku is DEFINED`);
// }else{
//    console.log(`Cokduku is UNDEFINED`);
// }

// Equality Operators == VS ===

// Strict Equality Operator (===) & Loose Equality Operator (==) 

// const age = "18" ;

// if(age===18) console.log(` You're an adult (Strict)`); // No Type coersion...Developers Advice: Greater usecase and clean code.

// if(age==18)  console.log(` You're an adult (Loose)`);  // Type coersion does happpen...Developers Advice: Minimal use or no use for clean code.

// Some Examples

// Strict Equality Operator (===)
// console.log(18===19);   // Falsy value.
// console.log(18===18);   // Truthy value.
// console.log(18===`18`); // Type Coersion does not happen.

// Loose Equality Operator (==) 
// console.log(18==19);    // Falsy value.
// console.log(18==18);    // Truthy value.
// console.log(18==`18`);  // Type Coersion does happen.

// Some More Examples
// const Brainrotnum = Number(prompt(`What is ur Brainrot Number `));
// console.log(Brainrotnum);
// console.log(typeof Brainrotnum);
// if (Brainrotnum === 22) {
//    console.log(`22 is a SIGMA Number`);
// } else if(Brainrotnum === 8) {
//    console.log(`8 can RIZZ lvl 10 GYATT`);
// } else if (Brainrotnum === 20) {
//    console.log(`20 MOGS every Number `);
// } else {
//    console.log(`Sorry you're number is from Ohio `);
// }

// if (Brainrotnum !== 20){
//    console.log(`why not 20 u bItcH`);
// }

// Decision  Maker using Boolean Values 

// const HasdriverLicense = true; // simmi = driver; So simmi should have driver license
// const HasgoodVision = true; // simmi should have good vision to drive 
// const IsTired = false; // simmi should not be tired

// console.log(HasdriverLicense && HasgoodVision); // A AND B
// console.log(HasdriverLicense || HasgoodVision); // A OR B
// console.log(!HasdriverLicense);               // NOT A NOT B
// console.log(!HasgoodVision);                  // NOT A NOT B

// if (HasdriverLicense && HasgoodVision && !IsTired) {
//    console.log(`Simmi is able to drive :) `);
// } else {
//    console.log(`Some else should drive.... `);
// }


// Switch Case 


// Example:


//    const Day = `Sunday`;
//    switch(Day){
//       case `Monday`:
//          console.log(`Go to college, Study & Work 🥲😑`);
//          console.log(`Meet chickoo in college ❤️`);
//          break;

//       case `Tuesday`:
//          console.log(`RIZZ A LVL 10 GYATTTT 🍑`);
//          console.log(`EDGE TO NSYNC'S BYE BYE 🙅🧏‍♂️`);
//          break;

//       case `Wednesday`:
//          console.log(`BOURVITA IN BIHAR 🥛`);  
//          console.log(`MEWING 🙅🧏‍♂️`);
//          break;

//       case `Thursday`:
//       case `Friday`  : 
//          console.log(`CONTINUE Mewing Streak 🙅🧏‍♂️`);
//          break;

//       case `Saturday`:
//       case `Sunday`  :
//          console.log(`WEEKEND 🥳`);
//          break;

//       default:
//          console.log(`NOT A VALID DAY 🤨🙄`);
//          break;        
//  }


// Same Example with if-else statement:


const Day = `Thursday`;

if (Day === `Monday`) {
   console.log(`Go to college, Study & Work 🥲😑`);
   console.log(`Meet chickoo in college ❤️`);
}
else if (Day === `Tuesday`) {
   console.log(`RIZZ A LVL 10 GYATTTT 🍑`);
   console.log(`EDGE TO NSYNC'S BYE BYE 🙅🧏‍♂️`);
}
else if (Day === `Wednesday`) {
   console.log(`BOURVITA IN BIHAR 🥛`);
   console.log(`MEWING 🙅🧏‍♂️`);
}
else if (Day === `Thursday` || Day === `Friday`) {
   console.log(`CONTINUE Mewing Streak 🙅🧏‍♂️`);
}
else if (Day === `Saturday` || Day === `Sunday`) {
   console.log(`WEEKEND 🥳`);
}
else {
   console.log(`NOT A VALID DAY 🤨🙄`);
}

