const BASE = "http://localhost:3000";

const getChatResponse = async(prompt: string) => {

    const response = await fetch(`${BASE}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
    });

    const content = await response.json();
    console.log("response", content);
    console.log("content", content.response);

    return content.response;
}

export { getChatResponse };