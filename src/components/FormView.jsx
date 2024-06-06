import { StyleSheet, TextInput, View } from "react-native";
import Button from "./Button";
import theme from "../theme";

const styles = StyleSheet.create({
  formView:{
    flexDirection:"row",
    backgroundColor: theme.colors.white,
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 20,
  },
  inputStyle:{
    backgroundColor: theme.colors.bgMain,
    borderColor: theme.colors.textPlaceholder,
    borderWidth: 2,
    borderRadius: theme.roundness,
    padding: 10,
    width: "100%",
  },
});

const FormView = ({onStudentInput, onAddStudent}) => {
 return (
  <View style={styles.formView}>
    <TextInput style={styles.inputStyle} placeholder="New student name..." 
        onChangeText={onStudentInput}/>
    <Button onPress={onAddStudent}>Add</Button>
  </View>
 )
}

export default FormView