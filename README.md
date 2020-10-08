## Evaluate a news Article with Natural Language Processing


Evaluate a news Article with Natural Language Processing (NLP) is a project IV of Udacity's Front End Web Developer Nanaodegree Program. 

This project uses an API through url entered by a user to run NLP on articles or blogs and to find whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## Getting started

Once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

### Step 1: Signup for an API key
Signup [here](https://www.meaningcloud.com/developer/create-account) for a license key to start using the API.

### Step 2: Environment Variables

- [ ] Use npm to install the dotenv package ```npm install dotenv```.
- [ ] Create a new ```.env``` file in the root of your project

- [ ] Fill the ```.env``` file with your API key like this:
```
API_KEY=**************************
```
- [ ] Add this code to the very top of your ```server/index.js``` file:
```
const dotenv = require('dotenv')
dotenv.config()
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of the variable name in the ```server/index.js``` file, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`)
```
This means that our updated API credential settings will look like this:
```javascript
const API_KEY = process.env.API_KEY
```

### Step 3: Using the API

We use the [Sentiment Analysis API](https://www.meaningcloud.com/developer/sentiment-analysis) for this project.

## Available Scripts

In the project directory, you can run:

### `npm run build-dev`

Runs the app in the development mode, automatically opening [http://localhost:8080](http://localhost:8080) in the browser.

The page will reload if you make edits.

### `npm start`
Starts the server

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build-prod`

Builds the app for production to the `dist` folder.<br />
It correctly bundles project in production mode and optimizes the dist for the best performance.

The dist is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
