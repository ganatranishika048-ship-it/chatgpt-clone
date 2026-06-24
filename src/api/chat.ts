const BASE = "http://localhost:3000";

const getGeminiResponse = async(prompt: string) => {

    const response = await fetch(`${BASE}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
    });

    return response.json();
}

export { getGeminiResponse };