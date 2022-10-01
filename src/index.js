import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter} from "react-router-dom";

//component
import App from "./App"

//stylesheet
import "./style/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    < BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </ BrowserRouter>  
  </React.StrictMode>, 
);