import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const data = ["apple", "banana", "cherry", "date", "elderberry"];

  const handleChange = (e) => {
    const input = e.target.value;
    if (input.trim() !== "") {
      setQuery(input);
      fetchSuggestions(input);
    } else {
      setQuery("");
      setResults([]);
    }
  };

  const fetchSuggestions = async (input) => {
    const response = await data.filter((item) =>
      item.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    setResults(response);
  };

  return (
    <div>
      <hr />
      <h3>Search bar</h3>
      Input: <input type="text" value={query} onChange={handleChange} />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
