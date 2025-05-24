import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const MapScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mapa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mapa</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="map-container" style={{ width: '100%', height: '100%' }}>
          {/* Aquí irá la implementación del mapa */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MapScreen; 