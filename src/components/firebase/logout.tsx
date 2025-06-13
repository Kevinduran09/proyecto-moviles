import { useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../../core/firebaseConfig"
import { useHistory } from "react-router-dom"
import { IonIcon } from "@ionic/react"
import { logOutOutline } from "ionicons/icons"
import Card from "../Card"

const Logout = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleLogout = async () => {
    try {
      setLoading(true)
      await signOut(auth)
      history.replace("/login")
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Card className="mt-6 py-3 px-4 bg-gradient-to-r from-red-500/90 to-red-600/90">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 text-white font-medium"
          disabled={loading}
        >
          <IonIcon icon={logOutOutline} className="size-5" />
          <span>Cerrar Sesión</span>
        </button>
      </Card>
    </>
  )
}

export default Logout
