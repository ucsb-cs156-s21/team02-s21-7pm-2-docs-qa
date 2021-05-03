import React, { useState } from "react";
import EarthquakeForm from "main/components/Earthquakes/EarthquakeForm";
import EarthquakesList from "main/components/Earthquakes/EarthquakesList";
import { useToasts } from "react-toast-notifications";

export const formatUrl = (distance, minMag) =>
  `/api/earthquakes/get?distance=${distance}&minMag=${minMag}`;

const EarthquakesPage = () => {
  const [earthquakes, setEarthquakes] = useState(null);
  const { addToast } = useToasts();

  const onSubmit = (newFormData) => {
    const url = formatUrl(newFormData.distance, newFormData.minMag);
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
        setEarthquakes(data);
      })
      .catch((err) => {
        addToast(`Error getting data from ${url}: ${err}`, {
          appearance: "error",
        });
      });
  };

  return (
    <>
      <h1>Earthquakes Page</h1>
      <EarthquakeForm submitCallback={onSubmit} />
      <EarthquakesList data={earthquakes} />
    </>
  );
};

export default EarthquakesPage;
