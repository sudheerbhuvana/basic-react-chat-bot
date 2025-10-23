# React Chat Bot

A simple chat bot application with React frontend and Node.js backend.

## Setup

### 1. Install Dependencies

**Frontend:**
```bash
cd react-chat-app
npm install
```

**Backend:**
```bash
cd backend
npm install
```

### 2. Configure Backend

Create `.env` file in `backend` directory:

```env
PORT=3000
API_KEY= GET FROM https://openrouter.ai/settings/keys
MODEL=nvidia/nemotron-nano-9b-v2:free (Change to whatever model you would like to use!)
```

## Run

**Backend:**
```bash
cd backend
node server.js
```
Runs on `http://localhost:3000`

**Frontend:**
```bash
cd react-chat-app
npm run dev
```
Runs on `http://localhost:5173`

## Usage

Open `http://localhost:5173` in your browser and start chatting.

---

Made by Sudheer Bhuvana