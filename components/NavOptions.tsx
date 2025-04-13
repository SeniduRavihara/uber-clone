import { selectOrigin } from "@/features/nav/navSlice";
import { Icon } from "@rneui/themed";
import { useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "/",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "/(map)",
  },
];

const NavOptions = () => {
  const origin = useSelector(selectOrigin);

  const router = useRouter();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          onPress={() => {
            router.push(item.screen as any);
          }}
          disabled={!origin}
        >
            <View style={{ opacity: !origin ? 0.5 : 1 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />

            <Text className="mt-2 text-lg font-semibold text-center">
              {item.title}
            </Text>

            <Icon
              name="arrowright"
              color="white"
              type="antdesign"
              className="flex items-center justify-center bg-black rounded-full w-10 h-10 mt-4"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
