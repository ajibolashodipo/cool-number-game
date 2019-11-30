//to load the page from the very top. Every single time
$(window).on("beforeunload", function() {
  $(window).scrollTop(0);
});
//Global Scoped Variable
var globalVar = {};

//variable declaration
var firstSubmit = document.getElementById("first-submit");
var secondSubmit = document.getElementById("second-submit");
var thirdSubmit = document.getElementById("third-submit");
var finalOne = document.getElementById("result-num1");
var finalTwo = document.getElementById("result-num2");
var playerNameOne = document.getElementById("player-1-name");
var playerNameTwo = document.getElementById("player-2-name");
var summation = document.getElementById("sum");
var playerOneRename = document.querySelector("#player-rename-1");
var playerTwoRename = document.querySelector("#player-rename-2");
var display1 = document.querySelector("#instructions");
var display2 = document.querySelector(".conclusion");
var displayImage = document.querySelector("#display-image");
var loadResults = document.querySelector("#loading-result");
var proceed = document.querySelector("#proceed-1");
var footerDept = document.querySelector("#footer-department");
var footerCorrect = document.querySelector(".footer-correct");
var footerSuccess = document.querySelector(".footer-success");
var footerBtnRed = document.querySelector("#footer-button-red");
var footerBtnGreen = document.querySelector("#footer-button-green");
var footerItself = document.getElementById("footer-section");
var firstAlert = document.querySelector("#first-alert");
var secondAlert = document.querySelector("#second-alert");
var thirdAlert = document.querySelector("#third-alert");

//event listeners
firstSubmit.addEventListener("click", firstSub);
secondSubmit.addEventListener("click", secondSub);
thirdSubmit.addEventListener("click", thirdSub);

$(".footer-correct").click(function() {
  var divPosition2 = $(".footer-correct").offset();
  $("html,body").animate({ scrollTop: divPosition2.top }, 1200);
  //console.log("firstffff" + divPosition2.top);
  $(".footer-success").fadeIn(2000);
});

footerBtnRed.addEventListener("click", reloadPage);

// functions functions
function reloadPage(e) {
  //to reload the page
  window.location.reload();

  //to ensure the page begins from the very top position
  $(document).ready(function() {
    $(window).scrollTop(0);
  });
}

function firstSub(e) {
  //
  // for bringing other sections into view
  var divPosition1 = $("#first-submit").offset();
  $("html,body").animate({ scrollTop: divPosition1.top + 120 }, 1200);
  //console.log("first" + divPosition1.top);

  //prevents default submission of form
  e.preventDefault();
  var fs = playerNameOne.value;

  //console.log(fs);
  var ss = playerNameTwo.value;

  if (!fs || !ss) {
    firstAlert.style.visibility = "visible";
    setTimeout(function() {
      firstAlert.style.visibility = "hidden";
    }, 2000);

    return;
  } else {
    display1.style.display = "block";

    //assigning values to the global variable
    globalVar.first = fs;
    globalVar.second = ss;

    return {
      first: fs,
      second: ss
    };
  }
}
//in a smart bid to avoid calling function sub1 inside function sub3, i am placing
//a variable that calls function sub1 outside of any functions, thus putting it in the global space and making it ripe for assessment by any gaddem function

// var ajibola = firstSub();
// console.log(ajibola);

//Nahh fam. Ambitious but didn't work. Above are the commented remains of my implementation

function secondSub(e) {
  //prevents default submission of form
  e.preventDefault();
  var sum = summation.value;
  var sumNumber = Number(sum);

  //to protect against empty values and non-numbers
  if (sum == "" || !(typeof sumNumber === "number")) {
    //display error function
    secondAlert.style.display = "block";

    setTimeout(function() {
      secondAlert.style.display = "none";
    }, 2000);

    return;
  }

  //to protect against arbitrary values
  if (sumNumber < 68 || sumNumber > 156) {
    thirdAlert.style.display = "block";

    setTimeout(function() {
      thirdAlert.style.display = "none";
    }, 2000);

    return;
  }

  var tempNum = sum - 57;

  //show loader till setTimeout function kicks in
  loadResults.style.display = "block";

  //for repeated clicks on Compute, this line hides the final result while shit loads
  display2.style.display = "none";
  footerSuccess.style.display = "none";
  footerDept.style.display = "none";

  //set timeout for loader and for displaying result
  setTimeout(function() {
    //for repeated clicks on Compute, this line shows the final result after shit loads
    loadResults.style.display = "none";

    // Results jquery fade in
    $(".conclusion").fadeIn(1200);

    //footer buttons jquery fade in
    $("#footer-department").fadeIn(2500);
    //spacing to avoid confusion
  }, 2500);

  //convert input string to number for further processing
  var tempString = tempNum.toString();
  var tempArr = tempString.split("");

  finalOne.innerHTML = tempArr[0];
  finalTwo.innerHTML = tempArr[1];

  //call first function to get player names inputed previously
  //var ajibola = firstSub(e);

  // an attempt at implementing download scroll on click
  var divPosition2 = $("#second-submit").offset();
  $("html,body").animate({ scrollTop: divPosition2.top + 120 }, 1200);
  //console.log("second " + divPosition2.top);

  //displaying the results in the HTML
  // globalVar.first = fs;
  // globalVar.second = ss;

  playerOneRename.innerHTML = `${globalVar.first}, you chose:  `;
  playerTwoRename.innerHTML = `${globalVar.second}, you chose:  `;
}
function thirdSub(e) {
  // an attempt at implementing download scroll on click
  var divPosition3 = $("#third-submit").offset();
  $("html,body").animate({ scrollTop: divPosition3.top + 120 }, 1200);
  //console.log("third" + divPosition3.top);

  //secondSubmit.scrollIntoView();
  e.preventDefault();
  proceed.style.display = "block";
}
