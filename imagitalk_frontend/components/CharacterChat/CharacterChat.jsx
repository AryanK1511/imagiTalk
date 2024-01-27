import React, { useState, useEffect } from 'react';
import styles from './CharacterChat.module.css';

const CharacterChat = ({ characterId }) => {
  const [character, setCharacter] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Fetch character data from the backend
    fetch(`http://localhost:8000/api/characters/${characterId}`) // Replace with your API URL
      .then(response => response.json())
      .then(data => {
        setCharacter(data.character);
      })
      .catch(error => console.error('Error fetching character:', error));
  }, [characterId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;
    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    // Handle character response here (mocked for this example)
    setTimeout(() => {
      setMessages(msgs => [...msgs, { text: `Hello! I'm ${character?.character_name}`, sender: 'character' }]);
    }, 1000);
  };

  if (!character) return <div>Loading character...</div>;

  return (
    <div className={styles.characterChatContainer}>
      <div className={styles.characterPanel}>
        <img src={character.character_picture} alt={character.name} />
      </div>
      <div className={styles.chatPanel}>
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`${styles.message} ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className={styles.heroForm}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message here..."
            className={styles.heroInput}
          />
          <button className={styles.heroButton} type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default CharacterChat;