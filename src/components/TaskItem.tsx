import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Task } from '../types/Task';

interface Props {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <View style={styles.row}>
      {/* Columna Título */}
      <View style={styles.cell}>
        <Text style={[styles.cellText, task.completed && styles.completed]}>
          {task.title}
        </Text>
      </View>

      {/* Columna Estado */}
      <View style={styles.cell}>
        <CheckBox
          value={task.completed}
          onValueChange={onToggle}
          tintColors={CHECKBOX_COLORS}
          style={styles.checkbox}
        />
      </View>

      {/* Columna Eliminar */}
      <View style={styles.cell}>
        <TouchableOpacity style={styles.trashButton} onPress={onDelete}>
          <Text style={styles.delete}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const CHECKBOX_COLORS = { true: 'green', false: 'gray' };

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cellText: {
    fontSize: 16,
    textAlign: 'center',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  trashButton: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  delete: {
    fontSize: 18,
    lineHeight: 18,
  },
});
