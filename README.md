# ShopShap with SvelteKit

This project is a personal playground for practicing full‑stack development using **SvelteKit**. It covers both the frontend and backend aspects of an e‑commerce style application.

## Features

- **SvelteKit** powered frontend using TypeScript
- **Tailwind CSS** for styling
- **MongoDB** with Mongoose for data storage
- User authentication with JWT tokens and Google OAuth
- Fetches product data from [DummyJSON](https://dummyjson.com/)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

Make sure you have the required environment variables set in a `.env` file:

```
MONGO_URI=your-mongodb-url
DB_NAME=your-db-name
JWT_SECRET=your-jwt-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

Visit `http://localhost:5173` to see the app in action.

## Purpose

This repository was created to explore and practice building a full‑stack application with SvelteKit and related technologies. Feel free to fork and modify it for your own experimentation!

