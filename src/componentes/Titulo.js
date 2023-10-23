import { StyleSheet, Text } from "react-native";

export default function Titulo() {
  return <Text style={styles.titulo}>Informe os dados para entrar!</Text>
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
    marginTop: 20,
    marginBottom: 20
  }
});