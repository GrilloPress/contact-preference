function answerQuestion(questionID, answer, nextID){

  // Hide options in question container
  // Add border radius to question
  // Reveal blue box
  // Put answers in blue box underneath container
  // Reveal next question
  // Scroll to next question

  $( "#" + questionID ).find('.question-box__inner-container').toggle();
  $( "#" + questionID ).find('.question-box__title').css('border-radius', '6px');
  $( "#answer" + questionID ).toggle().find('.answer').text( answer );
  $( "#" + nextID ).toggle();
  jumpTo(nextID, 10);
}
