import React from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../components/context/TaskContext';

export function HomeScreen() {
  const navigation = useNavigation();
  const { tasks, toggleTask, removeTask } = useTasks();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Add Task" onPress={() => navigation.navigate('AddTask' as never)} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>No tasks yet</Text>}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => toggleTask(item.id)}
            onDelete={() => removeTask(item.id)}
          />
        )}
      />
    </View>
  );
}
