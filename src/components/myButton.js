import React from "react";
import { TouchableOpacity, Text } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "gray"
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          color: "white",
          alignSelf: "stretch",
          textAlign: "center",
          fontSize: 70
        }}
      >
        {props.val}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
