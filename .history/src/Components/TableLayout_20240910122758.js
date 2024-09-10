/** @format */

import React from "react";
import { Table } from "react-bootstrap";

const TableLayout = ({ thead, tbody, loading }) => {
  return (
    <>
      <div className="overFlowCont">
        <Table>
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
        </Table>
      </div>
    </>
  );
};

export default TableLayout;
