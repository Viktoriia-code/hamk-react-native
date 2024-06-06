import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme";
import FormView from "./FormView";
import ItemSeparator from "./ItemSeparator";

const styles = StyleSheet.create({
  flatliststyle:{
    padding: 20,
  },
  listItemStyle:{
    padding: 10,
    backgroundColor: theme.colors.white,
    display: 'flex',
    width: '100%',
  },
  listItemText: {
    color: theme.colors.bgSecondary,
    textAlign: 'center'
  }
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
  'Antti Hämäläinen'
]

const Students = () => {
  const [newStudent, setStudent]=useState();
  const [StudentList, addStudent]=useState(students);

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
          <Text style={styles.listItemText}>{item.index + 1}) {item.item}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  return (
    <>
      <FormView onStudentInput={StudentInputHandler} onAddStudent={addStudentToList} />
      <FlatList 
        style={styles.flatliststyle}
        keyExtractor={keyHandler}
        data={StudentList}
        renderItem={renderStudent}
        ItemSeparatorComponent={ItemSeparator}
      />
    </>
  );
};

export default Students;