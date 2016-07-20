# React Data Grid Quick Start
---
#### 1. ```npm install```

#### 2. ```npm start``` - starts compilation of assets and server in local test mode for developing

#### 3. browse to http://localhost:3000

---
### Other project scripts
* ```npm run lint``` - run linting
* ```npm run test``` - run test
* ```npm run test:dev``` - run tests with watchers for use while developing
* ```npm run test:chrome``` - run tests interactively with chrome for debugging

---
# Deploying

    * ```npm i```
    * ```npm run dist```
    * ```git add --all```
    * ```git commit -m "custom message"```
    * ```git push heroku master``` 

---

# Foundation for React Data Grid


Table of Contents
-----------------
1. [Requirements](#requirements)
1. [Features](#features)
1. [Getting Started](#getting-started)
1. [Usage](#usage)
1. [CLI Generators](#cli-generators)
1. [Structure](#structure)
1. [Webpack](#webpack)
1. [Server](#server)
1. [Styles](#styles)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Troubleshooting](#troubleshooting)

Requirements
------------

* [node] (https://nodejs.org/download/release/v5.3.0) `^5.3.0`
* npm `^3.3.12` For Windows, npm is part of node installation

Features
--------

* [React](https://github.com/facebook/react) (`^15.0.1`)
* [Redux](https://github.com/rackt/redux) (`^3.5.1`)
  * react-redux (`^4.4.5`)
  * redux-devtools
  * redux-thunk middleware
* [react-bootstrap](http://react-bootstrap.github.io/) (`^0.22.1`) Front End Framework
* [Express](https://github.com/expressjs/express) (`^4.13.4`)
* [Qwest](https://github.com/pyrsmk/qwest) (`^4.4.1`)
* [Webpack](https://github.com/webpack/webpack)
  * Bundle splitting and CSS extraction
  * Sass w/ CSS modules, autoprefixer, and minification
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ chai, sinon-chai, and chai-as-promised, and [chai-enzyme](https://github.com/producthunt/chai-enzyme)
  * PhantomJS
  * Code coverage reports/instrumentation with [isparta](https://github.com/deepsweet/isparta-loader)
* [Flow](http://flowtype.org/) (`^0.22.0`)
* [ESLint](http://eslint.org)
  * Uses AirBnb and [Standard Style](https://github.com/feross/standard) by default, but you're welcome to change this.

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/jamesongamble/challengeRedux.git
$ cd challengeRedux
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm run start                 # Compile and launch
```

Usage
-----

Before delving into the descriptions of each available npm script, here's a brief summary of the three which will most likely be your bread and butter:

* Doing live development? Use `npm start` to spin up the dev server.
* Deploying to an environment? `npm run deploy` can help with that.

**NOTE:** This package makes use of [debug](https://github.com/visionmedia/debug) to improve your debugging experience. For convenience, all of messages are prefixed with `app:*`. If you'd like to to change what debug statements are displayed, you can override the `DEBUG` environment variable via the CLI (e.g. `DEBUG=app:* npm start`) or tweak the npm scripts (`betterScripts` in `package.json`).

Great, now that introductions have been made here's everything in full detail:

|Script|Description|
|---|---|
|`npm start`|Spins up Express server to serve your app at `localhost:3000`. HMR will be enabled in development.|
|`npm run dev`|Same as `npm start`, but enables nodemon to automatically restart the server when server-related code is changed.|
|`npm run dev:no-debug`|Same as `npm run dev` but disables redux devtools.|
|`npm run test`|Runs unit tests with Karma and generates a coverage report.|
|`npm run test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`npm run deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`npm run flow:check`|Analyzes the project for type errors.|
|`npm run lint`|Lint all `.js` files.|
|`npm run lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

**NOTE:** Deploying to a specific environment? Make sure to specify your target `NODE_ENV` so webpack will use the correct configuration. For example: `NODE_ENV=production npm run compile` will compile your application with `~/build/webpack/_production.js`.

### Configuration

Basic project configuration can be found in `~/config/_base.js`. Here you'll be able to redefine your `src` and `dist` directories, adjust compilation settings, tweak your vendor dependencies, and more. For the most part, you should be able to make changes in here **without ever having to touch the webpack build configuration**.


Structure
---------

The folder structure provided is only meant to serve as a guide, it is by no means prescriptive. 

```
.
+-- bin                       # Build/Start scripts
+-- blueprints                # Blueprint files for redux-cli
+-- build                     # All build-related configuration
�   +-- webpack              # Environment-specific configuration files for webpack
+-- config                    # Project configuration settings
+-- interfaces                # Type declarations for Flow
+-- server                    # Express application (uses webpack middleware)
�   +-- main.js              # Server application entry point
�   +-- api                  # API Endpoints
�   +-- auth                 # OAuth Authentication
�   +-- config               # Configuration
�   +-- shared               # Shared Modules and Services
�   +-- views                # Views
+-- src                       # Application source code
�   +-- actions              # Redux Action Controllers
�   +-- components           # Generic React Components (generally Dumb components)
�   +-- containers           # Components that provide context (e.g. Redux Provider)
�   +-- layouts              # Components that dictate major page structure
�   +-- reducers             # Redux reducers
�   +-- routes               # Application route definitions
�   +-- static               # Static assets (not imported anywhere in source code)
�   +-- store                # Redux Store
�   +-- styles               # Application-wide styles (generally settings)
�   +-- utils                # Redux Dev tools
�   +-- views                # Components that live at a route
�   +-- main.js              # Application bootstrap and rendering
+-- tests                     # Unit tests
```

### Components vs. Views vs. Layouts

**TL;DR:** They're all components.

This distinction may not be important for you, but as an explanation: A **Layout** is something that describes an entire page structure, such as a fixed navigation, viewport, sidebar, and footer. Most applications will probably only have one layout, but keeping these components separate makes their intent clear. **Views** are components that live at routes, and are generally rendered within a **Layout**. What this ends up meaning is that, with this structure, nearly everything inside of **Components** ends up being a dumb component.

Webpack
-------

### Vendor Bundle
You can redefine which packages to bundle separately by modifying `compiler_vendor` in `~/config/_base.js`. These default to:

```js
[
  'history',
  'react',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux'
]
```

### Webpack Root Resolve
Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), which lets you import local packages as if you were traversing from the root of your `~/src` directory. Here's an example:

```js
// current file: ~/src/views/some/nested/View.js

// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

### Globals

These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found as the `globals` key in `~/config/_base.js`. When adding new globals, also add them to `~/.eslintrc`.

|Variable|Description|
|---|---|
|`process.env.NODE_ENV`|the active `NODE_ENV` when the build started|
|`__DEV__`|True when `process.env.NODE_ENV` is `development`|
|`__PROD__`|True when `process.env.NODE_ENV` is `production`|
|`__TEST__`|True when `process.env.NODE_ENV` is `test`|
|`__DEBUG__`|True when `process.env.NODE_ENV` is `development` and cli arg `--no_debug` is not set (`npm run dev:no-debug`)|
|`__BASENAME__`|[npm history basename option](https://github.com/rackt/history/blob/master/docs/BasenameSupport.md)|

Server
------

This starter kit comes packaged with an Express server. It's important to note that the sole purpose of this server is to provide `webpack-dev-middleware` and `webpack-hot-middleware` for hot module replacement. If you're deploying to production, take a look at [the deployment section](#deployment).


Testing
-------

To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them. If you are using `redux-cli`, test files should automatically be generated when you create a component or redux module (duck).

Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/_base.js`.

Deployment
----------

Out of the box, this starter kit is deployable by serving the `~/dist` folder generated by `npm run compile` (make sure to specify your target `NODE_ENV` as well). This project does not concern itself with the details of server-side rendering or API structure, since that demands an opinionated structure that makes it difficult to extend the starter kit. However, if you do need help with more advanced deployment strategies, here are a few tips:

If you are serving the application via a web server such as nginx, make sure to direct incoming routes to the root `~/dist/index.html` file and let react-router take care of the rest. The Express server that comes with the starter kit is able to be extended to serve as an API or whatever else you need, but that's entirely up to you.

Have more questions? Feel free to submit an issue or join the Gitter chat!

Troubleshooting
---------------

### `npm run dev:nw` produces `cannot read location of undefined.`

This is most likely because the new window has been blocked by your popup blocker, so make sure it's disabled before trying again.

Reference: [issue 110](https://github.com/davezuko/react-redux-starter-kit/issues/110)

### Babel Issues

Running into issues with Babel? Babel 6 can be tricky, please either report an issue or try out the [stable v0.18.1 release](https://github.com/davezuko/react-redux-starter-kit/tree/v0.18.1) with Babel 5. If you do report an issue, please try to include relevant debugging information such as your node, npm, and babel versions.

### Babel Polyfill

By default this repo does not bundle the babel polyfill in order to reduce bundle size. If you want to include it, you can use [this commit](https://github.com/jokeyrhyme/react-redux-starter-kit/commit/f3f095b547ee63474b9361128bb95d370da04b35) from [jokeyrhyme](https://github.com/jokeyrhyme) as a reference.

### Internationalization Support

In keeping with the goals of this project, no internationalization support is provided out of the box. However, [juanda99](https://github.com/juanda99) has been kind enough to maintain a fork of this repo with internationalization support, [check it out!](https://github.com/juanda99/react-redux-starter-kit)

### Deployment Issues (Generally Heroku)

Make sure that your environment is installing both dependencies _and_ devDependencies, since the latter are required to build the application. You can also reference [this issue](https://github.com/davezuko/react-redux-starter-kit/issues/571) for more details.

### High editor CPU usage after compilation

While this is common to any sizable application, it's worth noting for those who may not know: if you happen to notice higher CPU usage in your editor after compiling the application, you may need to tell your editor not to process the dist folder. For example, in Sublime you can add:

```
  "folder_exclude_patterns": [".svn", ".git", ".hg", "CVS", "node_modules", "dist"]
```

