'use strict';

var counter = 0;
var message1 = 'sorry, that\'s not a valid response';
var userName = prompt('Hello! what is your name?');

alert('Hi, ' + userName + ' It is a pleasure to meet you');
console.log('Name:' + userName);

var userAnswer1 = prompt('do you wanna hang out today?');
console.log('hanging out today?:' + userAnswer1);
if (userAnswer1.toLowerCase() === 'yes' || userAnswer1.toLowerCase() === 'y') {
  alert('wow ' + userName + ' that\'s kind of weird, you barely know me');
  counter++;
} else if (userAnswer1.toLowerCase() === 'no' || userAnswer1.toLowerCase() === 'n') {
  alert('fine I didn\'t want to hang either!');
} else {
  alert(message1);
}

var userAnswer2 = prompt('do I have any siblings?');
console.log('siblings?:' + userAnswer2);
if (userAnswer2.toLowerCase() === 'yes' || userAnswer2.toLowerCase() === 'y') {
  alert('congrats! you are right');
  counter++;
} else if (userAnswer2.toLowerCase() === 'no' || userAnswer2.toLowerCase() === 'n') {
  alert('don\'t worry you\'re just getting to know me');
} else {
  alert(message1);
}

var userAnswer3 = prompt('do you think I have an interest in computers?');
console.log('Interest in computers?:' + userAnswer3);
if (userAnswer3.toLowerCase() === 'yes' || userAnswer3.toLowerCase() === 'y') {
  alert('awesome so do I!');
  counter++;
} else if (userAnswer3.toLowerCase() === 'no' || userAnswer3.toLowerCase() === 'n') {
  alert('you must be think I believe in skynet');
} else {
  alert(message1);
}

var userAnswer4 = prompt('do you think i\'ve ever lived outside washington state?');
console.log('state?:' + userAnswer4);
if (userAnswer4.toLowerCase() === 'yes' || userAnswer4.toLowerCase() === 'y') {
  alert('correct! washington state is definitely the state for me');
  counter++;
} else if (userAnswer4.toLowerCase() === 'no' || userAnswer4.toLowerCase() === 'n') {
  alert('c\'mon man I totally look pacific northwest');
} else {
  alert(message1);
}

var userAnswer5 = prompt('did you like this series of weird questions?');
console.log('Like these weird questions?:' + userAnswer5);
if (userAnswer5.toLowerCase() === 'yes' || userAnswer5.toLowerCase() === 'y') {
  alert('alright thats pretty nice of you.');
  counter++;
} else if (userAnswer5.toLowerCase() === 'no' || userAnswer5.toLowerCase() === 'n') {
  alert('it\'s ok, I wasn\'t a big fan either..');
} else {
  alert(message1);
}

var favNum = 9;
var responseArr = ['you guessed too high!' , 'you guessed too low!' , 'you got it right!' , 'you took too many try\'s'];

for (var i = 0; i < 4; i++) {
  var userAnswer6 = prompt('what is my favorite number?');
  console.log(typeof userAnswer6);
  if (userAnswer6 > favNum ) {
    alert(responseArr[0]);
    console.log(userAnswer6);
  } else if (userAnswer6 < favNum) {
    alert(responseArr[1]);
    console.log(userAnswer6);
  } else if (userAnswer6 == favNum) {
    alert(responseArr[2]);
    console.log(userAnswer6);
    counter++;
    break;
  }
  if (i === 3) {
    alert(responseArr[3]);
  }

}

for (var i = 0; i < 6; i++) {
  var userAnswer7 = prompt('what is my favorite food?');
  var foodsArr = ['teriyaki' , 'pizza' , 'mac and cheese'];
  if (foodsArr.includes(userAnswer7)) {
    alert('congrats you got it right! The answers were: ' + foodsArr);
    console.log(typeof userAnswer7);
    counter++;
    break;
  } else {
    alert('guess again!');
    console.log('wrong answer');
  }
}
