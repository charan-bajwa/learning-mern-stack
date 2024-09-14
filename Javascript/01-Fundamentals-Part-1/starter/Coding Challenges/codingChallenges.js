/* CODING CHALLENGE #1

----------------------------------------------------------------------------------------
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
 calculated using the formula:
 BMI = mass / height ** 2 = mass / (height * height) (mass in kg
 and height in meter).
*/

//DATA #1

//Mark 
// const weightMark = 78;
// const heightMark = 1.69;
// const bmiMark = weightMark / (heightMark * heightMark);
// console.log(bmiMark);

// //John
// const weightJohn = 92;
// const heightJohn = 1.95;
// const bmiJohn = weightJohn / heightJohn ** 2;
// console.log(bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

//DATA #2

//Mark
// const Markweight = 95;
// const Markheight = 1.88;
// const Markbmi = Markweight / (Markheight * Markheight); //Boolean Variable
// console.log(Markbmi);

//John
// const Johnweight = 85;
// const Johnheight = 1.76;
// const Johnbmi = Johnweight / Johnheight ** 2;
// console.log(Johnbmi);

// const johnLowerBMI = Johnbmi > Markbmi; //Boolean Variable
// console.log(johnLowerBMI);

//------------------------------------------------------------------------------------------------------------------------------------------------

// CODING CHALLENGE #2

/*
Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
------------------------------------------------------------------------------------
Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/
// if(Johnbmi>Markbmi){
// console.log(`John's BMI (${Johnbmi}) is higher than Mark's (${Markbmi})!`);
// }else {
//     console.log(`Mark's BMI (${Markbmi}) is higher than John's (${Johnbmi})!`);
// }

// if(bmiJohn>bmiMark){
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
// }else{
//     console.log(`John's BMI (${bmiMark}) is higher than Mark's (${bmiJohn})!`);
// }
//------------------------------------------------------------------------------------------------------------------------------------------------


// CODING CHALLENGE #3

/*
     There are two gymnastics teams, Dolphins and Koalas. They compete against each
     other 3 times. The winner with the highest average score wins a trophy!
----------------------------------------------------------------------------------------------------
     Your tasks:
     1. Calculate the average score for each team, using the test data below
     2. Compare the team's average scores to determine the winner of the competition,
        and print it to the console. Don't forget that there can be a draw, so test for that
        as well (draw means they have the same average score)
     3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
                 team only wins if it has a higher score than the other team, and the same time a
                 score of at least 100 points. Hint: Use a logical operator to test for minimum
                 score, as well as multiple else-if blocks 😜
     4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
                 both teams have the same score and both have a score greater or equal 100
                 points. Otherwise, no team wins the trophy
 
----------------------------------------------------------------------------------------------------       
     Test data:
    § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106            

-----------------------------------------------------------------------------------------------------

*/
// Data 1 : 

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// Data Bonus 1 :

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// Data Bonus 2 :

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

// Average Of Data :

// console.log(scoreDolphins); // Average score of Dolphins
// console.log(scoreKoalas);   // Average score of Koalas

// Basic Logic to satisfy all data :

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//    console.log(`Dolphins win the trophy 🏆`);
// }
// else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//    console.log(`Koalas win the trophy 🏆`);
// }
// else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//    console.log(`Both won the Trophy 🏆`);
// }
// else {
//    console.log(`No one wins the Trophy 🏆`);
// }
//------------------------------------------------------------------------------------------------------------------------------------------------



