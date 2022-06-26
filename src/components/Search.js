/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import Cards from "./Cards/Cards";
import { Context } from "../context";
import { getRepos } from "../context/actions";

export default function Search() {
  const [current, setCurrent] = useState(1);
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    state.showSearch === true &&
      getRepos({ text: state.text, current: current }, dispatch);
  }, [state.showSearch]);
  useEffect(() => {
    getRepos({ text: state.text, current: current }, dispatch);
  }, [current]);

  const handleNext = () => {
    setCurrent(current + 1);
  };
  const handlePrevious = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <div className="paginationHolder">
        <div className="pagination">
          {current !== 1 && (
            <div className="paginationButton" onClick={handlePrevious}>
              « Prev
            </div>
          )}
          {current !== state.pages && (
            <div className="paginationButton" onClick={handleNext}>
              Next »
            </div>
          )}
        </div>
      </div>
      {state.loading ? (
        <div className="Loading">loading ..... </div>
      ) : (
        <Cards data={state.repoList} type="add" />
      )}
    </div>
  );
}
