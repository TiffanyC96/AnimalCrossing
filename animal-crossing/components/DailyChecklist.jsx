import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Checkbox, List, Text, Button } from 'react-native-paper';

const DailyChecklist = ()=>{
    const [tasks, setTasks] = useState([
        {id:1, task:'Water Flowers', checked:false},
        {id:6, task:'Check Nook ATM', checked:false},
        {id:2, task:'Shake Trees', checked:false},
        {id:3, task:'Get Fossils', checked:false},
        {id:4, task:'Talk to Villagers', checked:false},
        {id:5, task:'Collect Bottle', checked:false},
        {id:7, task:'Hit Rocks', checked:false},
        {id:8, task:'Plant Money Tree', checked:false},
        {id:9, task:'Find Visitor', checked:false},
        {id:10, task:'Harvest Weeds', checked:false}
    ]);

    const toggleCheckbox = (id) => {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, checked: !task.checked } : task
      ));
    };
  
    const resetChecklist = () => {
      setTasks(tasks.map(task => ({ ...task, checked: false })));
    };
  
    return (
      <View>
        <Text style={styles.title}>Daily Checklist</Text>
        <View style={styles.gridContainer}>
          {tasks.map((task) => (
            <View key={task.id} style={styles.gridItem}>
              <Checkbox
                status={task.checked ? 'checked' : 'unchecked'}
                onPress={() => toggleCheckbox(task.id)}
              />
              <Text style={[styles.taskText, task.checked && styles.checkedText]}>
                {task.task}
              </Text>
            </View>
          ))}
        </View>
        <Button mode="contained" onPress={resetChecklist} style={styles.resetButton}>
          Reset Checklist
        </Button>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign: 'center',
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    gridItem: {
      width: '48%', 
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    taskText: {
      marginLeft: 8,
      fontSize: 16,
    },
    checkedText: {
      textDecorationLine: 'line-through',
      color: '#888',
    },
    resetButton: {
      marginTop: 20,
    },
  });
  
  export default DailyChecklist;