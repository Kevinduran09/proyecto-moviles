import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonItem, IonLabel, IonButton } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import NivelSubidoModal from '../components/NivelSubidoModal';

const ProfileScreen: React.FC = () => {

  const [nivel, setNivel] = useState(1);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
        setNivel(nivel + 1);
    }
}, [show,nivel]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="avatar" />
          </IonAvatar>
          <IonLabel>
            <h2>Usuario</h2>
            <p>usuario@ejemplo.com</p>
          </IonLabel>
        </IonItem>
        {/* Aquí irá más contenido del perfil */}

        <IonButton onClick={() => setShow(true)}>Mostrar modal</IonButton>
        <NivelSubidoModal show={show} nivel={nivel} onClose={() => setShow(false)} />
      </IonContent>
    </IonPage>
  );
};

export default ProfileScreen; 