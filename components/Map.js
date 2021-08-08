import ReactMapGL, {Marker, Popup} from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function Map({ results }) {
  const points = results.map((result) => {
    return {
      latitude: result.lat,
      longitude: result.long,
    };
  });
  const center = getCenter(points);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/xitiz007/cks2zgcb863v017pedlzwc7gz"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {results.map((result, index) => (
        <div key={index}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p onClick={() => setSelectedLocation(result)} className="text-2xl cursor-pointer animate-bounce">📌</p>
          </Marker>
          {
              selectedLocation.long === result.long && selectedLocation.lat === result.lat &&
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
              >
                  {result.title}
              </Popup>
          }
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
