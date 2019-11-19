This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## FCC: Random Quote Generator

### Introduction
Initially started in response to the 'Front End Libraries Certification' at www.freecodecamp.org/. Project name is [Build a Random Quote Machine](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine) (click on link for project prerequisites)

After completing project requirements I questioned:
**'How Can I make this app more functional to make it more appealing to use as a sort of "Daily quote tweeter?" '**

Long story short I've resorted to added transitions/animations (still to finish) and a quote history that is clickable and will tweet the clicked on tweet.

### Demo
https://quote-generator-ddave592.herokuapp.com/

## To-Do

### Main Improvements:
- [x] add quote history states
- [x] build out quote history section (styling etc...)
- [ ] add animation/transition between main quote-box and history quote-box

### New features:
 - [ ] add local quote caching through cookie (get rid of quote that might've already been seen) + then maybe have 'clear cache' button.
 - [ ] one time show, visual instruction (arrow etc..) showcasing history quote can be clicked on to tweet. (might not be already obvious)

### Edge cases:
- [ ] resolve issue with app breaking when all quotes exausted (after clicking thousands of times) **suggested:** have a reset view that kicks in with a button to reset app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.