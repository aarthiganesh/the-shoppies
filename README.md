# Welcome to The Shoppies 2021!
This React App was created for the Shopify Front-End Challenge for 2021. Check out the final app [HERE](the-shoppies-aarthi.vercel.app)

## Design Thinking
This app was built with React and I wanted to challenge myself to not use a component library and build the components from scratch! 

### Extra Features
Your nominations will be saved to local storage, so they will remain even when the page is refreshed!
## The Shoppies: Movie awards for entrepreneurs
### The Challenge

We need a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

We'd like a simple to use interface that makes it easy to:
* Search OMDB and display the results (movies only)
* Add a movie from the search results to our nomination list
* View the list of films already nominated
* Remove a nominee from the nomination list

### Technical requirements
Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
1. Each search result should list at least its title, year of release and a button to nominate that film.
2. Updates to the search terms should update the result list
3. Movies in search results can be added and removed from the nomination list.
4. If a search result has already been nominated, disable its nominate button.
5. Display a banner when the user has 5 nominations.



# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

