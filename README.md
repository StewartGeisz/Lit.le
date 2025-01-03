# Lit.le
literature date prediction game
├── client/                 # Frontend
│   ├── public/             # Static files
│   ├── src/
│       ├── components/     # React components (e.g., GameBoard, Timer)
│       ├── pages/          # Pages (e.g., HomePage, Leaderboard)
│       ├── context/        # Context API for global state (e.g., GameStateContext)
│       ├── App.tsx         # Main React app component
│       ├── index.tsx       # React entry point
│       ├── styles/         # CSS or styled-components
│       ├── utils/          # Helper functions (e.g., dateFormatter.js)
│
├── server/                 # Backend
│   ├── src/
│       ├── controllers/    # Logic for endpoints (e.g., PassageController.js)
│       ├── middleware/     # Middleware (e.g., error handling)
│       ├── models/         # MongoDB models (e.g., Passage.js, Score.js)
│       ├── routes/         # Routes (e.g., api/passages, api/scores)
│       ├── utils/          # Utilities (e.g., dataLoader.js for passages)
│       ├── server.ts       # Express server setup
│
├── data/                   # Initial dataset (e.g., passages.json)
├── .env                    # Environment variables
├── package.json            # Project metadata and dependencies
├── README.md               # Documentation



