/* eslint-disable jsx-a11y/anchor-is-valid */
import "../../App.css";
import Cards from "../Cards/Cards";
import { Context } from "../../context";
import { useContext } from "react";

export default function Main() {
  const { state } = useContext(Context);
  return (
    <div>
      {state.choosenList.length === 0 ? (
        <div className="Empty">No Repo Added </div>
      ) : (
        <Cards data={state.choosenList} type="delete" />
      )}
    </div>
  );
}
