// client/src/App.js

import React from "react";
import "./App.css";
import Section from "./Components/section/Section";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.users));
  }, []);

  return (
    <div className="App">
      <Section>
        <input />
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
