import { Route } from 'react-router-dom';
import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import CameraScreen from './screens/CameraScreen';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */

/* Theme variables */
import './theme/variables.css';


import TabLayout from './screens/TabLayout';
import LoginScreen from './screens/LoginScreen';
setupIonicReact();
// Configurar StatusBar

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route path={'/'} render={() => <TabLayout />} />
      <Route path={'/camera'} exact render={() => <CameraScreen />} />
      <Route path={'/login'} exact render={() => <LoginScreen />} />
    </IonReactRouter>
  </IonApp>
);

export default App;
