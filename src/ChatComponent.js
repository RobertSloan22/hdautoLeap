import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const ChatComponent = () => {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');

  
  const sendMessage = async () => {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: input,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['\n'],
    });
    setChat([...chat, { message: input, sender: 'user' }, { message: response.data.choices[0].text.trim(), sender: 'gpt-3' }]);
    setInput('');
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <div className='chat-window'>
          {chat.map((msg, index) => (
            <p key={index} className={msg.sender === 'user' ? 'text-end' : ''}>{msg.message}</p>
          ))}
        </div>
        <input type='text' value={input} onChange={e => setInput(e.target.value)} className='form-control' />
        <button onClick={sendMessage} className='btn btn-primary'>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
