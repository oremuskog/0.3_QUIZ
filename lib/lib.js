//
// lib/lib.js
//
var Question = function (questionObj) {
    this.value = {
      text: "Question",
      answers: []
    };
  
    this.selectedAnswer = null;
    this.html = null;
    this.questionText = null;
    this.questionAnswers = null;
    this.questionFeedback = null;
  
    this.value = Object.assign(this.value, questionObj);

    this.create = function (){
        this.html = document.createElement("div");
        this.html.classList.add("question");

        this.questionText = document.createElement("h2");
        this.questionText.textContent = this.value.text;

        this.questionAnswers = document.createElement("div");
        this.questionAnswers.classList.add("answers");

        for (let i = 0; i < this.value.answers.length; i++) {
          const ansObj = this.value.answers[i];
          let answer = createAnswer(ansObj);

          answer.onclick = (ev) => {
            if (this.selectedAnswer !== null) {
                this.selectedAnswer.html.classList.remove("selected");
            }

            answer.classList.add("selected");

            this.html.dispatchEvent(new CustomEvent("question-answered", {detail: {
                  answer: ansObj,
                  answerHtml: answer
            }}));
          };

          this.questionAnswers.appendChild(answer);
        }
    

        this.questionFeedback = document.createElement("div");
        this.questionFeedback.classList.add("question-feedback");

        this.html.appendChild(this.questionText);
        this.html.appendChild(this.questionAnswers);
        this.html.appendChild(this.questionFeedback);
    }

    function createAnswer(obj) {
      this.value = {
        text: "Answer",
        isCorrect: false
      };

      this.value = Object.assign(this.value, obj);

      this.html = document.createElement("button");
      this.html.classList.add("answer");

      this.html.textContent = this.value.text;

      return this.html;
    }
};