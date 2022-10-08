import { useContext, useState } from "react";
import { InputContext } from "../App";

const Header = () => {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value);
      setValue("");
    }
  };

  return (
    <div className="header-container">
      <div className="header-context">
        <h1 className="font-bold text-center project-name">Dictionary</h1>
        <div className="text-center credit">
          <a
            href="/"
            className="font-bold github"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Viktoriia Yashkina
        </div>
        <div className="inputs">
          <div className="inputs-container">
            <input
              className="searchBar"
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
              value={value}
              onKeyDown={handleInputKeyDown}
            />
            <button className="searchBtn" onClick={handleSubmit}>
              Search
            </button>
          </div>
        </div>

        {inputValue && (
          <h3 className="text-center resultFor">
            Result for: <span className="font-bold">{inputValue}</span>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Header;
