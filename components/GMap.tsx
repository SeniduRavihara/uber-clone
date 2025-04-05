import { selectOrigin } from "@/features/nav/navSlice";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";

const GMap = () => {
  const origin = useSelector(selectOrigin);

  if(!origin?.location?.lat) return null;

  return (
    <MapView
      style={{ flex: 1 }}
      //   mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};
export default GMap;
