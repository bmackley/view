const nameBox = document.getElementById('nameBox');
const greetingBox = document.getElementById('greetingBox');

const widgetHTML = `<h1>What is your name?</h1>
  First name: <input class='input-text' id="fname" type="text" name="fname"><br>
  Last name: <input class='input-text' id="lname" type="text" name="lname"><br>
  <button id='submit-button' >Submit</button>
`

function appendWidget(element, htmlText){
  element.innerHTML = htmlText;
}
//Create the Form
appendWidget(nameBox, widgetHTML)

//Show the Greeting when user clicks button
document.getElementById("submit-button").addEventListener("click", showGreeting);
function showGreeting(){
  const firstName = document.getElementById("fname").value
  const lastName = document.getElementById("lname").value
  const greetingHTML = `Nice to meet you ${firstName} ${lastName}`
  appendWidget(greetingBox, greetingHTML)
}
