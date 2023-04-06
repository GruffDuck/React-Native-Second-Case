import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>MASTERMIND</Text>
      </View>
      <View style={styles.bricks}>
        <View
          style={[styles.brick, { backgroundColor: "#ff7860", marginLeft: 15 }]}
        ></View>
        <View style={[styles.brick, { backgroundColor: "#97e241" }]}></View>
        <View style={[styles.brick, { backgroundColor: "#2ae2ea" }]}></View>
        <View style={[styles.brick, { backgroundColor: "#ffe622" }]}></View>
        <View style={styles.clue}>
          <View style={[styles.brickclue, { backgroundColor: "white" }]}></View>
          <View
            style={[styles.brickclue, { backgroundColor: "#ffb53c" }]}
          ></View>
          <View
            style={[
              styles.brickclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
          <View
            style={[
              styles.brickclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
        </View>
      </View>
      <View style={styles.bricks}>
        <View
          style={[styles.brick, { backgroundColor: "#86837e", marginLeft: 15 }]}
        ></View>
        <View style={[styles.brick, { backgroundColor: "#86837e" }]}></View>
        <View style={[styles.brick, { backgroundColor: "#86837e" }]}></View>
        <View style={[styles.brick, { backgroundColor: "#86837e" }]}></View>
        <View style={styles.clue}>
          <View
            style={[
              styles.brickclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
          <View
            style={[
              styles.brickclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
          <View
            style={[
              styles.brickclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
          <View
            style={[
              styles.brickclue,
              { borderWidth: 1, borderColor: "#b1ada5" },
            ]}
          ></View>
        </View>
      </View>
      <View style={styles.bottombricks}>
      <View style={[styles.brick, { backgroundColor: "#ff7860" }]}></View>
      <View style={[styles.brick, { backgroundColor: "#9d80fd" }]}></View>
      <View style={[styles.brick, { backgroundColor: "#97e241" }]}></View>
      <View style={[styles.brick, { backgroundColor: "#2ae2ea" }]}></View>
      <View style={[styles.brick, { backgroundColor: "#ed7ee4" }]}></View>
      <View style={[styles.brick, { backgroundColor: "#ffe622" }]}></View>
      </View>
      <TouchableOpacity style={styles.okbutton}>
        <Text style={styles.okbuttontext}>TAMAM</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45433f",
    alignItems: "center",
  },
  navbar: {
    backgroundColor: "#22211F",
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  navbarTitle: {
    paddingTop: 20,
    color: "#FFB53C",
    fontSize: 30,
    fontWeight: "bold",
  },
  bricks: {
    width: "100%",
    height: 90,
    borderWidth: 1,
    borderColor: "#b1ada5",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  brick: {
    width: 50,
    height: 50,
    margin: 8,
    borderRadius: 25,
  },
  clue: {
    width: 100,
    height: 35,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#b1ada5",
    flexDirection: "row",
    alignItems: "center",
  },
  brickclue: {
    width: 16,
    height: 16,
    margin: 4,
    borderRadius: 25,
  },
  bottombricks: {
    width: "100%",
    height: 90,
    borderWidth: 1,
    borderColor: "#b1ada5",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 70,
  },
  okbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "#FFB53C",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  okbuttontext: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
});
