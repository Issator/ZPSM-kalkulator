import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MyButton from "../components/myButton";

class PortraitView extends Component {
  state = {
    toCalcNum: ""
  };

  evil = (fn) => {
    try {
      return new Function("return " + fn)();
    } catch (e) {
      console.log("złe Dane");
    }
  };

  onPress = (value) => {
    var newVal = "";

    switch (value) {
      case "AC": {
        newVal = "";
        break;
      }
      case "=": {
        var valTest = this.evil(this.state.toCalcNum);
        if (valTest !== undefined) {
          newVal = valTest;
        } else {
          console.log("złe Dane");
        }
        break;
      }
      default: {
        newVal = this.state.toCalcNum + value;
      }
    }

    this.setState({
      toCalcNum: newVal
    });
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: "column"
          }
        ]}
      >
        <View style={{ flex: 1, backgroundColor: "#1d1d1d" }}>
          <Text style={styles.texts}>{this.state.toCalcNum}</Text>
        </View>

        <View style={styles.styleView}>
          <MyButton val="AC" onPress={() => this.onPress("AC")} />
          <MyButton val="" />
          <MyButton val="" />
          <MyButton val="/" onPress={() => this.onPress("/")} color="#fcba03" />
        </View>

        <View style={styles.styleView}>
          <MyButton val="7" onPress={() => this.onPress("7")} />
          <MyButton val="8" onPress={() => this.onPress("8")} />
          <MyButton val="9" onPress={() => this.onPress("9")} />
          <MyButton val="X" onPress={() => this.onPress("*")} color="#fcba03" />
        </View>

        <View style={styles.styleView}>
          <MyButton val="4" onPress={() => this.onPress("4")} />
          <MyButton val="5" onPress={() => this.onPress("5")} />
          <MyButton val="6" onPress={() => this.onPress("6")} />
          <MyButton val="-" onPress={() => this.onPress("-")} color="#fcba03" />
        </View>

        <View style={styles.styleView}>
          <MyButton val="1" onPress={() => this.onPress("1")} />
          <MyButton val="2" onPress={() => this.onPress("2")} />
          <MyButton val="3" onPress={() => this.onPress("3")} />
          <MyButton val="+" onPress={() => this.onPress("+")} color="#fcba03" />
        </View>

        <View style={styles.styleView}>
          <MyButton val="0" onPress={() => this.onPress("0")} />
          <MyButton val="" />
          <MyButton val="." onPress={() => this.onPress(".")} />
          <MyButton val="=" onPress={() => this.onPress("=")} color="#fcba03" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  texts: {
    color: "white",
    alignSelf: "stretch",
    textAlign: "right",
    fontSize: 70
  },
  styleView: {
    flex: 1,
    backgroundColor: "gray",
    flexDirection: "row"
  }
});

export default PortraitView;
