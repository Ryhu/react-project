import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'; 
import Display from './components/Display'


class App extends Component {

  handleOnClick = event => {
    this.props.increaseCount();
  };

  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { status: state.status };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(App);