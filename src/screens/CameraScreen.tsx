import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
import '../theme/camera.css'
import { StatusBar, Style } from '@capacitor/status-bar';

const initializeStatusBar = async () => {
  try {
    await StatusBar.setStyle({ style: Style.Light });
    await StatusBar.show();
    await StatusBar.setOverlaysWebView({ overlay: false });
  } catch (error) {
    console.error('Error al configurar StatusBar:', error);
  }
};

// Inicializar StatusBar
initializeStatusBar();
const CameraScreen: React.FC = () => {
  const [isCamaraActive, setIsCamaraActive] = useState(false)
  const [isFlasOn, setIsFlashOn] = useState(false)
  const [isFrontCamera, setIsFrontCamera] = useState(false)
  const isNative = Capacitor.isNativePlatform()
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    startCamera()
    return () => {
      stopCamera()
    }
  }, [])
  const startCamera = async () => {
    try {
      const cameraPreviewOptions: CameraPreviewOptions = isNative ? {
        position: 'rear',
        width: window.innerWidth,
        height: window.innerHeight,
        toBack: true,
        enableZoom: true,
        className: 'camera-preview',
      } : {
        parent: 'camera-preview',
        className: 'camera-preview',
      }

      await CameraPreview.start(cameraPreviewOptions);
      setIsCamaraActive(true)
    } catch (error) {
      console.error('Error al iniciar la cámara:', error);
    }
  }
  const stopCamera = async () => {
    try {
      await CameraPreview.stop();
      setIsCamaraActive(false)
    } catch (error) {
      console.error('Error al detener la cámara:', error);
    }
  }
  const takePicture = async () => {
    try {
      const options: CameraPreviewPictureOptions = {
        quality: 85,
        width: 800,
        height: 600,
      }
      const result = await CameraPreview.capture(options);
      console.log('Foto tomada:', result);
      if (result.value) {
        // Asegurarnos de que la imagen tenga el prefijo data:image/jpeg;base64,
        const base64Image = result.value.startsWith('data:')
          ? result.value
          : `data:image/jpeg;base64,${result.value}`;
        setImage(base64Image);
        console.log('Imagen capturada:', base64Image);

      }
    } catch (error) {
      console.error('Error al tomar la foto: ', error)
    }
  }
  const toggleFlash = async ()=>{
    if(!isNative){
      console.log('La funcionalidad de flash no está disponible en la web');
      return;
      
    }
    try {
      if(isFlasOn){
        await CameraPreview.setFlashMode({flashMode:"off"})
      }else{
        await CameraPreview.setFlashMode({flashMode:'on'})
      }
      setIsFlashOn(!isFlasOn)
    } catch (error) {
      console.error('Error al cambiar el modo de flash:', error);
      
    }
  }
  const toggleCamera = async()=>{
    try {
      await CameraPreview.stop();
      const newPosition  = isFrontCamera ? 'rear' : 'front';
      const cameraPreviewOptions: CameraPreviewOptions = isNative ? {
        position: newPosition,
        width: window.innerWidth,
        height: window.innerHeight,
        toBack: true,
        enableZoom: true,
        className: 'camera-preview',
      } : {
        parent: 'camera-preview',
        className: 'camera-preview',
      }
      await CameraPreview.start(cameraPreviewOptions);
      setIsFrontCamera(!isFrontCamera);
      console.log('Cámara cambiada a:', newPosition);
    } catch (error) {
      console.error('Error al cambiar la cámara:', error);
      
    }
  }
  return (
    <IonPage>
      <IonContent fullscreen className='my-custom-camera-preview-content'>
        <div id='camera-preview' className='w-full h-full'></div>
     </IonContent>
    </IonPage>
  );
};

export default CameraScreen; 