---
published: false
---
## React + Material UI + Travis CI + Github Pages Setup


Ever just need some quick steps to getting your web project published and don't want to deal with maintenance of a backend? This article will walk you through a basic setup using React, React router, Material UI, Travis CI, Github Pages. The best part is that it is all free!

### Create React project

Start by creating your and installing all dependencies

```bash
create-react-app my-app
cd my-app
npm install @material-ui/core react-router react-router-dom
```

### Project Layout

I like to organize my project like the following

```
src
|
|_routes
| |_index.js
| |_home.js
| |_settings.js
|
|_components
| |_component1.js
| |_component2.js
| |_appToolbar.js
|
|_index.js
|_index.css
|_app.js
```

### App.js

At the highest level you should have something like this


```jsx
import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Routes from './routes';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

class App extends Component {
  UNSAFE_componentWillMount() {
    // if you'd like to keep background color the same as your primary color
    document.body.style.backgroundColor = theme.palette.primary.main;
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default App;
```

If you'd like to further customize your theme then refer to the [documentation](https://material-ui.com/customization/themes/).


### Routes/index.js

Now that you have your App setup it's time to create some routes. The very important part here is to add `basename` with a value of `process.env.PUBLIC_URL` to your router as a property. Later on `PUBLIC_URL` will be set by travis ci, so it is NECESSARY. If you'd like to further configure your router then refer to the [documentation](https://reacttraining.com/react-router/web/guides/philosophy).


```jsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './home';
import SettingsPage from './settings';
import Toolbar from '../components/toolbar';

// should be in a separate file
const AuthenticatedRoute = props => {
  if (!isLoggedIn()) { // custom way to check is logged in goes here
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location }
        }}
      />
    );
  }

  return (
    <div>
      <Toolbar />
      <Route {...props} />
    </div>
  );
};


export default () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={HomePage} />
      <AuthenticatedRoute exact path="/settings" component={SettingsPage} />
    </div>
  </Router>
);

```

### Routes/home.js

Now for a simple route setup. Here is how to style using material ui

```jsx
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.homePage}>
        <div className={classes.titleContainer}>
          <Typography variant="display4">Tasty</Typography>
          <Typography variant="subheading">Recipes made easy</Typography>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  homePage: {},
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
});

export default withStyles(styles)(HomePage);
```

### Github

To enable Github pages you first need to create a branch on github called `gh-pages`. This branch will be the branch that TravisCI will publish to during the CI process.

You also need to get a github token. If you already have one then skip to the next step, otherwise go to [https://github.com/settings/tokens](https://github.com/settings/tokens) and click `generate new token`. The next step asks you for what permissions to give to apps with the token. Make sure to enable all the repo permissions and that's it. Make sure to keep a copy of this token because Github WILL NOT allow you to see it again for security reasons. Save this token for the next step.

### TravisCI

To publish to github pages you can use any CI process you'd like. I chose Travis because I've used it before and the configuration setup is pretty easy. First sign up for a free account on [https://travis-ci.org/](https://travis-ci.org/).

Next go to your profile page by clicking on your username in the navigation bar at the top right of the travis page. This should bring up a list of your repositories. Click the switch on so that the your repository that you want to setup for Github Pages publishing is turned on and "activated".

Next click the settings of icon for that repo. Then setup environment variables called `baseurl` which is the name of your repo with a slash at the beginning as well as the environment variable called `GITHUB_TOKEN`. If you don't have a github token, then read the previous step all the way through.  Make sure to keep the github token a SECRET by not displaying them in the logs! Mine look something like this

![TravisCI environment vars](img/travisci-env-vars.png)


### .travis.yml

Almost all setup. All you need to do is create a `.travis.yml` file in the root of your project and sit back and watch the magic. Here is an example of a `.travis.yml` file that I use.

```yml
language: node_js

node_js:
  - "8"

install:
  - npm install

script:
  - npm -v
  - npm run build

env:
  - CXX=g++-4.8

cache:
  directories:
    - "node_modules"

deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GITHUB_TOKEN  # Set in travis-ci.org dashboard, marked secure
  keep-history: true
  local-dir: build
  on:
    branch: master
```
