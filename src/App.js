import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import PortraitView from "./views/PortraitView";
import HorizontalView from "./views/HorizontalView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { switched: false };
  }

  changeView() {
    this.setState({ switched: !this.state.switched });
  }

  render() {
    const switched = this.state.switched;
    let view;
    if (switched) {
      view = <HorizontalView />;
    } else {
      view = <PortraitView />;
    }

    return (
      <View style={[styles.container]}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.changeView()}
        >
          <Text>Zmiana</Text>
        </TouchableOpacity>
        {view}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default App;
