import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Task } from '../types/Task';

interface Props {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, task.completed && styles.completed]}>
          {task.title}
        </Text>
       <Text>
        {task.completed ? "completed" : "pending"}
        </Text>
      <Pressable onPress={onToggle}>
       <Text> Completar </Text>
      </Pressable>

      <Pressable onPress={onDelete}>
        <Text style={styles.delete}>✕</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', padding: 12 },
  text: { fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: 'gray' },
  delete: { color: 'red', fontSize: 18 }
});

