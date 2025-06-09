import { IonIcon, IonLoading } from '@ionic/react';
import { eye, eyeOff } from 'ionicons/icons';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, authReady } from '../core/firebaseConfig'; 
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleLogin = async () => {
        setLoading(true);
        setError(null);

        try {
            await authReady; 
            await signInWithEmailAndPassword(auth, email, password);
            history.replace('/home');
        } catch (err: any) {
            setError('Correo o contraseña incorrectos');
            console.error(err.message);
        }

        setLoading(false);
    };

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return (
        <div className='flex justify-center'>
            <div className='w-full'>
                <div className='mb-6'>
                    <label htmlFor="email" className="block mb-2 text-md font-bold text-gray-700">Correo Electrónico</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={`bg-gray-50 border-2 ${email ? (isValidEmail(email) ? 'border-green-500' : 'border-red-500') : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-green-600 p-2.5 w-full`}
                        placeholder="Tu correo"
                        required
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor="password" className="block mb-2 text-md font-bold text-gray-700">Contraseña</label>
                    <div className='relative flex items-center'>
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={`bg-gray-50 border-2 ${password ? 'border-green-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:border-zinc-600 p-2.5 w-full`}
                            placeholder="Contraseña"
                            required
                        />
                        <IonIcon className='absolute right-5 cursor-pointer text-zinc-400 size-5' onClick={togglePasswordVisibility} icon={isPasswordVisible ? eye : eyeOff}></IonIcon>
                    </div>
                </div>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <button
                    onClick={handleLogin}
                    className="bg-green-700 text-white w-full !py-4 !rounded-lg hover:bg-green-800 transition duration-300"
                    disabled={loading}
                >
                    Iniciar sesión
                </button>

                <IonLoading isOpen={loading} message="Cargando sesión..." />
            </div>
        </div>
    );
};

export default LoginForm;
