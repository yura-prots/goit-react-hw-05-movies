import { useState } from 'react';
import { toast } from 'react-toastify';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      return toast.info('Enter movie name');
    }
    onSearch(query);

    setQuery('');
  };

  const handleQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleQuery}
          placeholder="Enter movie name"
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Searchbar;
