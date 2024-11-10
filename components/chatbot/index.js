import React from "react";
import ChatBot from 'react-simple-chatbot';
import Wrapper from './styles';
import steps from './steps';


function ChatbotWrapper() {
  return (
    <Wrapper>
      <ChatBot
        steps={steps}
        floating recognitionEnable
      />
    </Wrapper>
  );
}

export default ChatbotWrapper;