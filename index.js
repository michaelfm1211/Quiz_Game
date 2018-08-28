
var lives = 5;
let question1 = {
    difficulty: "medium", 
    prompt: "What was the very first prototype of the very first game console called?",
    topic: "Video Games",
    correct_answer: "answer3",
    answer1: "The Brown Box",
    answer2: "Magnavox Odessy",
    answer3: "TGU#1",
    answer4: "Nintendo Switch",
    answer5: "Nintendo Entertainment System AKA Famicom",
    Name: "radioa1"
};
let question2 = {
    difficulty: "hard", 
    prompt: "Out of all our ancestors, which came out of the water first?",
    topic: "Biology",
    correct_answer: "answer1",
    answer1: "The Amphibians",
    answer2: "The fish",
    answer3: "Reptiles",
    answer4: "arthropods",
    answer5: "cnidarians",
    Name: "radioa2"
};
let question3 = {
    difficulty: "really hard", 
    prompt: "Which life came first?",
    topic: "Biology",
    correct_answer: "answer3",
    answer1: "Hynerpeton",
    answer2: "Humans",
    answer3: "Trilobites",
    answer4: "other arthropods",
    answer5: "demetrodon",
    Name: "radioa3"
};
let question4 = {
    difficulty: "hard", 
    prompt: "About how much would a trilobite fossil cost?",
    topic: "Biology",
    correct_answer: "answer4",
    answer1: "about $100,000",
    answer2: "about $800,000",
    answer3: "about $1,000,000",
    answer4: "about $1",
    answer5: "about $1000",
    Name: "radioa4"
};
let question5 = {
    difficulty: "easy", 
    prompt: "Are we descended from fish?",
    topic: "Biology",
    correct_answer: "answer1",
    answer1: "Yes",
    answer2: "No",
    answer3: "Maybe so",
    answer4: "No one knows",
    answer5: "Who cares?????!??",
    Name: "radioa5"
};

let game = [question1, question2, question3, question4, question5];
var questionCount = 0;

function handleQuizGame()
{
    $(".questions").hide();
    $(".results").hide();
    $(".lives_sec").hide();
$(".startbtn").on("click", event => {
$(".question").html("");
$(".question").append(`<h1>${game[questionCount].prompt}</h1>
<ul>
    <li>
        <input type="radio" name="radioa" value="answer1">${game[questionCount].answer1}</input>
    </li>
    <li>
         <input type="radio" name="radioa" value="answer2">${game[questionCount].answer2}</input>
     </li>
     <li>
         <input type="radio"name="radioa" value="answer3">${game[questionCount].answer3}</input>
     </li>
     <li>
         <input type="radio" name="radioa" value="answer4">${game[questionCount].answer4}</input>
     </li>
     <li>
         <input type="radio" name="radioa" value="answer9">${game[questionCount].answer5}</input>
     </li>
     `);
     $(".startbtn").hide();
     $(".welcome").hide();
     $(".questions").show();
     $(".lives_sec").show();
});

    function updateQuestion() {
        $(".question").html("");
        $(".question").append(`<h1>${game[questionCount].prompt}</h1>
<ul>
    <li>
        <input type="radio" name="${game[questionCount].Name}" value="answer1">${game[questionCount].answer1}</input>
    </li>
    <li>
         <input type="radio" name="${game[questionCount].Name}" value="answer2">${game[questionCount].answer2}</input>
     </li>
     <li>
         <input type="radio"name="${game[questionCount].Name}" value="answer3">${game[questionCount].answer3}</input>
     </li>
     <li>
         <input type="radio" name="${game[questionCount].Name}" value="answer4">${game[questionCount].answer4}</input>
     </li>
     <li>
         <input type="radio" name="${game[questionCount].Name}" value="answer9">${game[questionCount].answer5}</input>
     </li>
     `);
     $(".startbtn").hide();
     $(".welcome").hide();
     $(".questions").show();
     $(".lives_sec").show();
     $("#submitq").show();
    }
    function updateLives() {
        $(".lives").text(lives);
    }
     $("#submitq").on("click", event => {
        event.preventDefault();
        let choices = document.getElementsByTagName('input');
        for (let i=0;i<choices.length;i++) {
        
            if (choices[i].type === "radio" && choices[i].checked) {
                let value = choices[i].value;
                if (value !== game[questionCount].correct_answer) {
                        $(".results").html("");
                        $(".results").append ("<h1>Close! Try again</h1>");
                        $("#submitq").show();
                        $(".questions").show();
                        lives -= 1;
                        updateLives();
                        if (lives === 0) {
                            $("body").html('<div class="gameOver">\n<h1>GAME OVER!</h1>\n<h3>To play again, reload the page!<br></div>');
                        }
                }
                else if (value === game[questionCount].correct_answer) {
                    console.log("The answer was correct! Hiding the submit button");
                    $(".results").html("");
                    $(".results").append("<h1>Correct!</h1>");
                    lives += 1;
                    updateLives();
                    $(".results").append(`<input type="button" class="continueButton" value="Continue!">`);
                    $("#submitq").hide();
                    $('.continueButton').on('click', event => {
                        console.log("this works");
                        questionCount++;
                        updateQuestion();
                        $('.continueButton').hide();
                        $(".results").hide();
                    })

                    

                }
                if (game[questionCount].Name === "radioa5" && value === game[questionCount].correct_answer) {
                    $("body").html('<h1 class="win">You win!!</h1>');
                }
                $(".results").show();
            }
        } 
    });
    }



$(handleQuizGame);