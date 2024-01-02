import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    console.log('1. Constructor');
    this.state = {
      message: 'Hello, React Lifecycle!',
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('2. getDerivedStateFromProps');
    console.log('Next Props:', nextProps);
    console.log('Next State:', nextState);
    return null;
  }

  componentDidMount() {
    console.log('3. componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('4. shouldComponentUpdate');
    console.log('Next Props:', nextProps);
    console.log('Next State:', nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('5. getSnapshotBeforeUpdate');
    console.log('Prev Props:', prevProps);
    console.log('Prev State:', prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('6. componentDidUpdate');
    console.log('Prev Props:', prevProps);
    console.log('Prev State:', prevState);
    console.log('Snapshot:', snapshot);
  }

  componentWillUnmount() {
    console.log('7. componentWillUnmount');
  }

  handleButtonClick = () => {
    this.setState({
      message: 'Updated message after button click!',
    });
  };

  render() {
    console.log('8. Render');
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleButtonClick}>Update Message</button>
      </div>
    );
  }
}

export default LifecycleDemo;
