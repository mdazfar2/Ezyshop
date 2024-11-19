declare module 'react-simple-chatbot' {
    import * as React from 'react';
  
    interface Step {
      id: string; // A unique identifier for each step
      message?: string; // Message to be displayed to the user
      trigger?: string; // The ID of the next step to trigger
      user?: boolean; // If true, allows user input at this step
      options?: Array<{
        value: string; // The value that is used when an option is selected
        label: string; // The text shown for the option
        trigger: string; // The step ID to go to after this option is selected
      }>;
      end?: boolean; // If true, ends the chat at this step
    }
    
  
    interface ChatBotProps {
      steps: Step[];
      userMessage?: string;
      onUserMessage?: (msg: string) => void;
      placeholder?: string;
      hideUserAvatar?: boolean;
      hideBotAvatar?: boolean;
      botAvatar?: string;
      userAvatar?: string;
      headerTitle?: string;
      headerStyle?: React.CSSProperties;
      botAvatarStyle?: React.CSSProperties;
      userAvatarStyle?: React.CSSProperties;
      customDelay?: number;
    }
  
    const ChatBot: React.ComponentType<ChatBotProps>;
  
    export default ChatBot;
  }
  