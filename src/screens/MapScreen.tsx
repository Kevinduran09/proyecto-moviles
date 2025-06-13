import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Stories from '../components/Stories';
import AvatarComponent, { Piece, AvatarStyle, OptionContext } from 'avataaars';

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
      
       {/* <div>
          <Stories stories={storiesData}/>
       </div> */}
        <div>
          Your avatar:
          <AvatarComponent avatarStyle={AvatarStyle.Circle}          
            topType="LongHairDreads"
            accessoriesType="Wayfarers"
            hairColor="Auburn"
            facialHairType="BeardMediu"
            clotheType="Hoodie"
            eyeType="EyeRoll"
            eyebrowType="FlatNatural"
            mouthType="Smile"
            skinColor="Tanned"
          />
        </div>
        <div>
          <Piece avatarStyle="Circle" pieceType="mouth" pieceSize="100" mouthType="Eating" />
          <Piece avatarStyle="Circle" pieceType="eyes" pieceSize="100" eyeType="Dizzy" />
          <Piece avatarStyle="Circle" pieceType="eyebrows" pieceSize="100" eyebrowType="RaisedExcited" />
          <Piece avatarStyle="Circle" pieceType="accessories" pieceSize="100" accessoriesType="Round" />
          <Piece avatarStyle="Circle" pieceType="top" pieceSize="100" topType="LongHairFro" hairColor="Red" />
          <Piece avatarStyle="Circle" pieceType="facialHair" pieceSize="100" facialHairType="BeardMajestic" />
          <Piece avatarStyle="Circle" pieceType="clothe" pieceSize="100" clotheType="Hoodie" clotheColor="Red" />
          <Piece avatarStyle="Circle" pieceType="graphics" pieceSize="100" graphicType="Skull" />
          <Piece avatarStyle="Circle" pieceType="skin" pieceSize="100" skinColor="Brown" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MapScreen; 