import React from 'react';
import logo from './logo.svg';
import './App.css';

// We import our actions for our redux store and the 'connect'
// used at the end to connect our component to the redux store
import {
  toggleFunc,
  incFunc,
  decFunc,
  resetFunc,
  setFunc} from './RedEx';
import {connect} from 'react-redux';

class App extends React.Component{

  // We initiate the component state value 'input state'
  // to be send through the action of the redux store
  state = {inputState: ""}

  // Function for the form used below to send data to the
  // redux store
  submitState = (event) => {
    event.preventDefault();
    this.props.setReduxState(this.state.inputState)
  }

  // Function used in the input text of the form
  changeText = (event) => {
    this.setState({
        inputState : event.target.value
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/*
            Here we introduce 4 buttons that interact with the actions
            from the redux store
          */}
          <div>
            <button onClick={this.props.toggleReduxState}>
              Toggle
            </button>
            <button onClick={this.props.incReduxNumber}>
              Increment
            </button>
            <button onClick={this.props.decReduxNumber}>
              Decrement
            </button>
            <button onClick={this.props.resetReduxState}>
              Reset
            </button>
          </div>
          {/*
            Here we introduce a form to interact with the action
            setFunc from the redux store
          */}
          <form onSubmit={this.submitState}>
            <input type="text"
                   placeholder="Next state?"
                   onChange={this.changeText}/>
            <button>
              Set state
            </button>
          </form>
          {/*
            Here we display the text and number from the
            redux store
          */}
          <p>
            {this.props.textFromRedux}
          </p>
          <p>
            {this.props.numberFromRedux}
          </p>
        </header>
      </div>
    );
  }
}

// Here we map the values from our redux store state to the
// props of our component
const mapStateToProps = (state) => {
  return {
    textFromRedux:   state.text,
    actualFromRedux: state.actual,
    numberFromRedux: state.number
  };
};

// Here we map the functions used as actions from our
// redux store to the props of our component
const mapDispatchToProps = (dispatch) => {
  return {
    setReduxState:    (input) => dispatch( setFunc(input) ),
    decReduxNumber:   ()      => dispatch( decFunc() ),
    incReduxNumber:   ()      => dispatch( incFunc() ),
    resetReduxState:  ()      => dispatch( resetFunc() ),
    toggleReduxState: ()      => dispatch( toggleFunc() )
  }
}

// Here we make the connection between our redux store to
// the props of our component
export default connect(mapStateToProps, mapDispatchToProps)(App);
