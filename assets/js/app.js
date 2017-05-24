console.log("in");

var theQuestions = [
  { question: "Which of these companies were NOT founded in San Francisco, California?",
    choices: [
      { name: "Rdio",
        image: "../assets/images/rdio2.png" },
      { name: "Secret",
        image: "../assets/images/secret2.png" },
      { name: "Lookery",
        image: "../assets/images/lookery2.png" },
      { name: "Sonar",
        image: "../assets/images/sonar2.png" }],
    answer: "Sonar",
    answer2: this,
    link: "http://startupgraveyard.io/company/sonar/" },
    { question: "Test question 2",
      choices: [
        { name: "Rdio",
          image: "../assets/images/rdio2.png" },
        { name: "Secret",
          image: "../assets/images/secret2.png" },
        { name: "Lookery",
          image: "../assets/images/lookery2.png" },
        { name: "Sonar",
          image: "../assets/images/sonar2.png" }],
      answer: "Sonar",
      link: "http://startupgraveyard.io/company/sonar/" }
];

// variables
var currentRound = 1;
var totalPoints = 0;
var currentQuestion;
var currentURL;
var currentImage;

$(document).ready(function() {
  newQuestion();
});

function newQuestion() {
  var randNum = Math.floor(Math.random() * theQuestions.length);
  console.log(randNum);
  currentQuestion = theQuestions[randNum];

  theQuestions.splice(randNum, 1); // no repeat words
  // fill in divs with question and answers
  $('#question').html(currentQuestion.question);
  // choice one
  $('#option-one-name').text(currentQuestion.choices[0].name);
  $('#option-one-image').html("<img src=\""+ currentQuestion.choices[0].image + "\" >");
  // choice two
  $('#option-two-name').text(currentQuestion.choices[1].name);
  $('#option-two-image').html("<img src=\""+ currentQuestion.choices[1].image + "\" >");
  // choice three
  $('#option-three-name').text(currentQuestion.choices[2].name);
  $('#option-three-image').html("<img src=\""+ currentQuestion.choices[2].image + "\" >");
  // choice four
  $('#option-four-name').text(currentQuestion.choices[3].name);
  $('#option-four-image').html("<img src=\""+ currentQuestion.choices[3].image + "\" >");
}

// document ready start game
//start timer - > set intreval every 1 sec
  // stop timer at < :01


// show the question
// start the timer
// if the timer = :00 then game over
  // grab the div with the timer and setIntraval to start at certain seconds and count down
  // if the content in this div === :00
  // game over
// on the click of the wrong answer do something
  // turn the block grayscale and outline the div border in red
  // update scores
// on click of right answer do something
  // turn the outline green
  // add to points
  // reset timer
  // newQuestion()
// on click of hint do something
  // eliminate one answer

$('#click-choice-one').on('click', function(){
  if (currentQuestion.answer.toLowerCase() === $("#option-one-name").text().toLowerCase()) {
    totalPoints++;
    if (totalPoints >= 5 || totalPoints >=10 || totalPoints >= 15 ) {
      currentRound++;
      $('#round-num').text(currentRound);
    }
    $('#points-num').text(totalPoints);
  } else {
    console.log("wrong");
    $(this).css("background-color", "rgba(255, 0, 0, 0.2)");
  }
})

$('#click-choice-two').on('click', function(){
  if (currentQuestion.answer.toLowerCase() === $("#option-two-name").text().toLowerCase()) {
    totalPoints++;
    if (totalPoints >= 5 || totalPoints >=10 || totalPoints >= 15 ) {
      currentRound++;
      $('#round-num').text(currentRound);
    }
    $('#points-num').text(totalPoints);
  } else {
    console.log("wrong");
    $(this).css("background-color", "rgba(255, 0, 0, 0.2)");
  }
})

$('#click-choice-four').on('click', function(){
  console.log(this);
  if (currentQuestion.answer.toLowerCase() === $("#option-four-name").text().toLowerCase()) {
    totalPoints++;
    if (totalPoints === 5 || totalPoints === 10 || totalPoints === 15 ) {
      currentRound++;
      $('#round-num').text(currentRound);
    }
    $('#points-num').text(totalPoints);


    // grab the div and show only winner
    $('.options').css('display', "none");
    $('#selected-image').html("<img src=\""+ currentQuestion.choices[3].image + "\" >");
    // change the question to say correct
    $('#question').text("Correct!");
    // winning company
    $('#selected-company').html("<a href='" + currentQuestion.link + "' target='_blank'>" + theQuestions[0].answer + "</a>");
    // show learn more link
    $('.learn-more').css("display", "block");

  } else {
    console.log("wrong");

    // $(this).css("border", "solid 2px red");
  }
});

$('#next').on('click', function () {
  newQuestion();
  $('.learn-more').css("display", "none");
  $('.options').css("display", "block")
});
