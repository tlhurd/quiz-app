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



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)