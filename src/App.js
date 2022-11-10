import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Message from './components/message';
import Chat from './components/chat';
import MessageInput from './components/messageInput';
// import Clock from './components/clock';
import { useState } from 'react';

// Shorthand
/** Returns current date/time */
function getTime() { return new Date().toLocaleTimeString(...date_options); }

// Variables
const date_options = ['en-US', {hour:"numeric", minute:"numeric"}];
 

/** App */
function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>HoeChat</h1>
      </header>
       {/* Chat messages */}
      <Chat/>
      {/* <MessageInput/> */}

    </div>
  );
}

export default App;
