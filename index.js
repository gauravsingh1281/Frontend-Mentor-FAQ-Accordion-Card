let questions = document.querySelectorAll(".question");
questions.forEach((element) => {
  element.addEventListener("click", function () {
    let questionId = this.getAttribute("id");
    let answerElement = document.getElementById(`answer${questionId}`);
    let arrowElement = document.getElementById(`arrow${questionId}`);

    // Close all other answers
    questions.forEach((el) => {
      let otherQuestionId = el.getAttribute("id");
      if (otherQuestionId !== questionId) {
        let otherAnswerElement = document.getElementById(
          `answer${otherQuestionId}`
        );
        let otherArrowElement = document.getElementById(
          `arrow${otherQuestionId}`
        );
        otherAnswerElement.classList.add("max-h-0", "opacity-0");
        otherAnswerElement.classList.remove("max-h-[500px]", "opacity-100");
        otherArrowElement.classList.remove("rotate-180");
      }
    });

    // Toggle the clicked answer
    if (answerElement.classList.contains("max-h-0")) {
      answerElement.classList.remove("max-h-0", "opacity-0");
      answerElement.classList.add("max-h-[500px]", "opacity-100");
    } else {
      answerElement.classList.add("max-h-0", "opacity-0");
      answerElement.classList.remove("max-h-[500px]", "opacity-100");
    }
    arrowElement.classList.toggle("rotate-180");
  });
});
