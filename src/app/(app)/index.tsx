import { useSession } from "@/src/contexts/auth";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const { signOut } = useSession()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>

      <TouchableOpacity
      onPress={() => {
        signOut()
      }}
      style={styles.button}>
        <Text style={styles.textButton}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },

  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: '#121212',
    width: 90,
    height: 32,
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'center',
  }
})