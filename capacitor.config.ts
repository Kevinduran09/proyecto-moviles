import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Proyecto Moviles',
  webDir: 'dist',
  plugins:{
    Camera:{
      Permissions:['camera', 'photos'],
      android: {
        useCamera2Api: true, // Utilizar la API de cámara 2 en Android
        enableFlash: true, // Habilitar el flash en Android
      },
    },
  }
};

export default config;
