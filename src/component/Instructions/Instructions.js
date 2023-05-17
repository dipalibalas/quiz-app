import React from "react";
import "./Instruction.css";

export default class Instructions extends React.Component {
  render() {
    return (
      <div className="instruction-container">
        <div className="start-popup">
          <div className="instructions">
            <ul className="instruction-list">
              <h2 className="instruction-title">Instructions:</h2>
              <li>
                <p>
                  Each question has <strong>30 seconds</strong> timer.
                </p>
              </li>
              <li>
                <p>
                  If question is <span>NOT answered</span> in 30 seconds, no
                  points will be awarded or deducted.
                </p>
              </li>
              <li>
                <p>
                  If question is <span>answered incorrectly</span>,
                  <strong> 1 point</strong> will be
                  <strong> deducted</strong> from score.
                </p>
              </li>
              <li>
                <p>
                  <span>Correct answer</span> will be awarded with
                  <strong> 3 points</strong>.
                </p>
              </li>
              <li>
                <p>
                  At the End of Quiz, Score will be displayed and a option to
                  <strong> restart</strong> the quiz will be given.
                </p>
              </li>
              <li>
                <p>Max Score: 30, Min Score: -10</p>
              </li>
              <li>
                <p>
                  Tip: Read the <strong>Question Type</strong> before answering
                  the question.
                </p>
              </li>
            </ul>
          </div>
          <button
            onClick={() => this.props.handleStartQuiz()}
            className="start-button"
          >
            START
          </button>
        </div>
      </div>
    );
  }
}
