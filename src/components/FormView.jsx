import { StyleSheet, TextInput, View } from "react-native";
import Button from "./common/Button";
import theme from "../theme";

const styles = StyleSheet.create({
  formView:{
    backgroundColor: theme.colors.white,
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
  },
  inputStyle:{
    backgroundColor: theme.colors.bgMain,
    borderColor: theme.colors.textPlaceholder,
    borderWidth: 2,
    borderRadius: theme.roundness,
    padding: 10,
    width: '80%',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent:"space-around",
    width: '100%'
  },
  cancelBtn: {
    backgroundColor: theme.colors.error
  }
});

const FormView = ({onStudentInput, onAddStudent, onCancel}) => {
 return (
  <View style={styles.formView}>
    <TextInput style={styles.inputStyle} placeholder="New student name..." 
        onChangeText={onStudentInput}/>
    <View style={styles.btnWrapper}>
      <Button onPress={onCancel} style={styles.cancelBtn}>Cancel</Button>
      <Button onPress={onAddStudent}>Add</Button>
    </View>
  </View>
 )
}

export default FormView