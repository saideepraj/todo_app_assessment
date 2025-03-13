# Todo App

A simple Todo application built using React, Redux Toolkit, Chakra UI, and TypeScript. This app allows users to add, edit, delete, and toggle the completion status of todos.
This app created by using Vite for frontend and Node.js for backend. The backend is using MongoDB as database. In this Todo app, Lodash is also used to simplify data manipulation tasks, which helps write cleaner, more concise code while improving performance for complex data operations.

## Prerequisites

Before you can run this project, make sure you have the following installed:

- **Node.js** (version 14.x or later) - [Download Node.js](https://nodejs.org/)
- **npm** (Node package manager) - It comes installed with Node.js, but make sure it's up to date by running:
  ```bash
  npm install -g npm
  ```
- **Docker & Docker Compose** for running MongoDB

Make sure these ports are open:

- Frontend: **5173**
- Backend: **4000**
- MongoDB: **27017**

## Getting Started

Follow these steps to get your environment set up and run the app locally.

### 1. Open the Repo in IDE (VS Code Recommended)

### 2. Make Sure to Have Latest Stable Node

Visit this link and download according to your OS: [https://nodejs.org/en/download](https://nodejs.org/en/download)

```bash
nvm use <node-version>
```

### 3. Install Dependencies

Install the required dependencies by running the following command in the project directory:

```bash
npm install
```

This will install all necessary packages such as React, Chakra UI, Redux, TypeScript, and others.

### 4. Run MongoDB Using Docker

Ensure Docker and Docker Compose are installed. Please install colima or podman to create instance. Run MongoDB with the following command:

```bash
brew install colima
brew install docker
brew install docker-compose
colima start --cpu 4 --memory 8
docker-compose up -d
```

This will start MongoDB in the background.

### 5. Run the App Locally

Start the development server by running the following command:

```bash
npm run dev
```

The app should now be running locally on [http://localhost:5173](http://localhost:5173).

### 6. Linting & Formatting

The project uses ESLint and Prettier for code linting and formatting. To run the linter manually, use:

```bash
npm run lint
```

And to format your code, use:

```bash
npm run format
```

## File Structure

Here is a brief overview of the file structure:

```
├── src
│   ├── components      # React components for UI
│   ├── store           # Redux store setup (reducers, actions, thunks)
│   ├── models          # TypeScript types/interfaces (e.g., ITodo)
│   ├── api             # REST APIs using Axios
│   └── App.tsx         # Main entry point for the React application
└── public
    ├── index.html      # HTML template
    └── assets          # Static assets like images, icons, etc.
```

### Key Files

- `src/App.tsx`: The main component that renders the Todo list and handles user interactions.
- `src/store/selectors/todo-selector.ts`: Redux selector to get the state of todos.
- `src/store/thunks/todo-thunk.ts`: Thunks that handle API calls for creating, updating, deleting, and fetching todos.
- `src/utils/todoUtils.ts`: Utility functions for managing todo actions (e.g., creating, updating, toggling, deleting todos).
- `src/components/TodoForm.tsx`: Form for adding new todos and editing existing ones.
- `src/components/TodoItem.tsx`: Component that displays individual todo items with options to toggle completion, edit, and delete.

## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **Redux** - State management library.
- **Chakra UI** - A simple, modular, and accessible component library for React.
- **TypeScript** - A superset of JavaScript that adds static typing.
- **Lodash** - A utility library for working with arrays, numbers, objects, strings, etc.
- **Axios** - A promise-based HTTP client for making API requests.
- **MongoDB** - NoSQL database for backend data storage.
- **Docker** - For containerizing MongoDB.

## Docker Compose Configuration

Here's an example `docker-compose.yml` file to run MongoDB:

```yaml
version: '3.8'
services:
  mongo:
    image: mongo:latest
    container_name: todo-mongo
    ports:
      - '27017:27017'
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: admin
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```
