import React from "react";
import styled from "styled-components";

export interface IMessage {
  id: number,
  name: string,
  body: string,
  timestamp: string
}

const Name: React.FC = styled.h1`
  color: red;
`;

const Content: React.FC = styled.div`
  color: black;
`;

const Message: React.FC<IMessage> = (props) => {
  const handleTimestamp = (timestamp: Date): string => `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`;

  return (
    <div>
      <Name>{props.name}</Name>
      <Content>{props.body}</Content>
      <div>{handleTimestamp(new Date(props.timestamp))}</div>
    </div>
  )
};

export default Message
