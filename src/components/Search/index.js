import { useSearch } from "./useSearch.js";

const Search = () => {
  const { onChangeSearchNumber } = useSearch();

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="number"
          onChange={(e) => {
            onChangeSearchNumber( e.target.value);

          }}
        />
      <div className="resultAlbums"></div>
      </header>
    </div>
  );
};

export  {Search};
