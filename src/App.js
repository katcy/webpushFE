import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import * as serviceWorker from "./SWRegisterer";

function App() {
  const [email, setemail] = useState("kat@kat");
  return (
    <div className="App">
      <div className="alert alert-warning m-0">
        <Link className="btn btn-secondary" to="/push">
          Send push notification
        </Link>
      </div>
      <header className="App-header">
        <h1>Subscribe to Push Notification</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <input
          placeholder="email"
          className="mb-3"
          onChange={(evt) => {
            setemail(evt.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            serviceWorker.register(email);
          }}
        >
          Subscribe to Push Notification
        </button>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log("Scoring");
            fetch("https://stark-beyond-35806.herokuapp.com/score", {
              method: "GET",
              headers: {
                "content-type": "application/json",
              },
            });
          }}
        >
          Score
        </button>
      </header>
    </div>
  );
}

export default App;
