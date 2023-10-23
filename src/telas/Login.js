import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Logo from '../componentes/Logo';
import Titulo from '../componentes/Titulo';

export default function Login() {
  return <View style={styles.container}>
    <Logo></Logo>
    <Titulo></Titulo>
    <StatusBar style="auto" />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
