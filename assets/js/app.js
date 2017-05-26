// var json = $.getJSON("graveyard.json");

var questions = [
    { id: 00,
      question: "This company offered a platform to share personal secrets with other users anonymously.",
      choices: [
        { name: "Wantful",
          image: "assets/images/wantful.png",
          url: "http://startupgraveyard.io/company/wantful/" },
        { name: "Secret",
          image: "assets/images/secret.png",
          url: "http://startupgraveyard.io/company/secret/" },
        { name: "Lookery",
          image: "assets/images/lookery.png",
          url: "http://startupgraveyard.io/company/lookery/" },
        { name: "Sonar",
          image: "assets/images/sonar.png",
          url: "http://startupgraveyard.io/company/sonar/" }],
        answer: { name: "Secret",
          image: "assets/images/secret.png",
          url: "http://startupgraveyard.io/company/secret/" }
    },
    { id: 01,
      question: "Which of the following were NOT software companies?",
      choices: [
        { name: "Poliana",
          image: "assets/images/poliana.png",
          url: "http://startupgraveyard.io/company/poliana/" },
        { name: "Wantful",
          image: "assets/images/wantful.png",
          url: "http://startupgraveyard.io/company/wantful/" },
        { name: "Secret",
          image: "assets/images/secret.png",
          url: "http://startupgraveyard.io/company/secret/" },
        { name: "Lumos",
          image: "assets/images/lumos.png",
          url: "http://startupgraveyard.io/company/lumos/" }],
      answer: {
        name: "Lumos",
        image: "assets/images/lumos.png",
        url: "http://startupgraveyard.io/company/lumos/" }
    },
    { id: 02,
      question: "Which of these companies were NOT founded in San Francisco, California?",
      choices: [
        { name: "Rdio",
          image: "assets/images/rdio.png",
          url: "http://startupgraveyard.io/company/rdio/" },
        { name: "Secret",
          image: "assets/images/secret.png",
          url: "http://startupgraveyard.io/company/secret/" },
        { name: "Lookery",
          image: "assets/images/lookery.png",
          url: "http://startupgraveyard.io/company/lookery/" },
        { name: "Sonar",
          image: "assets/images/sonar.png",
          url: "http://startupgraveyard.io/company/sonar/" }],
      answer: {
        name: "Sonar",
          image: "assets/images/sonar.png",
          url: "http://startupgraveyard.io/company/sonar/" }
    },
    { id: 03,
      question: "Which of the following startups were NOT eCommerce?",
      choices: [
        { name: "Alikolo",
          image: "assets/images/alikolo.png",
          url: "http://startupgraveyard.io/company/alikolo/" },
        { name: "99Dresses",
          image: "assets/images/99dresses.png",
          url: "http://startupgraveyard.io/company/99dresses/" },
        { name: "Poliana",
          image: "assets/images/poliana.png",
          url: "http://startupgraveyard.io/company/poliana/" },
        { name: "Totsy",
          image: "assets/images/totsy.png",
          url: "http://startupgraveyard.io/company/totsy/" }],
      answer: {
        name: "Poliana",
        image: "assets/images/poliana.png",
        url: "http://startupgraveyard.io/company/poliana/" }
    },
    { id: 04,
      question: "Which of these startups was not based in the United States?",
      choices: [
        { name: "Grooveshark",
          image: "assets/images/grooveshark.png",
          url: "http://startupgraveyard.io/company/grooveshark/" },
        { name: "Exec",
          image: "assets/images/exec.png",
          url: "http://startupgraveyard.io/company/exec/" },
        { name: "Homejoy",
          image: "assets/images/homejoy.png",
          url: "http://startupgraveyard.io/company/homejoy/" },
        { name: "99Dresses",
          image: "assets/images/99dresses.png",
          url: "http://startupgraveyard.io/company/99dresses/" }],
      answer: {
        name: "99Dresses",
        image: "assets/images/99dresses.png",
        url: "http://startupgraveyard.io/company/99dresses/" }
  },
  { id: 05,
    question: "Which of the following startups were NOT hardware based?",
    choices: [
      { name: "Grooveshark",
        image: "assets/images/grooveshark.png",
        url: "http://startupgraveyard.io/company/grooveshark/" },
      { name: "Calxeda",
        image: "assets/images/calxeda.png",
        url: "http://startupgraveyard.io/company/calxeda/" },
      { name: "Lumos",
        image: "assets/images/lumos.png",
        url: "http://startupgraveyard.io/company/lumos/" },
      { name: "Wattage",
        image: "assets/images/wattage.png",
        url: "http://startupgraveyard.io/company/wattage/" }],
    answer: {
      name: "Grooveshark",
      image: "assets/images/grooveshark.png",
      url: "http://startupgraveyard.io/company/grooveshark/" }
},
{ id: 05,
  question: "Which of the following startups were music based?",
  choices: [
    { name: "Sonar",
      image: "assets/images/sonar.png",
      url: "http://startupgraveyard.io/company/sonar/" },
    { name: "Rdio",
      image: "assets/images/rdio.png",
      url: "http://startupgraveyard.io/company/rdio/" },
    { name: "Bawte",
      image: "assets/images/bawte.png",
      url: "http://startupgraveyard.io/company/bawte/" },
    { name: "Nouncer",
      image: "assets/images/nouncer.png",
      url: "http://startupgraveyard.io/company/nouncer/" }],
  answer: {
    name: "Rdio",
    image: "assets/images/rdio.png",
    url: "http://startupgraveyard.io/company/rdio/" }
},
{ id: 06,
  question: "Which of the following startups did NOT have talent acquisition issues?",
  choices: [
    { name: "99Dresses",
      image: "assets/images/99dresses.png",
      url: "http://startupgraveyard.io/company/99dresses/" },
    { name: "Rdio",
      image: "assets/images/rdio.png",
      url: "http://startupgraveyard.io/company/rdio/" },
    { name: "Nouncer",
      image: "assets/images/nouncer.png",
      url: "http://startupgraveyard.io/company/nouncer/" },
    { name: "Wattage",
      image: "assets/images/wattage.png",
      url: "http://startupgraveyard.io/company/wattage/" }],
  answer: {
    name: "Wattage",
    image: "assets/images/wattage.png",
    url: "http://startupgraveyard.io/company/wattage/" }
},
{ id: 07,
  question: "This company created a web application that tried to visualize political influence through data.",
  cchoices: [
    { name: "Berg",
      image: "assets/images/berg.png",
      url: "http://startupgraveyard.io/company/berg/" },
    { name: "admazely",
      image: "assets/images/admazely.png",
      url: "http://startupgraveyard.io/company/admazely/" },
    { name: "Poliana",
      image: "assets/images/poliana.png",
      url: "http://startupgraveyard.io/company/poliana/" },
    { name: "Monitor110",
      image: "assets/images/monitor110.png",
      url: "http://startupgraveyard.io/company/monitor110/" }],
  answer: {
    name: "Poliana",
    image: "assets/images/poliana.png",
    url: "http://startupgraveyard.io/company/poliana/" }
},
{ id: 08,
  question: "This company created an online platform connecting professional cleaners with clients for $20/hour.",
  choices: [
    { name: "Totsy",
      image: "assets/images/totsy.png",
      url: "http://startupgraveyard.io/company/totsy/" },
    { name: "Exec",
      image: "assets/images/exec.png",
      url: "http://startupgraveyard.io/company/exec/" },
    { name: "Homejoy",
      image: "assets/images/homejoy.png",
      url: "http://startupgraveyard.io/company/homejoy/" },
    { name: "Bawte",
      image: "assets/images/bawte.png",
      url: "http://startupgraveyard.io/company/bawte/" }],
  answer: {
    name: "Homejoy",
    image: "assets/images/homejoy.png",
    url: "http://startupgraveyard.io/company/homejoy/" }
  },
{ id: 09,
  question: "Which company’s failure was NOT due to law issues?",
  choices: [
    { name: "Rdio",
      image: "assets/images/rdio.png",
      url: "http://startupgraveyard.io/company/rdio/" },
    { name: "Grooveshark",
      image: "assets/images/grooveshark.png",
      url: "http://startupgraveyard.io/company/grooveshark/" },
    { name: "ArsDigita",
      image: "assets/images/arsdigita.png",
      url: "http://startupgraveyard.io/company/arsdigita/" },
    { name: "Homejoy",
      image: "assets/images/homejoy.png",
      url: "http://startupgraveyard.io/company/homejoy/" }],
  answer: {
    name: "Rdio",
    image: "assets/images/rdio.png",
    url: "http://startupgraveyard.io/company/rdio/" }
  },
  { id: 10,
    question: "This company was known for making the “little printer”, a small IoT printing device.",
    choices: [
      { name: "Lumos",
        image: "assets/images/lumos.png",
        url: "http://startupgraveyard.io/company/lumos/" },
      { name: "Wattage",
        image: "assets/images/wattage.png",
        url: "http://startupgraveyard.io/company/wattage/" },
      { name: "Poliana",
        image: "assets/images/poliana.png",
        url: "http://startupgraveyard.io/company/poliana/" },
      { name: "Berg",
        image: "assets/images/berg.png",
        url: "http://startupgraveyard.io/company/berg/" }],
    answer: {
      name: "Berg",
      image: "assets/images/berg.png",
      url: "http://startupgraveyard.io/company/berg/" }
    }
  ];

// variables
var currentRound = 1;
var totalPoints = 0;
var currentQuestion;
var currentURL;
var currentImage;

$(document).ready(function() {
  newQuestion();
  startTimer();
});

function newQuestion() {

  var randNum = Math.floor(Math.random() * questions.length);
  console.log(randNum);
  currentQuestion = questions[randNum];
  $('#next').hide();

  questions.splice(randNum, 1); // no repeat words
  $(".answer-choices").fadeIn(500);
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

  $('#click-choice-one').on('click', function(){
    $(".answer-choices").fadeOut(500);
    if (currentQuestion.answer.name.toLowerCase() === $("#option-one-name").text().toLowerCase()) {
      totalPoints++;
      if (totalPoints === 5 || totalPoints === 10 || totalPoints === 15 ) {
        currentRound++;
        $('#round-num').text(currentRound);
      }
      $('#points-num').text(totalPoints);
      // grab the div and show only winner
      $('.options').css('display', "none");
      $('#selected-image').html("<img src=\""+ currentQuestion.answer.image + "\" >");
      // change the question to say correct
      $('#question').text("Correct!");
      // winning company
      $('#selected-company').html("<a href='" + currentQuestion.answer.url + "' target='_blank'>" + currentQuestion.answer.name + "</a>");
      // show learn more link
      $('.learn-more').css("display", "block");

    } else {
      console.log("wrong");
      // grab the div and show only winner
      $('.options').css('display', "none");
      $('#selected-image').html("<img src=\""+ currentQuestion.choices[0].image + "\" >");
      // change the question to say correct
      $('#question').text("Incorrect!");
      // winning company
      $('#selected-company').html("<a href='" + currentQuestion.choices[0].url + "' target='_blank'>" + currentQuestion.choices[0].name + "</a>");
      // show learn more link
      $('.learn-more').css("display", "block");

    }
    $('#next').show();
    stop();
  });

  $('#click-choice-two').on('click', function(){
    $(".answer-choices").fadeOut(500);
    if (currentQuestion.answer.name.toLowerCase() === $("#option-two-name").text().toLowerCase()) {
      totalPoints++;
      if (totalPoints === 5 || totalPoints === 10 || totalPoints === 15 ) {
        currentRound++;
        $('#round-num').text(currentRound);
      }
      $('#points-num').text(totalPoints);
      // grab the div and show only winner
      $('.options').css('display', "none");
      $('#selected-image').html("<img src=\""+ currentQuestion.answer.image + "\" >");
      // change the question to say correct
      $('#question').text("Correct!");
      // winning company
      $('#selected-company').html("<a href='" + currentQuestion.answer.url + "' target='_blank'>" + currentQuestion.answer.name + "</a>");
      // show learn more link
      $('.learn-more').css("display", "block");

    } else {
      console.log("wrong");
      // grab the div and show only winner
      $('.options').css('display', "none");
      $('#selected-image').html("<img src=\""+ currentQuestion.choices[1].image + "\" >");
      // change the question to say correct
      $('#question').text("Incorrect!");
      // winning company
      $('#selected-company').html("<a href='" + currentQuestion.choices[1].url + "' target='_blank'>" + currentQuestion.choices[1].name + "</a>");
      // show learn more link
      $('.learn-more').css("display", "block");

    }
    $('#next').show();
    stop();
  });

  $('#click-choice-three').on('click', function(){
    $(".answer-choices").fadeOut(500);
    if (currentQuestion.answer.name.toLowerCase() === $("#option-three-name").text().toLowerCase()) {
      totalPoints++;
      if (totalPoints === 5 || totalPoints === 10 || totalPoints === 15 ) {
        currentRound++;
        $('#round-num').text(currentRound);
      }
      $('#points-num').text(totalPoints);
      // grab the div and show only winner
      $('.options').css('display', "none");
      $('#selected-image').html("<img src=\""+ currentQuestion.answer.image + "\" >");
      // change the question to say correct
      $('#question').text("Correct!");
      // winning company
      $('#selected-company').html("<a href='" + currentQuestion.answer.url + "' target='_blank'>" + currentQuestion.answer.name + "</a>");
      // show learn more link
      $('.learn-more').css("display", "block");

    } else {
      console.log("wrong");
      // grab the div and show only winner
      $('.options').css('display', "none");
      $('#selected-image').html("<img src=\""+ currentQuestion.choices[2].image + "\" >");
      // change the question to say correct
      $('#question').text("Incorrect!");
      // winning company
      $('#selected-company').html("<a href='" + currentQuestion.choices[2].url + "' target='_blank'>" + currentQuestion.choices[2].name + "</a>");
      // show learn more link
      $('.learn-more').css("display", "block");
    }
    $('#next').show();
    stop();
  });

$('#click-choice-four').on('click', function(){
  $(".answer-choices").fadeOut(500);
  if (currentQuestion.answer.name.toLowerCase() === $("#option-four-name").text().toLowerCase()) {
    totalPoints++;
    if (totalPoints === 5 || totalPoints === 10 || totalPoints === 15 ) {
      currentRound++;
      $('#round-num').text(currentRound);
    }
    $('#points-num').text(totalPoints);
    // grab the div and show only winner
    $('.options').css('display', "none");
    $('#selected-image').html("<img src=\""+ currentQuestion.answer.image + "\" >");
    // change the question to say correct
    $('#question').text("Correct!");
    // winning company
    $('#selected-company').html("<a href='" + currentQuestion.answer.url + "' target='_blank'>" + currentQuestion.answer.name + "</a>");
    // show learn more link
    $('.learn-more').css("display", "block");

  } else {
    console.log("wrong");
    // grab the div and show only winner
    $('.options').css('display', "none");
    $('#selected-image').html("<img src=\""+ currentQuestion.choices[3].image + "\" >");
    // change the question to say correct
    $('#question').text("Correct!");
    // winning company
    $('#selected-company').html("<a href='" + currentQuestion.choices[3].url + "' target='_blank'>" + currentQuestion.choices[3].name + "</a>");
    // show learn more link
    $('.learn-more').css("display", "block");
  }
  $('#next').show();
  stop();
});

$('#next').on('click', function () {

  if (questions.length < 1) {
    $('#question').text("That's all the questions we got for now!")
    $('.options').css('display', "none");
    $('#selected-image').html("<h4><a href='http://startupgraveyard.io/' target='_blank'>Visit the Graveyard</a>");
    $('#learn-more-text').html("<h4><a href='https://ha10.github.io/graveyard-trivia/'>Play Again</a>");
    return;
  } else {
    newQuestion();
    $('.learn-more').css("display", "none");
    $('.options').css("display", "block");
    startTimer();
  }

});

// Tick Tock  //
var timer = 30;
var intervalId;

function startTimer () {
  timer = 30;
  $("#time-num").text(":" + timer);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  timer--;
  $("#time-num").text(":" + timer);
  //  Once number hits zero...
  if (timer === 0) {
    stop();
    $(".answer-choices").fadeOut(1000);
    $("#question").html("<p>Time's Up!</p><p>Click <strong>Next</strong> to continue.</p>");
    $("#learn-more-text").text("Click next to continue.");
    $("#next").fadeIn(1000);
  }
}

function stop() {
  clearInterval(intervalId);
}

$(".choices").on("click", stop);
$("#resume").on("click", startTimer);
