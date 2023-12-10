import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx"
import {createStore} from "redux";
import {Provider} from "react-redux";
//characters reducer
import rootReducer from "./reducers"
import {addCharacterById} from "./actions/index.jsx";

const store = createStore(rootReducer);
store.subscribe(()=>console.log("myStore",store.getState()))
console.log("store " , store.getState())
store.dispatch(addCharacterById(3))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))