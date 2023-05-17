import React from "react";
import "./App.css";
import Instructions from "./component/Instructions/Instructions";
import Questions from "./component/Questions/Questions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startQuizz: false,
    };
  }

  start = () => {
    this.setState({ startQuizz: true });
  };

  render() {
    return (
      <div className="App">
        <header>Quizz App</header>
        {!this.state.startQuizz ? (
          <Instructions handleStartQuiz={this.start} />
        ) : (
          <Questions />
        )}
      </div>
    );
  }
}

export default App;
