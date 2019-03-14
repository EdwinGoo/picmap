import React, { Component } from 'react';

export class TestDataFromDB extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleState: false, ok: 0, no: 0 };
    // this.clickToggle = this.clickToggle.bind(this);
  }

  // clickToggle() {
  clickToggle = () => {
    this.setState(prevToggle => ({
      isToggleState: !prevToggle.isToggleState,
    }));
  };

  handleDecrement3Ok = () => {
    this.changeCountOk();
    this.changeCountOk();
    this.changeCountOk();
  };

  handleDecrement3No = () => {
    this.changeCountNo();
    this.changeCountNo();
    this.changeCountNo();
  };

  changeCountOk = () => {
    this.setState(prevNo => ({
      ok: prevNo.ok - 1,
    }));
  };

  changeCountNo = () => {
    this.setState({ no: this.state.no - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.clickToggle}>
          {this.state.isToggleState ? 'clickToggle ON' : 'clickToggle OFF'}
        </button>
        <button onClick={this.handleDecrement3Ok}>{this.state.ok}</button>
        <button onClick={this.handleDecrement3No}>{this.state.no}</button>
      </div>
    );
  }
}

export default TestDataFromDB;

// https://css-tricks.com/understanding-react-setstate/
