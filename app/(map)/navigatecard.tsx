import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
const NavigateCard = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-center py-5 text-xl">Good Morning, Senidu</Text>

      <View className="border-t border-gray-200 flex-shrink">
        <GooglePlacesAutocomplete
          query={{
            key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            dispatch({
              type: "SET_DESTINATION",
              payload: {
                location: details.geometry.location,
                description: data.description,
              },
            });
          }}
          styles={toInputBoxStyles}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          enablePoweredByContainer={false}
          debounce={400}
          placeholder="Where To?"
        />
      </View>
    </SafeAreaView>
  );
};
export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    height: 54,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
