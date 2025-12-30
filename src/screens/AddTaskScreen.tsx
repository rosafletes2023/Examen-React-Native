
import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useTasks } from '../components/context/TaskContext';
import { useForm } from '../hooks/useForm';
import { useNavigation } from '@react-navigation/native';

export function AddTaskScreen() {
  const { addTask } = useTasks();
  const { title, error, handleChange, validate, resetForm } = useForm();
  const navigation = useNavigation();


  const handleSave = () => {
    console.log('title:', title);
    if (!validate()) return;

    addTask(title.trim());
    resetForm();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Task title"
        value={title}
        onChangeText={handleChange}
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
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, borderColor: '#ccc', borderRadius: 4 },
  error: { color: 'red', marginTop: 4 },
  buttonContainer: { marginTop: 16 },
});
