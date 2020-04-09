import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends React.Component {
  state = {
    initialValue: '',
    multi: '',
  }
  render() {

    return (
    <div>
        <span>Weight in kg </span>
        <input type="number" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue"/>
        <br/>
        <br/>
        <span>Rate </span>
         <input type="number" value={this.state.multi} onChange={this.alpha} name="multi" id="multi"/>
         <br/>
        <br/>
        <span> Total : {this.state.initialValue * this.state.multi}</span>
    </div>
   )
  }
   alpha = (ev) => {
    this.setState({
            [ev.target.name]: ev.target.value
    });
   }

}

render(<App />, document.getElementById('root'));
