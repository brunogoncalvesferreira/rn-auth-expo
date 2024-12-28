import { Text, View, StyleSheet } from "react-native";
import { useSession } from "../contexts/auth";
import { router } from "expo-router";

export default function SignIn() {
  const { signIn } = useSession()

  return (
    <View style={styles.container}>
      <Text
      onPress={() => {
        signIn()

        router.replace('/')
      }}
      
      style={styles.text}>Página de login</Text>
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
  }
})