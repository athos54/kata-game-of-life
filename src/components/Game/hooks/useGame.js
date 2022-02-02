import { useState } from "react";

export const useGame = () => {
  const [tableStatus, setTableStatus] = useState(null);
  const [currentDay, setCurrentDay] = useState(0);

  const generateTableStatus = ({ tableSize }) => {
    /**
     * table = {
     *  rows:[
     *      {cells: [0, 0, 0]},
     *      {cells: [0, 0, 0]},
     *      {cells: [0, 0, 0]},
     *  ]
     * }
     */

    const table = {
      rows: [],
    };
    for (let i = 0; i < tableSize; i++) {
      table.rows.push({ cells: [] });
      for (let j = 0; j < tableSize; j++) {
        table.rows[i].cells.push(Math.round(Math.random()));
      }
    }

    setTableStatus(table);
  };

  const nextDay = () => {
    setCurrentDay(currentDay + 1);
  };

  return {
    tableStatus,
    generateTableStatus,
    nextDay,
    currentDay,
  };
};
