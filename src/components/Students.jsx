import { useState } from "react";
import { FlatList, Modal, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme";
import FormView from "./FormView";
import ItemSeparator from "./common/ItemSeparator";
import Button from "./common/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatliststyle: {
    paddingHorizontal: 10,
  },
  listItemStyle:{
    padding: 10,
    backgroundColor: theme.colors.white,
    width: '100%',
    borderRadius: theme.roundness,
  },
  listItemText: {
    color: theme.colors.bgSecondary,
    textAlign: 'center',
    fontSize: theme.fontSizes.heading,
  },
});

const students = [
  'Aino Virtanen',
  'Mikko Nieminen',
  'Liisa Laaksonen',
  'Janne Mäkelä',
  'Kaisa Heikkinen',
  'Pekka Korhonen',
  'Sari Salminen',
  'Jukka Lehtonen',
  'Tuula Miettinen',
  'Antti Hämäläinen',
]

const ButtonAddStudent = ({ showInputView }) => {
  return (
    <>
      <ItemSeparator />
      <Button onPress={showInputView}>+  Add new student</Button>
      <ItemSeparator />
    </>
  );
};

const Students = () => {
  const [newStudent, setStudent]=useState();
  const [StudentList, addStudent]=useState(students);
  const [visibility, setVisibility]=useState(false);

  const StudentInputHandler=(enteredText)=>{
    setStudent(enteredText);
  }
  const addStudentToList=()=>{
    addStudent(StudentList=>[...StudentList, newStudent]);
  }
  const keyHandler=(item, index)=>{
    return index.toString();
  }
  
  const deleteItem=(removeIndex)=>{
    addStudent(StudentList=>{return StudentList.filter((Student, id)=>{
                      console.log("remove="+removeIndex+" StudentId="+id);
                      return id!=removeIndex;
                      })});
  }
  
  const renderStudent=(item)=>{
    return (
      <TouchableOpacity activeOpacity={0.8} onLongPress={()=>deleteItem(item.index)}>
        <View style={styles.listItemStyle}>
          <Text style={styles.listItemText}>{item.item}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const showInputView=()=>{
    setVisibility(true);
  }

  const hideInputView=()=>{
    setVisibility(false);
  }
  
  return (

<>
      <Modal visible={visibility} animationType="slide">
        <FormView onStudentInput={StudentInputHandler} onAddStudent={addStudentToList} onCancel={hideInputView} />
      </Modal>
      <SafeAreaView style={styles.container}>
        <FlatList 
          style={styles.flatliststyle}
          keyExtractor={keyHandler}
          data={StudentList}
          renderItem={renderStudent}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={() => <ButtonAddStudent showInputView={showInputView} />}
          ListFooterComponent={() => <ItemSeparator />}
        />
      </SafeAreaView>
      </>
  );
};

export default Students;