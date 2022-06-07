const question = document.getElementById("question");
const answer = Array.from(document.getElementsByClassName('answer-text'));

let currentQuestion = {} ;
let acceptingAnswers = true;
let score = 0;
let questionCount = 0;
let availableQuestions = [];

let questions = [

    {
        question : "How many computer languages are in use?",
        answer1: "2000",
        answer2: "5000",
        answer3: "50",
        answer4: "20",
        rightAnswer: "1"
     },
     {
        question : "Which of these is not an early computer?",
        answer1: "ENIAC",
        answer2: "UNIVAC",
        answer3: "NASA",
        answer4: "SAGE",
        rightAnswer: "3"
     },
     {
        question : "Who founded Apple Computer?",
        answer1: "Stephen Fry",
        answer2: "Bill Gates",
        answer3: "Steve Jobs",
        answer4: "Stephen Hawking",
        rightAnswer: "3"
     },
     {
        question : "Which of these is not a peripheral, in computer terms?",
        answer1: "Keyboard",
        answer2: "Monitor",
        answer3: "Mouse",
        answer4: "Motherboard",
        rightAnswer: "4"
     },
     {
        question : "Which of the following is not one of the early “protocols,” or ways to use the Internet?",
        answer1: "Blogging",
        answer2: "FTP",
        answer3: "Telnet",
        answer4: "Gopher",
        rightAnswer: "1"
     },
     {
        question : "What does the Internet prefix WWW stand for?",
        answer1: "Wide Width Wickets",
        answer2: "World Wide Web",
        answer3: "Worldwide Weather",
        answer4: "Western Washington World",
        rightAnswer: "2"
     },
     {
        question : "A network designed to allow communication within an organization is called:",
        answer1: "the World Wide Web",
        answer2: "Yahoo",
        answer3: "an intranet",
        answer4: "the Internet",
        rightAnswer: "3"
     },
     {
        question : "Which of these is not a kind of computer?",
        answer1: "Apple",
        answer2: "Lenovo",
        answer3: "Toshiba",
        answer4: "Lada",
        rightAnswer: "4"
     },

];