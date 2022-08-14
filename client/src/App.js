import { useCallback, useRef } from "react";
import Results from "./Components/Results/Results";
import SearchForm from "./Components/Search/SearchForm";
import Section from "./Components/Section/Section";
import useHttp from "./hooks/useHttp";

const App = () => {
  const { data, isLoading, error, sendRequest, clear } = useHttp();
  const searchRef = useRef();
  const onSearchClick = useCallback(
    (e) => {
      clear();
      e.preventDefault();
      const val = searchRef.current.value;
      sendRequest("/api", { last_name: val }, "");
    },
    [sendRequest, clear]
  );

  return (
    <div className="App">
      <Section title="Search">
        <SearchForm
          ref={searchRef}
          onSearchClick={onSearchClick}
          isLoading={isLoading}
        />
      </Section>
      <Section title="Results">
        <Results
          data={data}
          isLoading={isLoading}
          error={error}
          searchTerm={searchRef.current?.value}
        />
      </Section>
    </div>
  );
};

export default App;
