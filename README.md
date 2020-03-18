# Movie Search App

A movie search SPA using The Movie Database [API](https://developers.themoviedb.org/3/getting-started). 

Full web application using Node and Express on the backend side and React as the frontend framework.
This project makes usage of some interesting built-in hooks from React Hooks, as useReducer, and also some custom hooks.

The SASS preprocessor was the option for styling this application.


## Getting Started

Follow the instructions below to get a copy of the project running in your local machine. Keep in mind that you will need an API KEY to get data from the The Movie Database.

### Prerequisites

You will need to have node installed (I used v12.6.0)


### Installing

Get a copy of the repository

```
git clone https://github.com/Joeu/movie-app-heroku.git
```

Move into the newly created folder

```
cd movie-app-heroku
```

For development purposes, run:

```
npm run devstart
```

It should fire the nodemon, get your client side (React) built and your backend server app and running.

- You will also need an API KEY and set it in your .env file.

Go to http://localhost:3001 and you should see the home page.


## Built With

* [Node](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [SASS](https://sass-lang.com/)
* [Heroku](https://heroku.com)

## Authors

* **Joeumar Souza** - *Initial work* - [PurpleBooth](https://github.com/joeu)

## TODO

* **Pagination**
* **Gradual Search**
