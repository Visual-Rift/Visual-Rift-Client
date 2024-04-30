import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './logger.css';

const ENDPOINT = "http://localhost:3000"; // Update with your backend endpoint

const Logger = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`${ENDPOINT}/api/v1/messages`);
                if (response.data && response.data.messages) {
                    setMessages(response.data.messages);
                }
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        // Fetch messages initially
        fetchMessages();

        // Set up interval to fetch messages periodically
        const interval = setInterval(() => {
            fetchMessages();
        }, 5000); // Fetch messages every 5 seconds (adjust as needed)

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run effect only once

    return (
        <div>
            <h2>Logger Component</h2>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
}

export default Logger;
