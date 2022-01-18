import React from "react";
import { Cell } from "./Cell";

export const Row = ({ row }) => {
  return (
    <tr>
      {row.cells.map((cell, index) => {
        return <Cell key={index} cell={cell} />;
      })}
    </tr>
  );
};
