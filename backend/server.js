import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;
import env from 'dotenv';
env.config();

app.use(bodyParser.json());
app.use(cors({
    origin: ['http://localhost:5173','http://localhost:4173'],
}))


const aiInstance = axios.create({
  baseURL: "https://openrouter.ai/api/v1/chat/completions",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`, 
    "Content-Type": "application/json",
  },
});
app.get("/", (req, res) => {
    res.send("Hello from the backend server!");
});

app.post("/ask", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "No message provided" });
    }

    const response = await aiInstance.post("", {
      model: process.env.MODEL || "nvidia/nemotron-nano-9b-v2:free",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });


    res.json({
      reply: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "AI request failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
