# ExamPlanner

ExamPlanner is a full-stack web application for managing study plans, tracking progress, and scheduling exams. It provides a React-based client and a Node.js backend API that integrates with Supabase for data storage and authentication.

## Key Features
- User registration and authentication
- Create and manage study plans and exams
- Track learning progress and statistics
- CRUD endpoints for subjects, directions, faculties, and knowledge points
- Responsive UI built with Vite and TypeScript

## Architecture
- Client: React + TypeScript (Vite) — located in the `client/` folder
- Server: Node.js Express API — located in the `server/` folder
- Database & Auth: Supabase (accessed from the backend)

## Tech Stack
- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, Express
- Database/Auth: Supabase

## Prerequisites
- Node.js (recommended >= 16)
- npm or yarn
- A Supabase project (for database and service role key)

## Environment Variables
The backend expects the following environment variables (defined in the backend `.env` file):

- `SUPABASE_URL` — your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role key (server-side only)

Keep the service role key secret and do not expose it in the frontend.

## Setup

1. Clone the repository:

```
git clone <repository-url>
cd ExamPlanner
```

2. Server setup:

```
cd server
npm install
# create a .env file and add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
node server.js
```

3. Client setup:

```
cd ../client
npm install
npm run dev
```

The client runs with Vite and typically serves on `http://localhost:5173`. The backend server runs separately (for example `http://localhost:3000`).

## Running in development
- Start the backend (from `server/`): `node server.js` or use your preferred process manager (e.g., `nodemon server.js`).
- Start the frontend (from `client/`): `npm run dev`.

## API Overview
The backend exposes RESTful routes for authentication and resources such as `profiles`, `progress`, `subjects`, `directions`, `faculties`, `specializations`, and `knowledgePoints`. `POST /api/profile/me/reset-study-choices` clears the signed-in user's study selections and all saved progress while keeping name and avatar. See the `server/routes/` directory for concrete endpoints and usage.

## Contributing
- Fork the repository and create a branch for your feature or fix.
- Open a pull request describing your changes.
