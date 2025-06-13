"use client"

import { FirebaseAuthentication } from "@capacitor-firebase/authentication"
import { useHistory } from "react-router-dom"
import { useCallback, useState } from "react"
import { auth, authReady } from "../../core/firebaseConfig"
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth"
import { IonLoading } from "@ionic/react"
import Google from '../../components/icons/Google'

const HandleGoogleSignIn = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const signInWithGoogle = useCallback(async () => {
    try {
      setLoading(true)
      const result = await FirebaseAuthentication.signInWithGoogle()

      if (result?.user) {
        await authReady

        const credential = GoogleAuthProvider.credential(result.credential?.idToken)

        await signInWithCredential(auth, credential)
        setLoading(false)
        history.push("/home")
      } else {
        setLoading(false)
        alert("El inicio de sesión con Google falló o fue cancelado.")
      }
    } catch (error: any) {
      setLoading(false)
      alert("Error durante el inicio de sesión con Google: " + error.message)
    }
  }, [history])

  if (loading) {
    return <IonLoading isOpen message="Cargando sesión..." />
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="bg-white text-black !border-1 !border-zinc-300 w-full !py-2 !rounded-lg flex justify-center items-center gap-3 hover:bg-gray-300/30 transition-all duration-300 font-medium"
    >
      <Google className="size-6" />
      Continuar con Google
    </button>
  )
}

export default HandleGoogleSignIn
