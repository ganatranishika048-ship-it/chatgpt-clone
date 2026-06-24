import { useState } from "react";
import type { Message } from "../types";
import { getGeminiResponse } from "../api/chat";

function useChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

    const sendMessage = async () => {
        
        try {
            // create the userMessage
            const userMessage: Message = {
                id: crypto.randomUUID(),
                role: "user",
                content: input
            }

            setMessages(prev => [...prev, userMessage]);

            setInput("");

            setIsLoading(true);

            // call the Gemini API.
            const geminiResponse = await getGeminiResponse(userMessage.content);

            const assistantMessage: Message = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: geminiResponse
            }

            setMessages(prev => [...prev, assistantMessage]);

        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setIsLoading(false);
        }
        

    }

}