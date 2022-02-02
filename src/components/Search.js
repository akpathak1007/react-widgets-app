import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import wiki from "./../api/wikipedia";
const Search = () => {
  const [term, setTerm] = useState("Programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResult] = useState([]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [term]);
  useEffect(() => {
    const search = async () => {
      const { data } = await wiki.get("api.php", {
        params: {
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };
    search();
  }, [debouncedTerm]);
  const renderResult = results.map((result) => {
    return (
      <li key={result.pageid} className="list-group-item">
        <h3 className="mt-2 mb-3">{result.title}</h3>
        <p>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </p>
        <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
          <button className="btn btn-outline-danger">read more</button>
        </a>
      </li>
    );
  });
  return (
    <div className="container my-4">
      <input
        value={term}
        className="form-control mb-3"
        type="text"
        placeholder="Type here..."
        onChange={(e) => setTerm(e.target.value)}
      />
      <ul className="list-group my-3">{renderResult}</ul>
    </div>
  );
};

export default Search;
