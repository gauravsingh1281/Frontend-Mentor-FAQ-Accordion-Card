let questions = document.querySelectorAll(".question");
questions.forEach((Element) => {
  Element.addEventListener("click", function () {
    let questionId = this.getAttribute("id");
    let answerId = `answer${questionId}`;
    let arrowId = `arrow${questionId}`;
    document.getElementById(questionId).classList.toggle("font-semibold");
    document.getElementById(answerId).classList.toggle("hidden");
    document.getElementById(arrowId).classList.toggle("rotate-180");
  });
});
