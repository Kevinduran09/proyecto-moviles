import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useEffect } from 'react';
import { useState } from 'react';
import NivelSubidoModal from '../components/NivelSubidoModal';
const Tab1: React.FC = () => {
  const [show, setShow] = useState(false);
  const [nivel, setNivel] = useState(0);

  useEffect(() => {
    if (show) {
      setNivel(nivel + 1);
    }
  }, [show]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => setShow(true)}>Mostrar modal</IonButton>
        <NivelSubidoModal show={show} nivel={nivel} onClose={() => setShow(false)} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
