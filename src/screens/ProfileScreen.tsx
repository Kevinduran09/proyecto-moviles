import { IonContent, IonPage, IonIcon, IonHeader, IonToolbar } from '@ionic/react';
import React from 'react';
import { arrowBack } from 'ionicons/icons';
import Container from '../components/ui/Container';
import Title from '../components/ui/Title';
import { StatusBar, Style } from '@capacitor/status-bar';
import ProfileStadistics from '../components/ProfileStadistics';
import { useHistory } from 'react-router';
import Avatar from '../components/Avatar';
const initializeStatusBar = async () => {
  try {
    await StatusBar.setStyle({ style: Style.Light });
    await StatusBar.setBackgroundColor({ color: '#4CAF50' });
  } catch (error) {
    console.error('Error al configurar StatusBar:', error);
  }
};

// Inicializar StatusBar
initializeStatusBar();

// Datos de ejemplo del usuario (puedes reemplazar por datos reales)
const user = {
  nombre: 'Kevin López',
  imagen: 'https://randomuser.me/api/portraits/men/32.jpg', // Cambia por la URL real o avatar local
  titulo: 'Reciclador Novato',
  nivel: 1,
};

const ProfileScreen: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <div className="py-2 px-3 bg-[#4CAF50] shadow-lg h-18">
            <div className="flex items-center justify-center w-full relative">
              <IonIcon onClick={handleBack} icon={arrowBack} className="size-8 absolute left-0 text-white bg-white/20 rounded-full p-2" />
              <Title variant='h2' color='white' className="text-center">Mi perfil</Title>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="gradient-primary flex-1">
          <Container padding="sm" className="space-y-5" >

            {/* Header */}

            <div className="flex flex-col items-center h-full py-5 px-4 ">
              {/* Imagen de perfil con borde degradado */}
              <Avatar size={120}/>

              {/* Nombre y título */}
              <h2 className='!text-3xl text-white font-bold'>{user.nombre}</h2>
              
              <span className="effect-shimmer relative overflow-hidden bg-green-600/80 text-white text-sm px-4 py-1 rounded-full font-semibold mt-1 mb-2 shadow"> {user.titulo} </span>
              <p className="text-white/80 mb-2">Nivel {user.nivel}</p>



              {/* Barra de progreso */}
              <div className='w-full px-2'>
                <p className="text-white text-xl mb-3">Progreso del nivel</p>
                <div className="w-full bg-white/30 rounded-full h-4 mb-4 shadow-inner">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-500" style={{ width: '20%' }}></div>
                </div>
                <p className="text-white text-md mb-4">20 XP / 100 XP para el siguiente nivel</p>
              </div>

              <ProfileStadistics />
            </div>
          </Container>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProfileScreen;