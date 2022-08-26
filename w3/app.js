const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
  };

  // My Daily Decision
  // One daily decision I make what to do for dinner based on
  // How much time we have
  // Time is calculated in military time 00:00, but times before 1200 are entered as 3-digit numbers
  // Available time will be displayed as 3 or 4-digit number with the 1st digit representing hour and the last two representing minutes 

  // global variables

  let currentTime = 1700
  let dinnerTime = 1900
  let maxMakeDinner = 1700
  let availableTime = dinnerTime - currentTime
  let minAvailTime = 200
 
  // local variables

    let cookDinner = true
    let getDinner = false
    let beHome = true
    let notHome = false

  // displayOnPage

  showOnPage(
    '<b> Dinner based on time availablity:</b>'
  )
  showOnPage('Current Time ---> ' + currentTime)
  showOnPage('Dinner Time ---> ' + dinnerTime)
  showOnPage('Latest time to make dinner ---> ' + maxMakeDinner)
  showOnPage('How much time until dinner ---> ' + availableTime)
  showOnPage('Minimum allowable time to make dinner ---> ' + minAvailTime)
  showOnPage('I am home and its not too late ---> ' + cookDinner)
  showOnPage('I am not home ---> ' + getDinner)
  showOnPage('<b> <--- End of global variable data ---> </b>');

  // output message

  let message = ''
  let question = 'Do I have enough minimum allowable time to make dinner? '

// determine whether to cook or get dinner based on time available

const makeDinner = function (currentTime, maxMakeDinner, minAvailTime, dinnerTime) {
  let availableTime = (maxMakeDinner - currentTime)
  let message = ''  
  if (makeDinner) {
    question = question + availableTime
    message = 'Yes, lets make dinner'
  } else if (availableTime < minAvailTime) {
    question = question + 'I dont have time to make dinner.'
    message = 'Lets get take out'
  } else if (availableTime >= minAvailTime && notHome) {
    question = question + 'I have time but I am not home'
    message = 'Unfortunatly, we need to grab take out'
  } else {
    question = question + 'Yes, I am home'
    message = 'Lets make dinner'
  }
  return `${question} <br> ${message}`;
}

// function result

let result = makeDinner(1500, 1700, 200, 1900)



  //
  
  showOnPage(question)
  showOnPage(message)
  showOnPage(result)