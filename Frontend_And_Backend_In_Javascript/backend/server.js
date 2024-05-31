import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "type": "general",
            "content": "What did the fish say when it hit the wall?",
            "punchline": "Dam."
        },
        {
            "id": 2,
            "type": "general",
            "content": "How do you make a tissue dance?",
            "punchline": "You put a little boogie on it."
        },
        {
            "id": 3,
            "type": "generals",
            "content": "What's Forrest Gump's password?",
            "punchline": "1Forrest1"
        },
        {
            "id": 4,
            "type": "general",
            "content": "What do you call a belt made out of watches?",
            "punchline": "A waist of time."
        },
        {
            "id": 5,
            "type": "general",
            "content": "Why can't bicycles stand on their own?",
            "punchline": "They are two tired"
        },]
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`);
})