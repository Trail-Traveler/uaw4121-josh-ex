import { useCallback, useRef } from "react";
import Results from "./Components/Results/Results";
import SearchForm from "./Components/Search/SearchForm";
import CardSection from "./Components/CardSection/CardSection";
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
      <CardSection title="Search">
        <SearchForm
          ref={searchRef}
          onSearchClick={onSearchClick}
          isLoading={isLoading}
        />
      </CardSection>
      <CardSection title="Results">
        <Results
          data={data}
          isLoading={isLoading}
          error={error}
          searchTerm={searchRef.current?.value}
        />
      </CardSection>
    </div>
  );
};

export default App;
