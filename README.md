# Getting Started with react-albums

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start Project

To use the project, clone it locally on your computer and open the folder in a text editor.\
Next, in the terminal, navigate to the project directory and run the following command:

```bash
npm install
```
This command installs all the dependencies required for the project.


## Available Scripts

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Description

This application is a simple album collection built using React. It allows users to view a list of albums, search for specific albums by title, order by title and author and view detailed information about each album.

### Features:
- Homepage: Displays a table with a list of all available albums. Users can search for albums by title and sort albums by title or author.
- Details Page: Displays detailed information about a selected album, including the author and title.

## Dependencies
- React
- Typescript
- Axios
- React Router Dom
- Tailwind

## Routing 
- "/": Homepage
- "/details/:id": Details page

## Possible Improvements
- Consider adding more styling to enhance the user interface and experience.
- Implement pagination or infinite scrolling for better navigation through large datasets.
- Add error handling for network requests and edge cases.
- Enhance the README with detailed instructions for contributing to the project, deployment instructions, and additional project documentation.