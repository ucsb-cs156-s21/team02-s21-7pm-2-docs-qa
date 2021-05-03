import React, { useState } from "react";
import LocationForm from "main/components/Locations/LocationForm";
import LocationsList from "main/components/Locations/LocationsList";
import { useToasts } from "react-toast-notifications";

export const formatUrl = (location) =>
  `/api/locations/get?location=${location}`;

const LocationsPage = () => {
  const [Locations, setLocations] = useState(null);
  const { addToast } = useToasts();

  const onSubmit = (newFormData) => {
    const url = formatUrl(newFormData.location);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Response from server: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setLocations(data);
      })
      .catch((err) => {
        addToast(`Error getting data from ${url}: ${err}`, {
          appearance: "error",
        });
      });
  };

  return (
    <>
      <h1>Locations Page</h1>
      <LocationForm submitCallback={onSubmit} />
      <LocationsList data={Locations} />
    </>
  );
};

export default LocationsPage;
