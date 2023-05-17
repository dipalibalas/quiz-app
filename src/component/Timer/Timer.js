import React from "react";
import "./Timer.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    return <div className="timerBody">{this.state.count}</div>;
  }

  shouldComponentUpdate() {
    return this.state.count > 0 && this.state.count < 30;
  }

  startTimer = () => {
    this.countInterval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  };

  componentDidMount() {
    this.startTimer();

    this.outerInterval = setInterval(() => {
      clearInterval(this.countInterval);
      this.setState({ count: 1 });
      this.startTimer();
      this.props.updateQuestion();
    }, 20000);
  }

  componentWillUnmount() {
    clearInterval(this.countInterval);
    clearInterval(this.outerInterval);
  }

  componentWillReceiveProps() {
    clearInterval(this.countInterval);
    clearInterval(this.outerInterval);

    this.outerInterval = setInterval(() => {
      clearInterval(this.countInterval);
      this.setState({ count: 1 });
      this.startTimer();
      this.props.updateQuestion();
    }, 30000);

    this.setState({ count: 1 });
    this.startTimer();
  }
}

export default Timer;
