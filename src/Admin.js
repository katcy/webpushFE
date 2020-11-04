import React, { useState } from "react";
import "./App.css";

const Admin = () => {
  const [imsg, setimsg] = useState("We miss you...");
  const [tmsg, settmsg] = useState(
    "Enjoying our app? Chat with out sales team to upgrade."
  );
  const [user, setuser] = useState("kat@kat");
  const [msg, setmsg] = useState("You are busted");
  return (
    <div className="App">
      <div className="App-header">
        Admin
        <div className="d-flex">
          <div className="d-flex flex-column">
            <input
              className="mb-2"
              onChange={(evt) => {
                setimsg(evt.target.value);
              }}
            />
            <button
              className="btn btn-primary"
              onClick={(evt) => {
                fetch("https://stark-beyond-35806.herokuapp.com/inactive", {
                  method: "POST",
                  body: JSON.stringify({ imsg }),
                  headers: {
                    "content-type": "application/json",
                  },
                });
              }}
            >
              Send reminder for inactive users
            </button>
          </div>
          <div className="d-flex flex-column ml-3">
            <input
              className="mb-2"
              onChange={(evt) => {
                settmsg(evt.target.value);
              }}
            />
            <button
              className="btn btn-primary"
              onClick={(evt) => {
                fetch("https://stark-beyond-35806.herokuapp.com/trial", {
                  method: "POST",
                  body: JSON.stringify({ tmsg }),
                  headers: {
                    "content-type": "application/json",
                  },
                });
              }}
            >
              Send reminder for trial users
            </button>
          </div>
        </div>
        <div className="mt-3 d-flex flex-column">
          <input
            placeholder="user"
            value={user}
            className="mb-2"
            onChange={(evt) => {
              setuser(evt.target.value);
            }}
          />
          <input
            value={msg}
            placeholder="msg"
            className="mb-2"
            onChange={(evt) => {
              setmsg(evt.target.value);
            }}
          />
          <button
            className="btn btn-primary"
            onClick={(evt) => {
              fetch("https://stark-beyond-35806.herokuapp.com/pushtouser", {
                method: "POST",
                body: JSON.stringify({ user, msg }),
                headers: {
                  "content-type": "application/json",
                },
              });
            }}
          >
            Push for particular user
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
