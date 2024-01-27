import React, { useState, useEffect } from "react";
import styles from "./CharacterChat.module.css";

const CharacterChat = ({ characterId }) => {
  const [character, setCharacter] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [tempInputMessage, setTempInputMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/api/characters/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.character);
      })
      .catch((error) => console.error("Error fetching character:", error));
  }, [characterId]);

  const sendMessage = async (e) => {
    setTempInputMessage(inputMessage);
    setInputMessage(""); // Clear the input field after sending the message
    e.preventDefault();
    if (tempInputMessage.trim() === "") return;

    // Add the user message to the messages array immediately
    const newMessages = [
      ...messages,
      { text: tempInputMessage, sender: "user" },
    ];
    setMessages(newMessages);

    const prompt = `You are ${character?.character_name}. Act like it! ${tempInputMessage}`;

    try {
      const response = await fetch(
        "http://localhost:8000/api/cohere/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: prompt }),
        }
      );

      const data = await response.json();

      // Add the API response to the messages array
      setMessages((currentMessages) => [
        ...currentMessages,
        { text: data.result, sender: "character" },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!character) return <div>Loading character...</div>;

  return (
    <div className={styles.characterChatContainer}>
      <div className={styles.characterPanel}>
        {/* Make sure to use the correct property for the image alt text */}
        <img src={character.character_picture} alt={character.character_name} />
      </div>
      <div className={styles.chatPanel}>
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                msg.sender === "user" ? styles.user : styles.character
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className={styles.heroForm}>
          <input
            type="text"
            value={tempInputMessage}
            onChange={(e) => setTempInputMessage(e.target.value)}
            placeholder="Type your message here..."
            className={styles.heroInput}
          />
          <button className={styles.heroButton} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CharacterChat;
