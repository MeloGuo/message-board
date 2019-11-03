import React, {useState} from "react";
import MessagesContainer from "./components/MessagesContainer";
import InputMessage from "./components/InputMessage";
import { IMessage } from "./components/Message";

const App: React.FC = () => {
  const [message, setMessage] = useState<IMessage>();

  const handleSubmit = (message: IMessage) => {
    console.log('handleSubmit: ', message);
    setMessage(message)};

  return (
    <div>
      <InputMessage onSubmit={handleSubmit} />
      <MessagesContainer message={message} />
    </div>
  );
};

export default App;
