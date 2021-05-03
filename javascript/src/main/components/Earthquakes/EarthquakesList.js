import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const addTestId = (_cell, _row, rowIndex, colIndex) => ({
  "data-testid": `row-${rowIndex}-col-${colIndex}`,
});

const columns = [
  {
    dataField: "id",
    text: "Id",
    sort: true,
    attrs: addTestId,
  },
  {
    dataField: "properties.mag",
    text: "Magnitude",
    sort: true,
    attrs: addTestId,
  },
  {
    dataField: "properties.place",
    text: "Place",
    sort: true,
    attrs: addTestId,
  },
];

const EarthquakesList = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <BootstrapTable
            bootstrap4={true}
            keyField={"id"}
            columns={columns}
            data={data.features}
            striped
            hover
            condensed
          />
        </>
      ) : (
        <p>Fill in form and press submit to list earthquakes.</p>
      )}
    </>
  );
};

export default EarthquakesList;
