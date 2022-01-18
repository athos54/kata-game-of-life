import { useState } from "react";

export const useGame = () => {
  const [tableStatus, setTableStatus] = useState(null);

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
        table.rows[i].cells.push(0); //@TODO this should be a random value with 0 or 1
      }
    }

    setTableStatus(table);
  };

  return {
    tableStatus,
    generateTableStatus,
  };
};
