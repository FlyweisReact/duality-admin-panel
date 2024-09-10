/** @format */

import React from "react";

const TableLayout = ({ thead, tbody }) => {
  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {thead?.map((i, index) => (
                <th key={`thead${index}`}> {i} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tbody?.map((rowData, rowIndex) => (
              <tr key={`row${rowIndex}`}>
                {rowData?.map((cellData, cellIndex) => (
                  <td key={`cell${cellIndex}`}>{cellData}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableLayout;
