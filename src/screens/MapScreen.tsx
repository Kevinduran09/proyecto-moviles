import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Stories from '../components/Stories';

const storiesData = [
  { id: '1', username: 'Tu historia', imageUrl: 'https://api.a0.dev/assets/image?text=You&aspect=1:1' },
  { id: '2', username: 'María G.', imageUrl: 'https://api.a0.dev/assets/image?text=MG&aspect=1:1' },
  { id: '3', username: 'Carlos R.', imageUrl: 'https://api.a0.dev/assets/image?text=CR&aspect=1:1' },
  { id: '4', username: 'Ana S.', imageUrl: 'https://api.a0.dev/assets/image?text=AS&aspect=1:1' },
  { id: '5', username: 'Pedro L.', imageUrl: 'https://api.a0.dev/assets/image?text=PL&aspect=1:1' },
  { id: '6', username: 'Laura T.', imageUrl: 'https://api.a0.dev/assets/image?text=LT&aspect=1:1' },
];

const MapScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mapa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      
       <div>
          <Stories stories={storiesData}/>
       </div>
      </IonContent>
    </IonPage>
  );
};

export default MapScreen; 