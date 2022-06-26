/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../App.css";
import Card from "./Card";

export default function Cards({ data, type }) {
  return (
    <div className="CardContainer">
      {data?.map((value) => (
        <Card value={value} type={type} />
      ))}
    </div>
  );
}
