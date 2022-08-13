// client/src/App.js

import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Section from "./Components/section/Section";

function App() {
  const [data, setData] = React.useState(null);
  const searchRef = useRef();
  const searchClick = () => {
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ last_name: searchRef.current.value }),
    })
      .then((res) => res.json())
      .then((data) => setData(data.users));
  };
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.users));
  // }, []);

  return (
    <div className="App">
      <Section>
        <input ref={searchRef} />
        <Button onClick={searchClick}>Search</Button>
      </Section>
      <Section>
        <header className="App-header">
          <p>
            {!data
              ? "Loading..."
              : data.map((a) => (
                  <li key={a.id}>
                    {a.first_name} {a.last_name}
                  </li>
                ))}
          </p>
        </header>
      </Section>
    </div>
  );
}

export default App;
