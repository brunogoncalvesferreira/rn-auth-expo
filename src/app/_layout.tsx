import { Slot, Stack } from "expo-router";
import { SessionProvider } from "../contexts/auth";

export default function Layout() {
  return (
    <SessionProvider>
      <Slot/>
    </SessionProvider>
  )
}