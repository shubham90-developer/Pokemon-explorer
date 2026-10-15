# Pokemon Explorer

A small app that shows a list of pokemons. You can search them by name and click one to see its details like types, abilities, stats and moves.

Backend is Node, Express and MongoDB. Frontend is Next.js with Tailwind.

## What you need

- Node.js
- A MongoDB database (local or Atlas)

## Run the backend

```
cd backend
npm install
```

Make a file called `.env` inside the `backend` folder:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
```

Add the pokemon data to the database (you only need to do this once):

```
npx tsx seed.ts
```

Start the server:

```
npm run dev
```

It runs on http://localhost:5000

## Run the frontend

Open a new terminal.

```
cd frontend/pokemon
npm install
```

Make a file called `.env` inside the `frontend/pokemon` folder:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/v1/api
```

Start it:

```
npm run dev
```

Open http://localhost:3000 in your browser.

## If something doesn't work

- Page says "No pokemons found": the backend is not running, or you forgot to run the seed.
- Images not showing: restart the frontend after changing `next.config.ts`.
- Backend closes right away: check that `MONGODB_URI` is in `backend/.env`.
