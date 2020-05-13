# Microblog

A simplistic "micro" blogging application built on React and Redux. You can create, edit, and delete blog posts. Comments are able to be added and removed to posts.

## Getting Started

Clone and follow installation setup below to run the application locally.

### Requirements

- Node.js
- PostgreSQL

### Installing

Setup

Install dependencies for backend:
```
$ cd backend/
$ npm install
```

Set up database on your local machine, seed database in backend, start server:
```
$ createdb microblog
$ psql microblog < data.sql
$ npm start
```

Switch to frontend, install dependencies, and start:
```
$ cd ..
$ npm install
$ npm start
```

### Technologies
- React
- Node.js/Express
- Redux/Redux Thunk
- PostgreSQL
- Reactstrap/Bootstrap
- Axios
