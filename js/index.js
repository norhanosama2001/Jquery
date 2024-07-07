// Side-bar control
$(".open").on("click", function () {
  $(".sideBar").animate({ width: "show" }, 1000);
  $(".open").animate({ left: "15%" }, 1000);
});

$(".side-content a").on("click", function () {
  $(".sideBar").animate({ width: "hide" }, 1000);
  $(".open").animate({ left: "1%" }, 1000);
});
// pragraphs control
$(function () {
  $("div.paragrapg").not(":first").hide();
  $(".title").on("click", function () {
    var nextParagraph = $(this).next("div.paragrapg");
    if (nextParagraph.is(":visible")) {
      nextParagraph.slideUp(1000);
    } else {
      $("div.paragrapg").slideUp(1000);
      nextParagraph.slideToggle(1000);
    }
  });
});

// count down


$(function () {
  startCountdown();
});

function startCountdown() {
  let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
  let countdownfunction = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#card1").text(days + " D");
    $("#card2").text(hours + " H");
    $("#card3").text(minutes + " M");
    $("#card4").text(seconds + " S");

    if (distance < 0) {
      clearInterval(countdownfunction);
      $("#countdown").text("CountDown Done !!!");
    }
  }, 1000);
}


// contrlo how many charcters
$(function () {
  function updateCharCount() {
    let text = $("#myTextArea").val();
    let countedChars = text.length;
    let remainingCharacters = 100 - countedChars; 
    $("#charCount").text(remainingCharacters );
    if (countedChars >= 100) {
      $("#myTextArea").attr("maxlength", 100); 
      $("#charCount").text("Maximum characters reached");
    } else {
      $("#myTextArea").removeAttr("maxlength"); 
    }
  }
  $("#myTextArea").on("input", function () {
    updateCharCount();
  });
  updateCharCount();
});


// control scroll

$("#about").on("click", function () {
  console.log("fgfg");
    $("body").animate({scrollTop:500},2000)
});

