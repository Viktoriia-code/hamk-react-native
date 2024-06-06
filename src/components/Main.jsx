import { StyleSheet, View } from "react-native";
import theme from "../theme";
import Students from "./Students";
import AppBar from "./AppBar";
import { Route, Routes } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.bgMain,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Students />} />
      </Routes>
    </View>
    );
  };

export default Main;