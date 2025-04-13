import { selectDestination, selectOrigin } from "@/features/nav/navSlice";
import { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";

const GMap = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    if (!origin?.location || !destination?.location || !mapRef.current) return;

    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [
    origin?.location?.lat,
    origin?.location?.lng,
    destination?.location?.lat,
    destination?.location?.lng,
  ]);

  if (!origin?.location?.lat) return null;

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      //   mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location?.lat !== undefined &&
        origin?.location?.lng !== undefined &&
        destination?.location?.lat !== undefined &&
        destination?.location?.lng !== undefined && (
          <MapViewDirections
            origin={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            destination={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            apikey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_APIKEY || ""}
            strokeWidth={3}
            strokeColor="blue"
            // lineDashPattern={[0, 1]}
            // onReady={(result) => {
            //   console.log(result);
            // }}
          />
        )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location?.lat,
            longitude: origin?.location?.lng,
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};
export default GMap;
