import { useContext, createContext, type PropsWithChildren, type VoidFunctionComponent } from "react"
import { useStorageState } from "../store/use-store-state"

interface AuthContextData {
  signIn: () => void,
  signOut: () => void,
  session: string | null
  isLoading: boolean
}

const AuthContext = createContext({} as AuthContextData)

export function useSession() {
  const value = useContext(AuthContext)

  if(process.env.NODE_ENV !== 'production') {
    if(!value) {
      throw new Error('useSession must be used within an AuthProvider')
    }
  }

  return value
}

export function SessionProvider({ children} : PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session')
  return (
    <AuthContext.Provider value={{
      signIn: () => setSession('xxx'),
      signOut: () => {
        setSession('')
      },
      session,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}