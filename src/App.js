import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //needed for inheritance

    //Define an intial state OBJECT
    this.state = {messages:
      [
        {text:"This is message 1",time:"1:00 AM",user:"psarma"},
        {text:"This is message 2",time:"2:00AM",user:"psarma"},
        {text:"This is message 3",time:"3:00AM",user:"psarma"}
      ]
    }
}

  render() {
    var messageMap = this.state.messages.map(function(message, i){
        return (<li key={i}>Here is the message: {message.text}, at time: {message.time}, from user: {message.user}</li>)
    })

    return (
      <div>
        <label htmlfor='messageInput'>Insert Message:
          <input type = 'text' id= 'messageInput' ref='messageInput' placeholder='Your message here'/>
        </label>
        <input type = 'submit' value = 'Submit'/>
        <ul>{messageMap}</ul>
      </div>
    )

    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default App;
