---
published: false
---
## Web App Starter Skeleton


Ever just need some quick steps to getting your web project published and don't want to deal with maintenance of a backend? This article will walk you through a basic setup using React, React router, Material UI, Travis CI, Github Pages.

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
| |_commonComponent1.js
| |_commonComponent2.js
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

Now that you have your App setup it's time to create some routes. The very important part here is to add `basename={process.env.PUBLIC_URL}` to your router as a property. Later on `PUBLIC_URL` will be set by travis ci, so it is NECESSARY. If you'd like to further configure your router then refer to the [documentation](https://reacttraining.com/react-router/web/guides/philosophy).


```jsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './home';
import SettingsPage from './settings';
import Toolbar from '../components/toolbar';

export default () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Toolbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/settings" component={SettingsPage} />
    </div>
  </Router>
);

```
