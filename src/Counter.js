import React, { Component } from "react";
// import PropTypes from "prop-types";

export default class Counter extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    value: this.props.initialValue,
    spep: this.props.step,
    isOpen: false,
    message: new Date().toLocaleTimeString(),
    inputValue: "",
  };

  toggle = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  handleDecrement = () => {
    console.log("Decrement");
    this.setState({ value: this.state.value - this.props.step });
  };
  handleIncrement = () => {
    console.log("increment");
    // this.setState({ value: state.value + props.step });
    this.setState((prevState, props) => {
      // передача setState() через функцию
      return {
        value: prevState.value + props.step,
      };
    });
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  updateMessage = (evt) => {
    console.log(evt);

    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    const { isOpen, inputValue } = this.state;
    const { children } = this.props;
    return (
      <>
        <h3>Counter</h3>
        <button type="button" onClick={this.handleDecrement}>
          -{this.props.step}
        </button>
        <span>
          {">>"}
          {this.state.value}
          {"<<"}
        </span>
        <button type="button" onClick={this.handleIncrement}>
          +{this.props.step}
        </button>
        <div>
          <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
          {isOpen && children}
        </div>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
        <input type="text" value={inputValue} onChange={this.handleChange} />
      </>
    );
  }
}

const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);
