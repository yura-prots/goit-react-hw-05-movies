const Searchbar = () => {
  return (
    <>
      <form>
        <input
          type="text"
          name="query"
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
