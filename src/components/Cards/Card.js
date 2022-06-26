/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "../../App.css";
import { Context } from "../../context";
import {
  addRepo,
  deleteRepo,
  showSearch,
  setText,
} from "../../context/actions";

export default function Card({ value, type }) {
  const { state, dispatch } = useContext(Context);
  const getTime = (dateString) => {
    var ageInMilliseconds = new Date() - new Date(dateString);
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    if (ageInMilliseconds / year > 1) {
      return `${Math.floor(ageInMilliseconds / year)} Years ago`;
    } else {
      if (ageInMilliseconds / day > 1) {
        return `${Math.floor(ageInMilliseconds / day)} days ago`;
      } else {
        if (ageInMilliseconds / hour > 1) {
          return `${Math.floor(ageInMilliseconds / hour)} hours ago`;
        } else {
          return `${Math.floor(ageInMilliseconds / minute)} minutes ago`;
        }
      }
    }
  };

  const handleAdd = (i) => {
    const findIndex = state.choosenList.find((value) => value.id === i.id);

    if (!findIndex) {
      const newData = [...state.choosenList, i];
      addRepo(newData, dispatch);
      setText("", dispatch);
      showSearch(false, dispatch);
    }
  };
  const handleDelete = (i) => {
    const findIndex = state.choosenList.find((value) => value.id === i.id);
    if (findIndex) {
      const newData = [...state.choosenList].filter(
        (value) => value.id !== i.id
      );
      deleteRepo(newData, dispatch);
    }
  };

  const handleClick = (i) => {
    if (type == "add") {
      handleAdd(i);
    } else {
      handleDelete(i);
    }
  };

  return (
    <div className="card" key={value.id}>
      <div className="cardRow">
        <div className="text">
          {value.name}/{value.owner.login}
        </div>
        <img
          src={value?.owner?.avatar_url}
          alt="Trulli"
          width="30"
          height="30"
        ></img>
      </div>
      <div className="underline" />
      <div className="cardRow">
        <div className="text">Stars</div>
        <div className="textR">{value.score}</div>
      </div>
      <div className="cardRow">
        <div className="text">Forks</div>
        <div className="textR">{value.forks_count}</div>
      </div>
      <div className="cardRow">
        <div className="text">Open issues</div>
        <div className="textR">{value.open_issues_count}</div>
      </div>
      <div className="cardRow">
        <div className="text">Age</div>
        <div className="textR">{getTime(value.created_at)}</div>
      </div>
      <div className="cardRow">
        <div className="text">Last commit</div>
        <div className="textR">{getTime(value.updated_at)}</div>
      </div>
      <div className="cardRow">
        <div className="text">License</div>
        <div className="textR">{value.license?.key}</div>
      </div>
      <div className="cardRow">
        <div className="text">Language</div>
        <div className="textR">{value.language}</div>
      </div>
      <div className="underline" />
      <div
        className="button"
        onClick={() => {
          handleClick(value);
        }}
      >
        {type == "add" ? "Add repo" : "Delete epo"}
      </div>
    </div>
  );
}
