import useNewWord from "../Store/newWord";
import { useState } from "react";
import "./Search.css";

function Search() {
  const [input, setWordInput] = useState("");

  const inputWord = useNewWord((state) => state.setWord);

  const handleButtonSearch = (e) => {
    e.preventDefault();
    inputWord(input);
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="word" className="label-form-group">Search for a word:</label>
        <input
          type="text"
          className="input-form-group"
          id="word"
          value={input}
          onChange={(e) => setWordInput(e.target.value)}
        />
      </div>
      <button onClick={handleButtonSearch}>Search</button>
    </div>
  );
}

export default Search;
