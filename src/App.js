import { createContext, useState } from "react";
import Header from "./parts/Header";
import SearchResult from "./parts/SearchResult";
import "./App.css";

export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={value}>
      <div className="body">
        <Header />
        <SearchResult />
      </div>
    </InputContext.Provider>
  );
}

export default App;
