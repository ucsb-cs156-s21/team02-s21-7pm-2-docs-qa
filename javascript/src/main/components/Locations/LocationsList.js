import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const addTestId = (_cell, _row, rowIndex, colIndex) => ({
  "data-testid": `row-${rowIndex}-col-${colIndex}`,
});

const columns = [
  {
    dataField: "display_name",
    text: "Name",
    sort: true,
    attrs: addTestId,
  },
  {
    dataField: "class",
    text: "Class",
    sort: true,
    attrs: addTestId,
  },
  {
    dataField: "type",
    text: "Type",
    sort: true,
    attrs: addTestId,
  },
  {
    dataField: "lat",
    text: "Lat",
    sort: true,
    attrs: addTestId,
  },
  {
    dataField: "lon",
    text: "Lon",
    sort: true,
    attrs: addTestId,
  },
];

const LocationsList = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <BootstrapTable
            bootstrap4={true}
            keyField={"place_id"}
            columns={columns}
            data={data}
            striped
            hover
            condensed
          />
        </>
      ) : (
        <p>Fill in form and press submit to list Locations.</p>
      )}
    </>
  );
};

export default LocationsList;
