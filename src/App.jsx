import React from 'react'
import ChatbotIcon from './components/ChatbotIcon'
import ChatForm from './components/ChatForm'
import ChatMessage from './components/ChatMessage'
import { useState } from 'react'

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div className='container'>
      <div className='chatbot-popup'>

        {/* Chatbot Header */}
        <div className='chat-header'>
          <div className='header-info'>
            <ChatbotIcon />
            <h2 className='logo-text'>Chatbot</h2>
          </div>
          <button className="material-symbols-outlined">keyboard_arrow_down</button>
        </div>

        {/* Chatbot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey There. <br/> How can I help you today?
            </p>
          </div>
          
          {/* Render the the caht history dinamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/*Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  )
}

export default App