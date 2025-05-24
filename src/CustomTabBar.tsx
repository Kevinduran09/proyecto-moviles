import React from 'react'
import { IonTabButton, IonIcon, IonLabel, IonTabs, IonTabBar } from '@ionic/react'
import { homeOutline, cameraOutline, mapOutline, timeOutline, personOutline, home, camera, map, time, person } from 'ionicons/icons'
import { useLocation } from 'react-router-dom';

export const CustomTabBar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <IonTabBar slot="bottom"
            className="rounded-t-2xl shadow-lg h-16"
        >
            <IonTabButton tab="home" href="/home">
                <IonIcon aria-hidden="true"
                    icon={location.pathname === '/home' ? home : homeOutline}
                />
                <IonLabel>Inicio</IonLabel>
            </IonTabButton>
            <IonTabButton tab="camera" href="/camera">
                <IonIcon aria-hidden="true"
                    icon={location.pathname === '/camera' ? camera : cameraOutline}
                />
                <IonLabel>Cámara</IonLabel>
            </IonTabButton>
            <IonTabButton tab="map" href="/map">
                <IonIcon aria-hidden="true"
                    icon={location.pathname === '/map' ? map : mapOutline}
                />
                <IonLabel>Mapa</IonLabel>
            </IonTabButton>
            <IonTabButton tab="history" href="/history">
                <IonIcon aria-hidden="true"
                    icon={location.pathname === '/history' ? time : timeOutline}
                />
                <IonLabel>Historial</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
                <IonIcon aria-hidden="true"
                    icon={location.pathname === '/profile' ? person : personOutline}
                />
                <IonLabel>Perfil</IonLabel>
            </IonTabButton>
        </IonTabBar>

    )
}
