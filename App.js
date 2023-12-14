import {  KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import { useState } from 'react';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([])

  const taskAddHandler = () => {
    Keyboard.dismiss()
   setTaskItems([...taskItems, task])
   setTask('')
  }

  const completedTask = (idx) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(idx, 1)
    setTaskItems(itemsCopy)
    alert('Task completed!')
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Daily To Do List</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
             return(
              <TouchableOpacity key={index} onPress={() => completedTask(index)}>
                  <Task text={item} />
              </TouchableOpacity>
             )
            })
          }
        </View>
      </View>

      {/* Write a task section */}

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
          <TextInput value={task} style={styles.input} placeholder='Write a task' onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => taskAddHandler()}>
             <View style={styles.addWrapper}>
               <Text style={styles.addText}>+</Text>
             </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#f5f5f5',
      textAlign: 'center'
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper:{
      position: 'absolute',
      paddingHorizontal: 10,
      bottom: 60,
      width: '100%' ,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        padding: 5 ,
        width: 250,
        borderColor: '#f8da69',
        borderWidth: 1,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#f8da69',
        borderWidth: 1,
    },
    addText: {

    }

})

