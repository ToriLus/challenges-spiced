import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";
import { SWRConfig } from "swr";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  function Coords() {
    const { data, error, isLoading, mutate } = useSWR(URL);

    console.log(data);

    if (data)
      return (
        <main>
          <h1>nope</h1>
          <Map longitude={data.longitude} latitude={data.latitude} />
          <Controls
            longitude={data.longitude}
            latitude={data.latitude}
            // onRefresh={() => mutate()}
          />
        </main>
      );
    else if (data === undefined) {
      return (
        <main>
          <h1>hello</h1>
        </main>
      );
    }
  }

  Coords();
}
