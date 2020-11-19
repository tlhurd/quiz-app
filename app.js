'use strict';
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who is the Goddess-Queen of the Underworld?',
      answers: [
        'Nyx',
        'Persephone',
        'Rhea',
        'Tartarus'
      ],
      correctAnswer: 'Persephone'
    },
    {
      question: 'What does Ariadne give to Theseus in his quest to defeat the Minotaur of Crete?',
      answers: [
        'a mirror shield',
        'a lyre',
        'a ball of thread',
        'a ring'
      ],
      correctAnswer: 'a ball of thread'
    },
    {
      question: 'What is Dionysus the god of?',
      answers: [
        'madness; ecstasy; and wine',
        'war; famine; and death',
        'spring; life; and harmony',
        'music; travel; and light'
      ],
      correctAnswer: 'madness; ecstasy; and wine'
    },
    {
      question: 'What are the trials of Psyche?',
      answers: [
        'slaying the Nemean lion; clean the Augean stables in a single day; capture the Cretan Bull; Steal the Mares of Diomedes',
        'capture the one eye of the three Graeae, retrieve the head of Medusa, rescue Andromeda',
        'drown out the Siren\'s song with music; retrieve Eurydice from the underworld',
        'sorting out a large pile of seeds in a single night; retrieving the Golden Fleece; filling a flask of water from the River Styx; returning from the Underworld with a box of beauty ointment belonging to Proserpina'
      ],
      correctAnswer: 'sorting out a large pile of seeds in a single night; retrieving the Golden Fleece; filling a flask of water from the River Styx; returning from the Underworld with a box of beauty ointment belonging to Proserpina'
    },
    {
      question: 'Odysseus is returning to his home of:',
      answers: [
        'Thrinacia',
        'Ithica',
        'Ogygia',
        'Aeaea'
      ],
      correctAnswer: 'Ithica'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  feedbackGiven: true,
  currentAnswer: '',
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateStartPage() {
  // this function will generate the start page to the DOM
  console.log('Generating start page...');

  return `
    <div class="container">
      <h2>A new challenger approaches...</h2>
      <p>A quiz to test your knowledge of Greek Mythology</p>
      <button class="button" id="startQuiz">Start Quiz</button>
    </div>
  `;
}

function generateQuestion() {
  //this function will generate the question page to the DOM
  console.log('Generating question...');

  let question = store.questions[store.questionNumber];

  let answers = question.answers.map((answer, idx) => {
    console.log(answer, idx);
  
    if (idx === 0){
      return `
      <input type="radio" id="answer${idx}" name="answer" value="${answer}" required>
      <label for="answer${idx}">${answer}</label><br>
      `;
    }

    return `
      <input type="radio" id="answer${idx}" name="answer" value="${answer}">
      <label for="answer${idx}">${answer}</label><br>
    `;
  });
  console.log(answers);
  console.log(store.questions);
  return `
  <div class="container">
  <form id="question">
    <div class="keep-score">${store.score}/${store.questionNumber} Correct</div>
    <h2>Question ${store.questionNumber + 1}</h2>
    <p>${question.question}</p>
    ${answers.join('')}
    <button type="submit">Submit Answer</button>
  </form>
  </div>
  `;
}

function generateFeedbackPage(){
  let feedback = '';
  if (store.currentAnswer === store.questions[store.questionNumber].correctAnswer) {
    feedback = 'Nice! You got it!';
  } else {
    feedback = 'Not quite..';
  }
  return `
    <div class="container">
     <h2>${feedback}</h2>
     <p>The correct answer was: ${store.questions[store.questionNumber].correctAnswer}.</p>
     <p>You have gotten ${store.score}/${store.questionNumber+1} questions right so far.</p>
     <form id="nextQuestion">
     <button type=submit class="button">Next Question<button>
     </form>
    </div>
  `;
}


function generateFinalPage() {
  //this function will generate the final page to the DOM
  let feedback = '';
  if (store.currentAnswer === store.questions[store.questionNumber].correctAnswer) {
    feedback = 'Nice! You got it!';
  } else {
    feedback = 'Not quite..';
  }
  return `
    <div class="container">
     <h2>${feedback}</h2>
     <p>The correct answer was: ${store.questions[store.questionNumber].correctAnswer}.</p>
     <p>Thanks for playing!</p>
     <p>You got ${store.score}/${store.questionNumber+1} questions right.</p>
     <form id="tryAgain">
     <button type=submit class="button">Try Again?<button>
     </form>
    </div>
  `;

}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render(){
  let html = '';
  if(store.quizStarted === false){
    html = generateStartPage();
  } else if (store.feedbackGiven === true){
    html = generateQuestion();
  } else if (store.feedbackGiven === false && store.questionNumber === store.questions.length - 1){
    html = generateFinalPage();
  } else{
    html = generateFeedbackPage();
  }
  $('main').html(html);
  
}

function main(){
  render();
  handleStartQuiz();
  handleSubmitAnswer();
  handleNextQuestion();
  handleTryAgain();
}

$(main);

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartQuiz(){
  $('main').on('click', '#startQuiz', function(event) {
    store.quizStarted = true;
    render();
  });
}

function handleSubmitAnswer(){
  console.log('Generating progress page...');
  $('main').on('submit', '#question', function(event) {
    event.preventDefault();
    store.currentAnswer = $('input[name="answer"]:checked').val();
    console.log(store.currentAnswer);
    store.feedbackGiven = false;
    let correctAnswer = store.questions[store.questionNumber].correctAnswer;
    if (store.currentAnswer === correctAnswer) {
      console.log('true');
      store.score++;
    }
    render();
  });
}

function handleNextQuestion(){
  console.log('Handling next question...');
  $('main').on('submit', '#nextQuestion', function(event){
    event.preventDefault();
    store.feedbackGiven = true;
    store.currentAnswer = '';
    store.questionNumber++;
    render();
  });
}

function handleTryAgain(){
  console.log('Handling try again...');
  $('main').on('submit', '#tryAgain', function(event){
    event.preventDefault();
    store.feedbackGiven = true;
    store.currentAnswer = '';
    store.score = 0;
    store.questionNumber = 0;
    store.quizStarted = false;
    render();
  });
}