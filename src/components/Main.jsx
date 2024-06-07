import { StyleSheet, View } from "react-native";
import theme from "../theme";
import Students from "./Students";
import Lessons from "./Lessons";
import SingleLesson from "./SingleLesson";
import SingleStudent from "./SingleStudent";
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
        <Route path="/" element={<Lessons />} />
        <Route path="/students" element={<Students />} />
        <Route path="/lessons/:id" element={<SingleLesson />} exact />
        <Route path="/students/:id" element={<SingleStudent />} exact />
      </Routes>
    </View>
    );
  };

export default Main;