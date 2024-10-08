import React, { useState } from 'react';

function KeywordResearch() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults(['Keyword 1', 'Keyword 2', 'Keyword 3']);
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Keyword Research</h2>
      <div className="mb-4">
        <label className="block mb-2">Enter Keyword</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 mb-4">
        Search
      </button>
      <ul className="list-disc pl-5 space-y-2">
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </section>
  );
}

export default KeywordResearch;