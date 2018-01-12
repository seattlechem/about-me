'use strict';

var userName;
var correctQuestion = [];

function introduction() {
  userName = prompt('Welcome! Please enter your name.');
  alert('Hello ' + userName + '. Please answer all questions with y/n or yes/no.' +
  ' Several questions will be asked to find more about me.');
}

//Question 1
function question1() {
  var resultOlympian = prompt('Do you think I met an Olympian before?').toLowerCase();
  console.log('User\'s answer for Olympian question: ' + resultOlympian);

  if(resultOlympian === 'y' || resultOlympian === 'yes')
  {
    alert('I am a member of Pueget Sound Ice Skating Club and' +
    ' Several famous Olympians have trained in our club' +
    'including J. R. Celski and Apolo Ohno.');
    correctQuestion.push('Q1');
  }
  else
  {
    alert('You said no. I have been training everyweekends for' +
    ' 2 hours on ice and 2 hours on dryland. Our ice skating club' +
    ' has produced two former/current Olympian: J. R. Celski and Apolo Ohno');
  }
}

//Question 2
function question2() {
  var resultInterest = prompt('Do you think I ever compete in alpine ski racing before?').toLowerCase();
  console.log('User\'s answer for Ski question: ' + resultInterest);

  if(resultInterest === 'y' || resultInterest === 'yes')
  {
    alert('I was a downhill skier representing my hometown province in Korea.');
    correctQuestion.push('Q2');
  }
  else
  {
    alert('I started skiing since I was seven years old.');
  }
}

//Question 3
function question3() {
  var resultProject = prompt('Have you ever lived in New Mexico?').toLowerCase();
  console.log('User\'s answer for New Mexico question: ' + resultProject);

  if(resultProject === 'y' || resultProject === 'yes')
  {
    alert('I used to live in a small town called Portales, NM for 2 years.' +
    ' If I think about it now, I don\'t know how I was able to endure living' +
    ' there for even a day.');
    correctQuestion.push('Q3');
  }
  else
  {
    alert('I lived a small town called Portales, NM for 2 years while attending' +
    ' college in there. They sell only frozen fish there.');
  }
}

//Question 4
function question4() {
  var resultYears = prompt('Do you think I enjoy drinking beer more than wine?').toLowerCase();
  console.log('User\'s answer for Beer question: ' + resultYears);

  if(resultYears === 'y' || resultYears === 'yes')
  {
    alert('You\'re correct. I like drinking beer than wine. For that reason' +
    ' I am fortunate that I live in Seattle.');
    correctQuestion.push('Q4');

  }
  else
  {
    alert('Although Seattle offers a great wine and beer selections, I prefer' +
    ' drinking beer over wine.');

  }
}

//Question 5
function question5() {
  var resultInternship = prompt('Do you think I am a vegetarian?').toLowerCase();
  console.log('User\'s answer for Vegetarian questiobn: ' + resultInternship);

  if(resultInternship === 'y' || resultInternship === 'yes')
  {
    alert('No. I love going out to tour a different sushi restaurant' +
    ' I love eating fresh raw fish.');
    correctQuestion.push('Q5');
  }
  else
  {
    alert('Yes. It\'s hard for me to imagine eating only vegetable.');
  }
}

//Question 6
//guessing game which takes numeric input
function question6 () {
  var chance = 0;
  var chancesleft;
  while(chance < 4)
  {
    var resultGuess = parseInt(prompt('Can you gess what is the last number of my 5-digit zip code? Please answer only with numbers from 0 to 9'));
    if(resultGuess === 6)
    {
      alert('Great. You got it right! The last number is 6');

      correctQuestion.push('Q6');
      console.log('Question 6: ' + resultGuess);
      break;
    }
    else
    {
      var difference = resultGuess - 6;
      if(difference > 0)
      {
        console.log('User guess is too high');
        chance++;
        chancesleft = 4 - chance;
        alert('Sorry. You guess is too high. You have ' + chancesleft + ' chance(s) left.');

      }
      else
      {
        console.log('User guess is too low');
        chance++;
        chancesleft = 4 - chance;
        alert('Sorry. You guess is too high. You have ' + chancesleft + ' chance(s) left.');
      }
    }
  }
}

//Question 7
//Guessing a state
function question7() {
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
        var correct = true;
        correctQuestion.push('Q7');
        console.log('Question 7: ' + userAnswer);
        break;
      }
    }
    if(correct === true)
    {
      console.log('User got it right. This is 2nd break.');
      alert('Correct!');
      break;
    }
    else
    {
      console.log('User answer Incorrect');
      var attemptsLeft = 5 - attempt;
      console.log(attemptsLeft);
      alert('Sorry. You have ' + attemptsLeft + ' chance(s) left.');
    }
  }
  alert('The states I have lived: North Carolina, New Mexico, and Oregion');
}
function finalCheck() {
  if (correctQuestion.length === 0)
  {
    alert('Sorry. You didn\'t get any question right ' + userName + '! Better luck next time!');
  }
  else
  {
    var listOfCorrectQuestions = correctQuestion.toString();
    alert('You got ' + correctQuestion.length + ' out of 7 questions correct.' +
'Your answer for following questions are correct: ' + listOfCorrectQuestions + '\n' +
 userName + '! Better luck next time!');

  }
}

introduction();
question1();
question2();
question3();
question4();
question5();
question6();
question7();
finalCheck();


