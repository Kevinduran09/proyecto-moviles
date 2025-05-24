import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';

const CameraScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cámara</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cámara</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="camera-container">
          {/* Aquí irá la implementación de la cámara */}
          <IonButton expand="block">Tomar Foto</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CameraScreen; 