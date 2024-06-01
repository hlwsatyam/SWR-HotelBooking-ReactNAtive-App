import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

const LoadingButton = () => {
  return (
    <View className="px-5 my-3">
            <Button title="Solid" color={"green"} type="solid" loading />
          </View>
  );
};

export default LoadingButton;
