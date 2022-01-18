import React from "react";
import { Row } from "./components/Row";

export const Game = ({ tableStatus }) => {
  return (
    <table>
      <tbody>
        {tableStatus.rows.map((row, index) => {
          return <Row key={index} row={row} />;
        })}
      </tbody>
    </table>
  );
};
