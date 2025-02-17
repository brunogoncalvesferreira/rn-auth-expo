import { useSession } from "@/src/contexts/auth";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";

export default function Layout() {
  const { session, isLoading } = useSession()

  if(isLoading) {
    return <Text>Loading...</Text>
  }

  if(!session) {
    return <Redirect href='/sign-in' />
  }
  
  return (
    <Stack 
      screenOptions={{
        headerShown: false
      }}
    />
  )
}