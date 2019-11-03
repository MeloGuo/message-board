import React, {useState} from "react";
import { IMessage } from "./Message";

interface IInputMessage {
  name: string,
  body: string
}

interface IProps {
  onSubmit (message: IMessage): void
}

const InputMessage: React.FC<IProps> = (props) => {
  const [form, setForm] = useState<IInputMessage>({ name: '', body: '' });

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);
    setForm(prevState => ({...prevState, [name]: value}))
  };

  const postMessage = async (body: IInputMessage): Promise<IMessage> => {
    const response = await fetch('http://127.0.0.1:5000/api/v1/message', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return await response.json();
  };

  const handleButtonSubmit = async () => {
    if (form.name === '') {
      alert('Please input name.');
      return;
    }
    if (form.body === '') {
      alert('Please input content.');
      return;
    }
    const data = await postMessage({ name: form.name, body: form.body });
    setForm(prevState => ({...prevState, body: ''}));
    props.onSubmit(data);
  };

  return (
    <div>
      <input value={form.name} type="text" name="name" onChange={handleInputChange} />
      <input value={form.body} type="textarea" name="body" onChange={handleInputChange} />
      <button onClick={handleButtonSubmit}>提交</button>
    </div>
  )
};

export default InputMessage
