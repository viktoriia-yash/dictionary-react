import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InputContext } from "../App";
import Antonym from "./Antonym";
import Example from "./Example";
import MeanigsDefinitions from "./MeanigsDefinitions";
import Synonym from "./Synonym";

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const SearchResult = () => {
  const { inputValue } = useContext(InputContext);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(`/${param}`);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);

  if (loading) {
    return (
      <div className="animate-pulse loading">
        <div className="h-6 bg-gray-200 mt-5 mx-auto w-4/5"></div>
        <div className="h-40 bg-gray-200 mt-5 mx-auto w-4/5"></div>
        <div className="h-8 bg-gray-200 mt-5 mx-auto w-4/5"></div>
        <div className="h-40 bg-gray-200 mt-5 mx-auto w-4/5"></div>
      </div>
    );
  }

  if (error) {
    return <h3 className="text-center noDefinition">No Definitions Found</h3>;
  }

  return (
    <div className="searchResult">
      {response && (
        <div>
          <h3 className="meaningResult">Meaning & Definitions:</h3>
          <MeanigsDefinitions mean={response} />
          <h3 className="exampleResult">Example:</h3>
          <Example mean={response} />
          <h3 className="synonymsResult">Synonyms:</h3>
          <Synonym mean={response} />
          <h3 className="antonymsResult">Antonyms:</h3>
          <Antonym mean={response} />
        </div>
      )}
    </div>
  );
};

export default SearchResult;
