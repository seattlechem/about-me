'use strict';

var noOfCorrectAnswer = 0;
var userName = prompt('Welcome! Please enter your name.');
alert('Hello ' + userName + '. Please answer all questions with y/n or yes/no.' +
' Several questions will be asked to find more about me.');

//Question 1
var resultOlympian = prompt('Do you think I met an Olympian before?').toLowerCase();
console.log('User\'s answer for Olympian question: ' + resultOlympian);

if(resultOlympian === 'y' || resultOlympian === 'yes')
{
  alert('I am a member of Pueget Sound Ice Skating Club and' +
  ' Several famous Olympians have trained in our club' +
  'including J. R. Celski and Apolo Ohno.');
  noOfCorrectAnswer++;
}
else
{
  alert('You said no. I have been training everyweekends for' +
  ' 2 hours on ice and 2 hours on dryland. Our ice skating club' +
  ' has produced two former/current Olympian: J. R. Celski and Apolo Ohno');
}

//Question 2
var resultInterest = prompt('Do you think I ever compete in alpine ski racing before?').toLowerCase();
console.log('User\'s answer for Ski question: ' + resultInterest);

if(resultInterest === 'y' || resultInterest === 'yes')
{
  alert('I was a downhill skier representing my hometown province in Korea.');
  noOfCorrectAnswer++;
}
else
{
  alert('I started skiing since I was seven years old.');
}

//Question 3
var resultProject = prompt('Have you ever lived in New Mexico?').toLowerCase();
console.log('User\'s answer for New Mexico question: ' + resultProject);

if(resultProject === 'y' || resultProject === 'yes')
{
  alert('I used to live in a small town called Portales, NM for 2 years.' +
  ' If I think about it now, I don\'t know how I was able to endure living' +
  ' there for even a day.');
  noOfCorrectAnswer++;
}
else
{
  alert('I lived a small town called Portales, NM for 2 years while attending' +
  ' college in there. They sell only frozen fish there.');
}

//Question 4
var resultYears = prompt('Do you think I enjoy drinking beer more than wine?').toLowerCase();
console.log('User\'s answer for Beer question: ' + resultYears);

if(resultYears === 'y' || resultYears === 'yes')
{
  alert('You\'re correct. I like drinking beer than wine. For that reason' +
  ' I am fortunate that I live in Seattle.');
  noOfCorrectAnswer++;

}
else
{
  alert('Although Seattle offers a great wine and beer selections, I prefer' +
  ' drinking beer over wine.');

}

//Question 5
var resultInternship = prompt('Do you think I am a vegetarian?').toLowerCase();
console.log('User\'s answer for Vegetarian questiobn: ' + resultInternship);

if(resultInternship === 'y' || resultInternship === 'yes')
{
  alert('No. I love going out to tour a different sushi restaurant' +
  ' I love eating fresh raw fish.');
  noOfCorrectAnswer++;
}
else
{
  alert('Yes. It\'s hard for me to imagine eating only vegetable.');
}

//Question 6
//guessing game which takes numeric input
var chance = 0;
while(chance < 4)
{
  var resultGuess = parseInt(prompt('Can you gess what is the last number of my 5-digit zip code? Please answer only with numbers from 0 to 9'));
  if(resultGuess === 6)
  {
    alert('Great. You got it right! The last number is 6');
    noOfCorrectAnswer++;
    break;
  }
  else
  {
    chance++;
    var chancesleft = 4 - chance;
    alert('Sorry. You have ' + chancesleft + ' chance(s) left.');
  }

}

//Question 7
//Guessing a state
var states = ['north carolina', 'new mexico', 'oregon'];
var attempt;
var i;
for(attempt = 0; attempt < 6; attempt++)
{
  var userAnswer = prompt('Can you guess a state that I have lived besides Washington?').toLowerCase();
  for(i = 0; i < states.length; i++)
  {
    if(userAnswer === states[i])
    {
      alert('You are correct. I have lived in North Cartolina, New Mexico, and Oregon besides Washington.');
      var correct = true;
      noOfCorrectAnswer++;
      alert('You got ' + noOfCorrectAnswer + ' out of 7 questions correct, ' + userName + '! Better luck next time!');
      break;}
  }
  if(correct === true)
  {
    break;
  }
  else
  {
    var attemptsLeft = 5 - attempt;
    console.log(attemptsLeft);
    alert('Sorry. You have ' + attemptsLeft + ' chance(s) left.');
  }
}
