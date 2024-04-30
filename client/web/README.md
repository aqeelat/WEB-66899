## Available Scripts

### Web

- `yarn install` - Install packages to root folder
- `yarn boot` or `yarn lerna bootstrap` - Bootstrap the packages in the current root folder. Installs all of their dependencies and links any cross-dependencies. [Lerna bootstrap](https://github.com/lerna/lerna/tree/main/commands/bootstrap#lernabootstrap)
- `yarn start` - Start Admin & Corporate apps concurrently
- `yarn common-dev` - Start common lib in tsc -w mode
Before start scripts below, need to start `yarn common-dev` or `yarn prestart`
- `yarn start-corp` - Start Corporate app
- `yarn start-admin` - Start Admin app





### Common 

For developing:

1.  `yarn dev` - Build lib dev mode
2.  `yarn copy-css` - Move css files to lib 

For Building:

-  `yarn libbuild` - Build lib for apps

### Corporate  &  Admin

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
