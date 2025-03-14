// referenced https://www.youtube.com/watch?v=2MjAAcF0L5s for help

import React, {useState} from 'react';
import {Image, View, FlatList, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';

let id = 4;

const App = () => {
  let [tasks, setTasks] = useState([
    {id: 0, name: 'unload dishwasher', desc: 'n/a', completed: false},
    {id: 1, name: 'buy plane tickets', desc: '3/1 leave for paris 3/10 return from madrid', completed: false},
    {id: 2, name: 'renew passport', desc: 'bring documents', completed: false},
    {id: 3, name: 'wash sheets', desc: 'use new detergent', completed: false},
  ]);

  let [newTask, setNewTask] = useState('');

  const addTask = () => {
    let nTask = {id: id++, name: newTask, desc: 'description', completed: false};
    setTasks([...tasks, nTask]);
    setNewTask('');
  };

  const delTask = (id) => {
    let uTask = tasks.filter(item => item.id != id);
    setTasks(uTask);
  }

  const Task = ({task}) => (
    <View style={styles.task}>
      {!task?.completed && (
        <TouchableOpacity
          style={styles.check}
          onPress={() => delTask(task?.id)}
        />
      )};
      <View style={styles.text}>
        <Text style={styles.body}>{task?.name}</Text>
        <Text style={styles.desc}>{task?.desc}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('./flower.png')} style={{width: 40, height: 40, marginTop: 20}} />
      <Text style={styles.header}>tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({item}) => <Task task={item}/>}
      />
      <TextInput
        style={styles.input}
        placeholder='new task'
        onChangeText={setNewTask}
        onSubmitEditing={addTask}
      />
      <Button
        color='#79d557'
        title='+'
        onPress={addTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  header: {
    color: '#ff9300',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  body: {
    color: '#fcfcfc',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize: 15,
  },
  desc: {
    color: '#fcfcfc',
    fontFamily: 'Cochin',
    fontSize: 10,
    fontStyle: 'italic',
  },
  text: {
    paddingLeft: 10,
  },
  task: {
    backgroundColor: '#292929',
    padding: 10,
    paddingRight: 15,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: 'rgba(252, 252, 252, 0.5)',
    textAlign: 'center',
    fontFamily: 'Cochin',
    fontStyle: 'italic',
    borderStyle: 'solid',
    borderColor: '#fcfcfc',
    borderWidth: 3,
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  check: {
    width: 17,
    height: 17,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#97ff70',
    borderRadius: 25,
  },
});

export default App;
