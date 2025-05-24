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
          {[1,2,3,4,45,5,6,7,788,].map((num)=>(
            <div key={num} className='w-full h-full bg-red-500'>
              <h1>Mapa</h1>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MapScreen; 