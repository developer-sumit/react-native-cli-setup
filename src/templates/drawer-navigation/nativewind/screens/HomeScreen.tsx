import React from "react";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { View, Text, Linking, TouchableOpacity, Image } from "react-native";

const HomeScreen: React.FC = () => {
  const navigator = useNavigation();

  const openNPMPackage = () => {
    Linking.openURL("https://npmjs.com/package/react-native-lab");
  };

  const openGitHubRepo = () => {
    Linking.openURL("https://github.com/developer-sumit/react-native-lab");
  };

  return (
    <View className="flex-1 bg-[#edf2f4]">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigator.dispatch(DrawerActions.openDrawer())}
        className="absolute z-[1] top-5 left-5 p-3 bg-white self-center rounded-md aspect-square gap-y-1 elevation-xl"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <View key={index} className="bg-[#333] w-7 h-1 rounded-md"></View>
        ))}
      </TouchableOpacity>

      <View className="flex-1 gap-y-5 items-center justify-center">
        <Text className="text-xl text-center">React Native Lab</Text>

        <View className="flex-row gap-x-3">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={openGitHubRepo}
            className="shadow-2xl p-3 gap-x-3 rounded-xl bg-white flex-row items-center border-[#121212]"
          >
            <Text className="text-lg font-normal">View on</Text>
            <Image
              source={require("../assets/github.png")}
              className="w-8 h-8"
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={openNPMPackage}
            className="shadow-2xl p-3 gap-x-3 rounded-xl bg-white flex-row items-center border-[#121212]"
          >
            <Text className="text-lg font-normal">View on</Text>
            <Image
              source={require("../assets/npm.png")}
              className="w-12 h-8"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="p-5 pb-10 items-center self-center">
        <Text className="text-[#888]">template by</Text>
        <Text className="text-[#006d77] text-xl font-medium">
          Sumit Singh Rathore
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;