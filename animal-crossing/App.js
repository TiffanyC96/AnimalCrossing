import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DailyChecklist from './components/DailyChecklist';
import CrittersScreen from './components/CurrentCatchables';


export default function App() {
  return (
    <View style={styles.container}>
      <DailyChecklist/>
      <CrittersScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
