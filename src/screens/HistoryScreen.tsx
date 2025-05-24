import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const HistoryScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Historial</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Historial</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Aquí irá el contenido del historial */}
      </IonContent>
    </IonPage>
  );
};

export default HistoryScreen; 