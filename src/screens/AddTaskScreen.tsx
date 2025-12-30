import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useTasks } from '../components/context/TaskContext';
import { useNavigation } from '@react-navigation/native';

export function AddTaskScreen() {
  const [title, setTitle] = useState('');
  const { addTask } = useTasks();
  const [error, setError] = useState<string>('');
  const navigation = useNavigation();

  const handleSave = () => {
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }
    addTask(title.trim());
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Task title"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
          if (text.trim()) setError('');
        }}
        style={styles.input}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button title="Save Task" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
