# Personal Day Planner

## About the project

## Main Page

Below is a screenshot of the welcome page users see upon window load.

![Original Website](assets/images/main-page-record-load.png)

## Technologies Used

- HTML
- CSS
  - Bootstrap
- JavaScript
  - jQuery

## Link to GitHub Pages

[Click here!](https://conorjkelly96.github.io/javascript-code-quiz/)

## Solution Overview

### [Placeholder]

```javascript
const myQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>", "<js>", "<javascript>", "<code>"],
    correctAnswer: "<script>",
  },
```

```javascript
const answerValidation = function (event) {
  const currentTarget = event.currentTarget;
  const target = event.target;

  const correctAnswer = currentTarget.getAttribute("data-answer");
  const userAnswer = target.getAttribute("data-option");

  if (currentIndex < myQuestions.length - 1) {
    if (correctAnswer === userAnswer) {
      document.getElementById("question-element").remove();
      currentIndex++;
      renderQuestion();
      console.log(currentIndex);
      countdownClock += 5;
    } else {
      document.getElementById("question-element").remove();
      currentIndex++;
      console.log(currentIndex);
      countdownClock -= 5;
      renderQuestion();
    }
  } else {
    renderScore();
  }
};
```

### [Placeholder]

```javascript
// Render Highscore from Local Storage
const highScoreList = function () {
  const latestScores = JSON.parse(localStorage.getItem("user-input") || "[]");

  for (let i = 0; i < latestScores.length; i++) {
    const data = latestScores[i];
    const scoreList = document.createElement("p");

    scoreList.setAttribute("class", "score-tag");
    scoreList.setAttribute("id", "score-tag");
    scoreList.textContent = `Player Name: ${data.initials} || Player Score: ${data.score}`;

    const resultsDiv = document.getElementById("results-quiz-div");
    resultsDiv.appendChild(scoreList);
  }
};
```

A snapshot of the question container is below:
![Quiz Shot](assets/images/quizshot.png)

A screenshot of the game over container when time remaining hits 0.

![Local Storage](assets/images/gameover.png)

A snapshot of the leaderboard is below:

![Local Storage](assets/images/localstorage.png)
