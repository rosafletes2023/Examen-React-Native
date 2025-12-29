import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useTasks } from '../components/context/TaskContext';
import { useNavigation } from '@react-navigation/native';

export function AddTaskScreen() {
  const [title, setTitle] = useState('');
  const { addTask } = useTasks();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Task title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
      />
      <Button
        title="Save Task"
        onPress={() => {
          addTask(title);
          navigation.goBack();
        }}
      />
    </View>
  );
}

