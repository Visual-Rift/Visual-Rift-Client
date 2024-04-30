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
                    // Append new messages to the existing ones
                    setMessages(prevMessages => [...prevMessages, ...response.data.messages]);
                }
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();

        const interval = setInterval(() => {
            fetchMessages();
        }, 3000); // Fetch messages every 3 seconds 

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run effect only once

    return (
        <div className='manDiv'>
            <h3 className='configurationHeading'>Logs</h3>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
}

export default Logger;
