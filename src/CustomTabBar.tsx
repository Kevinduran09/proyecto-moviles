import React from 'react'
import { IonTabButton, IonIcon, IonLabel, IonTabBar } from '@ionic/react'
import { homeOutline, cameraOutline, mapOutline, timeOutline, personOutline, home, camera, map, time, person } from 'ionicons/icons'
import { useLocation } from 'react-router-dom';

const TAB_ROUTES = ['/home', '/map', '/history', '/profile'];

export const CustomTabBar = () => {
    const location = useLocation();
    if (!TAB_ROUTES.includes(location.pathname)) return null;
    
    return (
        <IonTabBar slot="bottom"
            className="rounded-t-2xl shadow-lg h-16 z-50 custom-tabbar "
        >
            <IonTabButton tab="home" href="/home">
                <IonIcon aria-hidden="true"
                    icon={location.pathname === '/home' ? home : homeOutline}
                />
                <IonLabel>Inicio</IonLabel>
            </IonTabButton>

            <IonTabButton tab="map" href="/map">
                <IonIcon aria-hidden="true"
                    icon={location.pathname === '/map' ? map : mapOutline}
                />
                <IonLabel>Mapa</IonLabel>
            </IonTabButton>
            <IonTabButton
                tab="camera"
                href="/camera"
                className=" size-14 bg-green-600 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-gray-600/10"
                style={{ boxShadow: '0 8px 32px 0 rgba(34,197,94,0.35)' }}
            >
                <IonIcon aria-hidden="true"
                    icon={location.pathname === '/camera' ? camera : cameraOutline}
                    className='text-white text-4xl mb-1 z-10'
                />
                <IonLabel className="text-white text-xs font-bold">Cámara</IonLabel>
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
