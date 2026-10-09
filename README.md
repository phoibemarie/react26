# Todo List App

## Project Description
A simple Todo List application built with React and JavaScript. The application demonstrates fundamental React concepts, including JSX, components, array methods, and dynamic list rendering. Users can view a list of tasks displayed using the JavaScript `.map()` method.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-list
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Development Server

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal (typically `http://localhost:5173/` for Vite) to view the application in your browser.

## Technologies Used
- React
- JavaScript (ES6+)
- JSX
- HTML/CSS
- Vite (development server)

## Defining the folders and files within the project
1.  .git/: is an invisible directory created by Git to maintain version control. You may not see it if your operating system hides directories and files that start with a ".". VS Code also will hide this directory by default.

2.  .gitignore: this file lists all those files and directories that should not be tracked with version control.

3.  README.md: this file contains pertinent information about the project. We keep this up to date with details such as a project description and steps that others need to take to run or work with the project.

4.  eslint.config.js: is used to configure ESLint, a tool used to identify syntax problems or common anti-patterns.

5.  index.html: this file is the entry point for the application.


6.  package.json: this file contains details about the project, some scripts aliases, and a list of all the packages that the project is dependent upon.

7.  public: this is a directory is used to hold static assets like images and fonts that we want to remain unchanged.

8.  src: this directory contains the majority of the working files for the application.

9.  vite.config.js: this file sets configuration options for Vite


## How I built the app using the React template 
## Clean up Template
1. Start the development server with the command: npm run dev
2. Open a browser and navigate to http://localhost:5173.
3. Delete the contents of App.css but keep the file.
4. Delete the contents of index.css but keep the file.
## Clean up App.jsx's code:
1. Delete the line containing const [count, setCount] = useState(0)
2. Remove all imports except for App.css
3. Replace everything in the return statement with a div containing an h1 containing your app's title.
     Example — your App component should look similar to this. 

import './App.css'

function App() {

  return (
    <div>
      <h1>Todo List</h1>
    </div>
  )
}

export default App