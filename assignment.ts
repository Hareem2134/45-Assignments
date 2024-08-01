//Question 2# Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("\nQuestion 2\n");

let person_name: string = "Hareem";

console.log(`Hello ${person_name}, Would you like to learn some Python today?`);







// Question 3# Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Question 3");

let personNames: string = "Hareem";

console.log(personNames.toLowerCase()); //In this way the name wlll be printed in Lower 

console.log(personNames.toUpperCase()); //In this way the name wlll be printed in Upper Case

console.log(personNames[0].toUpperCase() + personNames.slice(1).toLowerCase()); //In this way the name wlll be printed in Title Case








// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("\nQuestion 4\n");

let quote: string = `"The one who cares for an orphan will be together with me in Paradise like this, and he held his two fingers together".`;  
let author: string = `Prophet Muhammad PBUH`;

console.log(`${author} once said: ${quote}`);







// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("\nQuestion 5\n");

let famous_person: string = `Prophet Muhammad PBUH once said: `;
let message: string = `"Charity does not decrease wealth"`;

console.log(`${famous_person}` + `${message}`);







// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("\nQuestion 6\n");

let person_Names: string = "\t\n Hareem \n\t";

console.log(`Name with whitespaces: ${person_Names}`);

console.log(`Name without whitespace: ${person_Names.trim()}`);





// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("\nQuestion 7\n");

console.log(`Addition: 4 + 4 = ` , 4+4);
console.log(`Substraction: 10 - 2 =` , 10-2);
console.log(`Multiplication: 4 x 2 = ` , 4*2);
console.log(`Division: 16 ÷ 2 = ` , 16/2);






// You should create four lines that look like this:

// ________________________
// console.log(5 + 3)
// ________________________

// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("\nQuestion 8\n");

let line: string = "____________"; 

console.log(line);  
console.log(4+4);
console.log(line);
console.log(10-2);
console.log(line);
console.log(4*2);
console.log(line);
console.log(16/2);







// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("\nQuestion 9\n");

let favoriteNumber : number = 3; //Storing my favourite number in a variable
let Message: string = `My Favourite Number is:  ${favoriteNumber}` 

console.log(Message); //printing the message






// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log("\nQuestion 10\n");

console.log("Commenting on QUESTION 2\n");

// let personNames: string = "Hareem";
// console.log(personNames.toLowerCase()); //In this way the name wlll be printed in Lower 
// console.log(personNames.toUpperCase()); //In this way the name wlll be printed in Upper Case
// console.log(personNames[0].toUpperCase() + personNames.slice(1).toLowerCase()); //In this way the name wlll be printed in Title Case


console.log("Commenting on QUESTION 9");

// let favoriteNumber : number = 3; //Storing my favourite number in a variable
// let Message: string = `My Favourite Number is:  ${favoriteNumber}` 
// console.log(Message); //printing the message







// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("\nQuestion 11\n");

let friendsNames: string[] = ["Maliya", "Fatima", "Aliya", "Shazia"];

friendsNames.forEach(friendsNames => console.log(friendsNames));








// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("\nQuestion 12\n");

console.log(`Hello ${friendsNames[0]}, How are you?`);
console.log(`Hello ${friendsNames[1]}, How are you?`);
console.log(`Hello ${friendsNames[2]}, How are you?`);
console.log(`Hello ${friendsNames[3]}, How are you?`);







// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("\nQuestion 13\n");

let favouriteTransportation: string[] = ["BMW","Tesla","Mercedes"];

favouriteTransportation.forEach (transport => console.log(`I would like to own a ${transport} In Shaa Allah`) );







// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("\nQuestion 14\n");

let invites: string[] = ["Maliha", "Shazia", "Aliya"];

invites.forEach(invitationList => console.log(`Hello, ${invitationList} I would like you to have a dinner with me tommorrow In Shaa Allah`));







// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("\nQuestion 15\n");

let unavailableGuest = invites.pop();

console.log(`Unfortunatelly ${unavailableGuest} can't able to attend the dinner`);

invites.push("Sana");

console.log();     //for blank space

console.log("Updated Invitation List");

invites.forEach(updatedInvitationList => console.log(`Dear, ${updatedInvitationList} I would be delighted if you could join me for dinner tomorrow, In Shaa Allah`));








// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
 
// • Use append() to add one new guest to the end of your list. 

// • Print a new set of invitation messages, one for each person in your list.
console.log("\nQuestion 16\n");

console.log("Hey, I just found a bigger dinner table Alhumdulillah.");

invites.unshift("Mahnoor");
invites.splice(2, 0, "Sabiha");
invites.push("Mehwish");

//append() method is not in Typescript nor in javascript, this method is in python.

console.log();   //for blank space

console.log("New Guest List");

invites.forEach( newGuestList => console.log(`Dear ${newGuestList} I hope you can join me for dinner tomorrow, In Shaa Allah.`));








// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("\nQuestion 17\n");

console.log("I can invite only two people for dinner");

while (invites.length > 2){
let removedGuest = invites.pop();
console.log(`Dear ${removedGuest}, Sorry I can't invite you as we dont have much space to dine in.`);
}

console.log();    //for blank space

invites.forEach(stillInvited => console.log(`Dear ${stillInvited}, you're still invited, I hope you can join me for a dinner tomorrow In Shaa Allah`));

while (invites.length > 0){
invites.pop();
}

console.log();  //for blank space so that the compilation shouldn't look messy

console.log("New Guest List");
console.log(invites);








// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nQuestion 18\n");

let places: string[] = ["K2 Base Camp", "Norway", "Iceland", "Maldives", "Switzerland"];

console.log("Places to Visit:");
console.log(places);

console.log(); // for blank space

let placesInAlphabeticalOrder = places.slice().sort();
console.log("Places in Alphabetical Order:");
console.log(placesInAlphabeticalOrder);

console.log(); // for blank space

console.log("Original List:");
console.log(places);

console.log(); // for blank space

let placesInReverseAlphabeticalOrder = places.slice().sort().reverse();
console.log("Places in Reverse Alphabetical Order:");
console.log(placesInReverseAlphabeticalOrder);

console.log(); // for blank space

console.log("Original List:");
console.log(places);

console.log(); // for blank space

places.reverse();
console.log("Original List Reversed:");
console.log(places);

console.log(); // for blank space

places.reverse();
console.log("Original List Reversed Again (Restored):");
console.log(places);

console.log(); // for blank space

places.sort();
console.log("Original List Sorted in Alphabetical Order:");
console.log(places);

console.log(); // for blank space

places.reverse();
console.log("Original List Sorted in Reverse Alphabetical Order:");
console.log(places);







// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("\nQuestion 19\n");

console.log(`The number of people invited to dinner: ${invites.length}`);







// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("\nQuestion 20\n");

let list: string[] = ["K2", "Iceland", "Norway", "Urdu", "BMW", "Parrot"];

console.log(list);






// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("\nQuestion 21\n");

let myCar = {
    make: "Honda",
    model: "City",
    year: "2022",
}

console.log();
console.log(`My Car Information:`);
console.log(myCar);






// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log("\nQuestion 22\n");

let favoriteCar: string[] = ["BMW","Mercedes", "Tesla"];

console.log("Array Index Error");

console.log(favoriteCar[3]); //error

console.log("After correcting the error");

console.log(favoriteCar[1]);






// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("\nQuestion 23\n");

let car = 'subaru';
console.log();
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

//10 Tests
console.log("\n10 Tests\n");

let mountain = "K2";
console.log("Is mountain == K2? I predict True");
console.log(mountain == "K2");

console.log("Is mountain == k2? I predict False");
console.log(mountain == "k2");


let river = "Kunhar";
console.log("Is river == Kunhar? I predict True");
console.log(mountain == "Kunhar");

console.log("Is river == satlaj? I predict False");
console.log(mountain == "satlaj");


let country = "Iceland";
console.log("Is country == Iceland? I predict True");
console.log(country == "Iceland");

console.log("Is country == Norway? I predict False");
console.log(country == "Norway");


let city = "toronto";
console.log("Is city == toronto? I predict True");
console.log(city == "toronto");

console.log("Is city == Paris? I predict False");
console.log(city == "Paris ");


let food = "Pizza";
console.log("Is food == Pizza? I predict True");
console.log(food == "Pizza");

console.log("Is food == Zinger? I predict False");
console.log(food == "Zinger");







// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
console.log("\nQuestion 24\n");

console.log("More Conditional Tests");


let fruit = "apple";

console.log("Is fruit = apple? I predicts True");
console.log(fruit == "apple");

console.log("Is fruit != apple? I predicts False");
console.log(fruit != "apple");

console.log("Is fruit.toLowerCase() == apple? I predicts True");
console.log(fruit.toLowerCase() == `apple`);

console.log("Is fruit.toLowerCase() == Apple? I predicts False");
console.log(fruit.toLowerCase() == `Apple`);


let a = 5;

console.log("is a = 5? I predicts True");
console.log( a == 5 );

console.log("Is a != 5? I predict False");
console.log( a != 5 );

console.log("Is a < 6? I predics True");
console.log( a < 6 );

console.log("Is a > 10? I predicts False");
console.log( a > 10 );

console.log( "Is a >= 5? I predicts True");
console.log( a >= 5 );

console.log( "Is a <= 4? I predicts False");
console.log( a <= 4 );

console.log("Is a < 6 && a > 4? It predicts True");
console.log(a < 6 && a > 4);

console.log("Is a < 4 && a > 8? It predicts False");
console.log(a < 4 && a < 8);


let basket = ["potato", "tomoto", "onion"];

console.log("Is tomoto available in the basket? I predicts True");
console.log(basket.includes("tomoto"));

console.log("Is brinjal available in the basket? I predicts False");
console.log(basket.includes("brinjal"));







// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
console.log("\nQuestion 25\n");

let alien_color: string = "green";

if (alien_color === "green"){
console.log("The Player just earned 5 points");
}

let alien_color1: string = "red";

if (alien_color1 === "green"){
    console.log("The Player just earned 5 points");
}







// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.
console.log("\nQuestion 26\n");

let alien_color2 = "green";

if ( alien_color2 === "green"){
    console.log("The Player just earned 5 points for shooting the alien");
} else{
    console.log("The Player just earned 10 points");
}

if ( alien_color2 != "green"){
    console.log("The Player just earned 5 points for shooting the alien");
} else{
    console.log("The Player just earned 10 points");
}







// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log("\nQuestion 27\n");

let alien_color3 = "green";

if (alien_color3 === "green"){
    console.log("The Player earned 5 points");
} else if (alien_color3 === "yellow"){
    console.log("The Player earned 10 points");
} else if (alien_color3 === "red"){
    console.log("The Player earned 15 points");
}


let alien_color4 = "yellow";

if (alien_color4 === "green"){
    console.log("The Player earned 5 points");
} else if (alien_color4 === "yellow"){
    console.log("The Player earned 10 points");
} else if (alien_color4 === "red"){
    console.log("The Player earned 15 points");
}


let alien_color5 = "red";

if (alien_color5 === "green"){
    console.log("The Player earned 5 points");
} else if (alien_color5 === "yellow"){
    console.log("The Player earned 10 points");
} else if (alien_color5 === "red"){
    console.log("The Player earned 15 points");
}







// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.
console.log("\nQuestion 28\n");

let person = 45;

if (person < 2 ){
    console.log("The person is a toddler");
}
else if (person >= 4 && person < 13){
    console.log("The person is a Kid");
}
else if (person >= 13 && person < 20 ){
    console.log("The person is a Teenager");
}
else if (person >= 20 && person < 65){
    console.log("The person is a Adult");
} 
else if (person >= 65){
    console.log("The person is a Elder");
} 





// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
console.log("\nQuestion 29\n");

let my_favorite_fruits: string[] = ["Banana", "Strawberry", "Apple", "Mango"];

if (my_favorite_fruits[1]){
    console.log(`${my_favorite_fruits[1]} is available in the list`);
}
if (my_favorite_fruits[3]){
    console.log(`${my_favorite_fruits[3]} is available in the list`);
}





// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
console.log("\nQuestion 30\n");

let userName: string[] = ["admin","hareem2134", "aliya93", "fatima23", "maliha88"];

userName.forEach( userName => {
    if (userName == "admin"){
        console.log(`Hello ${userName}, Would you like to see a status report?`);
    }
    else{
        console.log(`Hello ${userName}, thankyou for logging in again`);
    }
})


 




// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("\nQuestion 31\n");

if (userName.length === 0){
    console.log("We need to find some users");
}
else{
    userName.forEach( userName => {
    if (userName == "admin"){
        console.log(`Hello ${userName}, Would you like to see a status report?`);
    }
    else{
        console.log(`Hello ${userName}, thankyou for logging in again`);
    }
})
}

userName = [];
if (userName.length === 0){
    console.log("\nWe need to find some users");
}







// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
console.log("\nQuestion 32\n");






let current_users: string[] = ["asma123", "tayyab654", "sana876", "rida989", "amna656"];

let new_users: string[] = ["esha436", "tayyab654", "maria622", "maliha829", "kinza864"];
 
new_users.forEach( new_users => {
    if(current_users.some( user => user.toLowerCase() === new_users.toLowerCase() )){
       console.log(`Sorry, the username ${new_users} is already taken. Please enter a new username.`);
    } else {
        console.log(`The username ${new_users} is available`);
    }
})






// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
console.log("\nQuestion 33\n");

let ordinalNumber: number[] = [1,2,3,4,5,6,7,8,9];

ordinalNumber.forEach( number => {
    if(number === 1){
        console.log("1st");
    } else if (number === 2){
        console.log("2nd");
    } else if (number === 3){
        console.log("3rd");
    }else {
        console.log(`${number}th`);
    }

})






// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("\nQuestion 34\n");

let favoritePizza: string[] = ["Fajita", "Paperoni", "Creamy Cheese"];

favoritePizza.forEach( pizza => {
    console.log(`I love ${pizza} pizza`);
})
console.log("I really love Pizza!");








// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

// • Modify your program to print a statement about each animal, such as A dog would make a great pet.

// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\nQuestion 35\n");

let animals: string[] = ["Cat", "Duck", "Parrot"];

for (let i = 0; i<animals.length; i++){
console.log(animals[i]);
}

for (let i=0; i<animals.length; i++){
    console.log(`A ${animals} would make a great pet`);
}

console.log("Any of these animals would make a great pet!");
    





// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
console.log("\nQuestion 36\n");

function make_shirt(size:string = "Large", message:string= "I love TypeScript"){
    console.log(`The shirt size is ${size} and it has the message ${message}`);
}

make_shirt();





// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log("\nQuestion 37\n");

make_shirt("Medium")

make_shirt("Small", "I love coding")





// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
console.log("\nQuestion 38\n");

function describe_city(city:string, country:string= "Pakistan"){
console.log(`${city} is in ${country}`);
}

describe_city("Islamabad");
describe_city("Faislabad");
describe_city("Bursa", "Turkey")





// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log("\nQuestion 39\n");

function city_country(city:string, country:string){
    console.log(`${city}, ${country}`);
}

city_country("Lahore", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("Islamabad", "Pakistan");






// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
console.log("\nQuestion 40\n");

function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string; title: string; tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album('Artist1', 'Album1'));
console.log(make_album('Artist2', 'Album2', 10));
console.log(make_album('Artist3', 'Album3'));







// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log("\nQuestion 41\n");

let magicians: string[] = ["Alpha", "Johny", "Bravo"];

function show_magicians(magicians:string[]){
magicians.forEach( magician =>{
    console.log(magician);
})
}

show_magicians(magicians);




// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
console.log("\nQuestion 42\n");

function make_great(magicians:string[]){
magicians.forEach(greatMagician => {
    console.log(`Great ${greatMagician}`);
});
}

make_great(magicians);
show_magicians(magicians);





// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log("\nQuestion 43\n");

let original_magicians: string[] = ["Alpha", "Johny", "Bravo"];
let modified_magicians: string[] = [...original_magicians];

make_great(modified_magicians);

console.log("Original Magicians:");
show_magicians(original_magicians);

console.log("\nModified Magicians:");
show_magicians(modified_magicians);









// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log("\nQuestion 44\n");

function persons(...items: string[] ){
    console.log(`Make a sandwich with the following items: ${items}`);
}

persons("Pizza", " Garlic Bread", " Fries");
persons("Nuggets Fries", " Spaghetti", " Cold drink");
persons("Zinger", " Beef Burger", "Fries", " Cold drink");






// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
console.log("\nQuestion 45\n");

function make_car(manufacturer: string, model: string, options: { [key: string]: any } = {}) {
    let car = { manufacturer, model, ...options };
    return car;
}

let car1 = make_car('Toyota', 'Corolla', { color: 'blue', sunroof: true });
console.log(car1);

 