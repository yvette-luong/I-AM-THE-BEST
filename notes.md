# INSTRUCTIONS

1. set up store provider for app
    - index.js and wrap app with provider
    - create store add apply middle and thunk

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

2. Create the actions and reducers folder, and the components
    - create actions and reducers for each data set/feature you're bringing in
    - for example, if you are creating a journal feature, you would create `journalActions.js` in the actions folder, and `journalReducer` in the reducer folder
    - or if you are going to bring in a feature that stores data for a user, you would have a `usersActions.js` or a `usersReducer.js`

3. Create your components which will pull in your props from the store
    - create the onclicks and the mapping, etc, as if you are aleady pulling from the store

4. Then create your actions and reducers
    - create an index file for both actions and reducers folder to export all reducers/actions in one file

5. Finally connect the components to the store
