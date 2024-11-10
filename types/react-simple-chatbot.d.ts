declare module 'react-simple-chatbot' {
    import * as React from 'react';
  
    interface Step {
      id: string;
      message: string;
      trigger: string;
      user?: boolean;
      end?: boolean;
      delay?: number;
      options?: { value: string; label: string; trigger: string }[];
      asMessage?: boolean;
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
  