import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const addTestId = (_cell, _row, rowIndex, colIndex) => ({
  "data-testid": `row-${rowIndex}-col-${colIndex}`,
});

const columns = [
  {
    dataField: "date",
    text: "Date",
    sort: true,
    attrs: addTestId,
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
    attrs: addTestId,
  },
  {
    dataField: "localName",
    text: "Local Name",
    sort: true,
    attrs: addTestId,
  },
];

const PublicHolidaysList = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <BootstrapTable
            bootstrap4={true}
            keyField={"name"}
            columns={columns}
            data={data}
            striped
            hover
            condensed
          />
        </>
      ) : (
        <p>Fill in form and press submit to list public holidays.</p>
      )}
    </>
  );
};

export default PublicHolidaysList;
