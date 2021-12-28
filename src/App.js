import { ChatEngine } from 'react-chat-engine';
import ChatFeedComponent from './component/chatFeed';
import LoginFormComponent from './component/LoginForm';
import './App.css';

const projectID = 'c3de56b4-955f-4d51-ba60-89caeeada8d8';

const App = () => {
    debugger
  if (!localStorage.getItem('username')) return <LoginFormComponent />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeedComponent {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;