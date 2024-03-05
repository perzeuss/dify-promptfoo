import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();
app.use(bodyParser.json());

const handlePromptfooRequest = async (req, res) => {
    const prompt = req.body.prompt;

    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${req.body.config?.apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "inputs": req.body.config?.inputs || {},
            "query": prompt,
            "response_mode": "blocking",
            "conversation_id": "",
            "user": req.body.config?.user || "promptfoo",
            "files": []
        })
    };

    const response = await fetch(`${req.body.config?.apiUrl}/chat-messages`, requestOptions);
    const data = await response.json();
    const answer = data.answer;
    res.json({ output: answer });
}

app.post('/:name', handlePromptfooRequest);
app.post('/', handlePromptfooRequest);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));