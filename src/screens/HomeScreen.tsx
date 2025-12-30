import React from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../components/context/TaskContext';

export function HomeScreen() {
  const navigation = useNavigation();
  const { tasks, toggleTask, removeTask } = useTasks();

  const renderHeader = () => (
    <View style={[styles.row, styles.header]}>
      <Text style={styles.headerText}>Title</Text>
      <Text style={styles.headerText}>Status</Text>
      <Text style={styles.headerText}>Delete</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button
        title="Add Task"
        onPress={() => navigation.navigate('AddTask' as never)}
      />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No tasks yet</Text>}
        ListHeaderComponent={renderHeader}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 2,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
