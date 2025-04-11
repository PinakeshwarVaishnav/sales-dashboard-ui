import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json";

// A simple array of colors to cycle through
const simpleColors = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
];

export default function SalesMapping() {
  return (
    <div className="h-full">
      <h1 className="text-xl font-bold">Sales Mapping by Country</h1>
      <ComposableMap
        projection="geoMercator"
        style={{ width: "100%", height: "500px" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.properties.name !== "Antarctica")
              .map(
                (
                  geo,
                  index, // Get the index here
                ) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={simpleColors[index % simpleColors.length]} // Cycle through colors based on index
                    stroke="#e8e8e8"
                    strokeWidth={0.5}
                  />
                ),
              )
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
