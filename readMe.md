# Task tracker app to showcase my web bundling skills

## purpose
* The primary goal of task tracker is to track your created task status

## key feature
1. Task management
    * Easily add new tasks using a simple and intuitive form.
    * Each task is associated with a description for clarity.

2. Task List Display
    * Tasks are displayed in a clear and organized list format.
    * Each task shows its description along with options for marking as completed or deleting.

3. Task Status Toggle:
    * Ability to toggle the status of a task between "Completed" and "Pending."
    * Visual indication of completed tasks for better user experience.

4. Delete Task Functionality
    * Users can efficiently delete tasks they no longer need.
    * A confirmation prompt may be included to prevent accidental deletions.

5. LocalStorage Integration:
    *  Utilizes browser's localStorage to persist tasks locally.
    * Ensures that tasks are retained even after a page refresh.

# tech stack

* front end
    1. React
    2. es6 (javascript)
    3. html
    4. chakra-ui
    5. css
* module bundlers
    1. webpack
    2. babel loaders
    3. various plugins
    4. css loader 

# file structure
1. feature-based-structure

# webpack configuration
1. using babel loader to convert react-js into common js to ensure cross-browsing functionality
2. entry point will be created at ./src/app/index.js
3. output will be at ./dist/index.html
4. plugins will be used to minimize, and splitting my code to ensure user experience

## coding style
1. Test Driven Development approach
2. functional programming
