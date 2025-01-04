import React, { useState } from "react";
import "./Chat.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const apiKey = process.env.REACT_APP_API_KEY;

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async () => {
        if (!apiKey) {
            alert("API key is missing. Please check your environment configuration.");
            return;
        }

        if (inputValue.trim() === "") return;

        const userMessage = { sender: "user", text: inputValue };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInputValue("");

        setIsLoading(true);

        try {
            const response = await fetch("https://api.openai.com/v1/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "text-davinci-003",
                    prompt: `User: ${inputValue}\nBot:`,
                    max_tokens: 100,
                    temperature: 0.7,
                }),
            });


            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            if (!data || !data.choices || !data.choices[0]?.text) {
                throw new Error("Invalid response format from the API.");
            }

            const botResponse = data.choices[0].text.trim();
            const botMessage = { sender: "bot", text: botResponse };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error fetching API:", error);
            const errorMessage = {
                sender: "bot",
                text: "Sorry, there was an error connecting to the server. Please try again later.",
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <>
            <div className={`chatbot-container ${isOpen ? "chatbot-open" : ""}`}>
                <div className="chatbot-header">
                    <h4>Truck Buddy Chatbot</h4>
                    <button className="close-chat-btn" onClick={toggleChat}>
                        ✖
                    </button>
                </div>
                <div className="chatbot-body">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`chat-message ${message.sender === "user" ? "user-message" : "bot-message"}`}
                        >
                            {message.text}
                        </div>
                    ))}
                    {isLoading && <div className="chat-loading">Bot is typing...</div>}
                </div>
                <div className="chatbot-footer">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="chatbot-input"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="send-btn" onClick={handleSendMessage}>
                        Send
                    </button>
                </div>
            </div>
            {!isOpen && (
                <button className="chatbot-floating-btn" onClick={toggleChat}>
                    💬
                </button>
            )}
        </>
    );
};

export default Chatbot;
