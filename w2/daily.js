const showOnPage = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
  };

  // My Daily Decision
  // One daily decision I make what to do for dinner based on
  // How much time we have

  // global variables

  let currentTime = 3
  let dinnerTime = 7
  let maxMakeDinner = 5
  let availableTime = dinnerTime - currentTime
  let minAvailTime = 2
  
  // set variables

  let beHome = true
  let cookDinner = true
  let getDinner = false
  
  // output message

  let message = ''
  
  // determine whether to cook or get dinner based on time available

  if (cookDinner) {
    availableTime > minAvailTime
  } else {
    (getDinner)
  }

  // show on page

  showOnPage(
    '<b> Dinner based on time availablity:</b>'
  )
  showOnPage('Current Time ---> ' + currentTime)
  showOnPage('Dinner Time ---> ' + dinnerTime)
  showOnPage('Latest time to make dinner ---> ' + maxMakeDinner)
  showOnPage('How much time until dinner ---> ' + availableTime)
  showOnPage('Minimum allowable time to make dinner ---> ' + minAvailTime)
  showOnPage('I am home and its not too late, lets make dinner ---> ' + cookDinner)
  showOnPage('I am not home, lets get takeout ---> ' + getDinner)

  if (availableTime => minAvailTime && beHome) {
    message = 'Lets make dinner'
  } else if (availableTime < minAvailTime && beHome) {
    message = 'Lets get take out'
  } else {
    message = 'Lets make dinner'
  }