# Spoteact
This project is built with React and accesses the spotify api using the implicit grant flow method (all client side no server side code needed).
https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow

Built primarily to learn React functions and hooks, and how to connect this with an api.

# Installation
Simply download code and place in directory of your choice.

You will need to get a client id from the spotify developer platform https://developer.spotify.com/dashboard/, by creating an app.
This needs to be placed in Spotfiy.js in the variable `const clientID` line 3.

The redirect url also needs setting up, I have just set it to http://localhost:3000 when running in dev mode.
But if you wanted to host the project you need to set it on line 4, and in the spotify app on the spotify dashboard.

After setting this up, just run npm start in the terminal and it should load up the page and ask you to login to Spotify.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

