import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import Title from '../components/ui/Title'
import Text from '../components/ui/Text'
import Google from '../components/icons/Google'
import Facebook from '../components/icons/Facebook'

const LoginScreen = () => {
    const [toogleForm, setToogleForm] = React.useState(false)
    const [formType, setFormType] = React.useState('login')

    const handleToogleForm = () => {
        setToogleForm(!toogleForm)
        setFormType(toogleForm ? 'login' : 'register')
    }
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className='flex flex-col justify-center items-center h-screen'>
                    <div className="space-y-4 w-full px-12">
                        <div className='text-center mb-12'>
                            <Title variant='h1' color='black' className='!font-bold '>Iniciar Sesión</Title>
                            <Text className='text-zinc-800/80'>¿No tienes cuenta? <button className='text-black underline' onClick={handleToogleForm}>Registrate</button></Text>
                        </div>


                        {/* Fomrulario dinamico */}
                        {formType === 'login' ? (
                            <LoginForm />
                        ) : (
                            <RegisterForm />
                        )}

                        <div className="relative">
                            <div className='absolute inset-0 flex items-center'>
                                <div className='pt-0.5 bg-gray-200 w-full'></div>
                            </div>
                            <div className='relative flex justify-center'>
                                <span className='text-gray-500 bg-white px-3'>O</span>
                            </div>

                        </div>

                        {/* Google */}
                        <button

                            className="bg-white text-black !border-1 !border-zinc-300 w-full !py-2 !rounded-lg flex justify-center items-center gap-3 hover:bg-gray-300/30 transition-all duration-300  font-medium"
                        >
                            <Google className='size-6' />
                            Confinuar con Google
                        </button>

                        {/* Facebook */}
                        <button

                            className="bg-white text-black !border-1 !border-zinc-300 w-full !py-2 !rounded-lg flex justify-center items-center gap-3 hover:bg-gray-300/30 transition-all duration-300  font-medium"
                        >
                            <Facebook className='size-6' />
                            Confinuar con Facebook
                        </button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default LoginScreen

