import "./App.css";
import { useContext } from "react";
import Search from "./components/Search";
import Main from "./components/Main";
import { Context } from "./context";
import { showSearch, setText } from "./context/actions";

function App() {
  const { state, dispatch } = useContext(Context);

  const onSearch = (e) => {
    const data = e.target.value;
    setText(data, dispatch);
  };

  const OnSearch = () => {
    showSearch(true, dispatch);
  };

  return (
    <div className="App">
      <div className="Body">
        <div />
        <div>
          <div className="search">
            <input
              className="searchTerm"
              onChange={onSearch}
              value={state.text}
              placeholder="Enter repo name here..."
            />
            <button className="searchButton" onClick={OnSearch}>
              search
            </button>
          </div>

          {state.showSearch ? <Search /> : <Main />}
        </div>
      </div>
      <div />
    </div>
  );
}

export default App;
