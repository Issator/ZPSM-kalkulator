import React from "react";
import { TouchableOpacity, Text } from "react-native";

const MyButton = (props) => {
  var size = 1;
  var color = props.color;
  if (props.val === "") {
    color = "#3d3d3d";
  }

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: "center",
        borderColor: "#3d3d3d",
        borderWidth: size,
        backgroundColor: color
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
