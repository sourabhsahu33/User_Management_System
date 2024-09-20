# User Management System

This is a simple React application for managing user profiles. Users can create, edit, and delete profiles, which include fields such as name, age, address, email, department, and bio. The profiles are stored in the browser's local storage.

# Features

Create Profile: Users can create multiple profiles.

Edit Profile: Users can edit the details of any created profile.

Delete Profile: Users can delete any profile.

Responsive Design: The application is responsive and works well on both desktop and mobile devices.

 
![Screenshot 2024-08-03 003906](https://github.com/user-attachments/assets/8642c123-6e72-403d-80fe-c26801b3301d)


# My App-

This is a React-based application that allows users to create, edit, and delete profiles. The profiles are stored locally using `localStorage` and the UI is styled with Tailwind CSS.

# Front-end (React + TypeScript)
Directory Structure:

```plaintext
├── public/
│   ├── index.html                # Main HTML file
├── src/
│   ├── components/
│   │   ├── ProfileList.tsx        # Component to list, create, edit, and delete profiles
│   │   ├── EditProfile.tsx        # Component to edit a profile
│   ├── App.tsx                    # Main app component
│   ├── index.tsx                  # Entry point of the application
│   ├── styles/
│   │   ├── tailwind.css           # Tailwind CSS file for styling
├── package.json                   # Project dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration for Tailwind
├── README.md                      # Project documentation
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
