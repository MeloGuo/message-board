import React, {useEffect, useState} from "react";
import Message, { IMessage } from "./Message";

interface IProps {
  message?: IMessage
}

const MessagesContainer: React.FC<IProps> = (props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const fetchMessages = async (): Promise<void> => {
      const response = await fetch('http://127.0.0.1:5000/api/v1/message');
      const data = await response.json();
      setMessages(data.messages)
    };

    fetchMessages()
  }, []);

  useEffect(() => {
    setMessages(prevState => {
      if (props.message === undefined) {
        return prevState;
      } else {
        return [props.message, ...prevState];
      }
    });
  }, [props.message]);

  return (
    <div>
      {messages.map((messages: IMessage) => (
        <Message
          key={messages.id}
          id={messages.id}
          name={messages.name}
          body={messages.body}
          timestamp={messages.timestamp}
        />
      ))}
    </div>
  )
};

export default MessagesContainer
