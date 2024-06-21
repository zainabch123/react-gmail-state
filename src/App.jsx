import Header from "./components/Header";
import initialEmails from "./data/emails";
import { useState } from "react";

import "./styles/App.css";

function App() {
  // Use initialEmails for state
  console.log(initialEmails);

  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox")

  let displayedEmails = emails
  
  // function toggleRead(email) {
  //   email.read = !email.read;
  //   setEmails([...emails]);
  // }

  // function toggleStarred(email) {
  //   email.starred = !email.starred;
  //   setEmails([...emails]);
  // }
  
  if (hideRead === true) {
    displayedEmails = emails.filter((email) => email.read === false);
  }
  
  
  console.log("emails: ", emails);
  console.log("hide read checked:", hideRead);

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            onClick={() => {
              setCurrentTab("inbox")
            }}
          >
            <span className="label">Inbox</span>
            <span className="count">{emails.length}</span>
          </li>
          <li
            className="item"
            onClick={() => {
              setCurrentTab("starred")
            }}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={() => {
                setHideRead(!hideRead);
              }}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {displayedEmails.map((email) => (
          <li key={email.id} className="email">
            <div className="select">
              <input
                className="select-checkbox"
                type="checkbox"
                onClick={() => {
                  (email.read = !email.read), setEmails([...emails]);
                }}
                checked={email.read}
              />
            </div>
            <div className="star">
              <input
                className="star-checkbox"
                type="checkbox"
                onClick={() => {
                  (email.starred = !email.starred), setEmails([...emails]);
                }}
                checked={email.starred}
              />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
          </li>
        ))}
      </main>
    </div>
  );
}

export default App;
