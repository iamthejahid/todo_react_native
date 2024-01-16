import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task  from './components/Tasks';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Task */}
     <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's Task</Text>
      <View style={styles.items}>
        <Task text ={"Task 1"}/>
        <Task text ={"Task 2"}/>
        <Task text ={"Task 3"}/>
        <Task text ={"Task 4"}/>

      </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold', 
  },
  items: {
    marginTop: 30,
  }

    
});
