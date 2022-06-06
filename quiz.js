const question = document.getElementById("question");
const answer = Array.from(document.getElementsByClassName('answer-text'));

let currentQuestion = {} ;
let acceptingAnswers = true;
let score = 0;
let questionCount = 0;
let availableQuestions = [];

let questions = [];