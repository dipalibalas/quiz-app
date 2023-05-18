import React from "react";
import "./Question.css";
import Data from "../../Data/Data.js";
import QuestionCard from "./QuestionCard.js";
import Timer from "../Timer/Timer";

class QuizBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: Data(),
      score: 0,
      currentQuestionId: 0,
      resetTimer: true,
      correctAnswerList: [],
    };
  }

  selectedAnswer = (event, id) => {
    let score = this.state.score;
    const { answer } = this.state.Data[id];
    if (event.target.textContent === answer) {
      score += 3;
      this.setState({ score: score });
      this.setState({
        correctAnswerList: [...this.state.correctAnswerList, answer],
      });
    } else {
      score -= 1;
      this.setState({ score: score });
      this.setState({
        correctAnswerList: [...this.state.correctAnswerList, answer],
      });
    }

    this.updateQuestion();
  };

  updateQuestion = () => {
    let id = this.state.currentQuestionId;
    id += 1;
    this.setState({
      currentQuestionId: id,
    });
  };

  reset = () => {
    this.setState({
      score: 0,
      currentQuestionId: 0,
      correctAnswerList: [],
    });
  };

  render() {
    if (this.state.currentQuestionId <= this.state.Data.length - 1) {
      return (
        <div className="quiz-container">
          <div className="scoreTimerWrapper">
            <span className="score">Score: {this.state.score}</span>
            <Timer
              resetTimer={this.state.resetTimer}
              updateQuestion={this.updateQuestion}
            ></Timer>
          </div>
          <div className="quiz-body">
            <QuestionCard
              content={this.state.Data[this.state.currentQuestionId]}
              selectedAnswer={this.selectedAnswer}
            ></QuestionCard>
          </div>
        </div>
      );
    } else {
      return (
        <div className="quiz-container">
          <div className="endPopup">
            {this.state.score >= 20 && (
              <h3>Congratulations!! You have cleared the test.</h3>
            )}
            {this.state.score < 20 && (
              <h3>Sorry!! You have not cleared the test. Please try again.</h3>
            )}
            <p className="popup-score">Score: {this.state.score}</p>
            <span className="score">Correct Answer: </span>

            {this.state.correctAnswerList.map((correctAnswer, index) => {
              return (
                <p key={index} className="answer-list">
                  {correctAnswer}
                </p>
              );
            })}

            <button onClick={this.reset} className="reset-button">
              RESET
            </button>
          </div>
        </div>
      );
    }
  }
}

export default QuizBody;
