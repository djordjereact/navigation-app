import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {
    IonApp,
    setupIonicReact,
    IonRouterOutlet,
    IonIcon,
    IonLabel, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuToggle
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { list, options } from "ionicons/icons";
import Filter from "./pages/FIlter";
import CourseTabs from "./pages/CourseTabs";
import SideDrawer from "./components/SideDrawer";

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

/* Theme variables */
import './theme/variables.css';
import './theme/theme.css';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
      <IonReactRouter>
          <SideDrawer />
          <IonRouterOutlet id="main">
              <Route path="/filter" exact>
                  <Filter />
              </Route>
              <Route path="/courses">
                  <CourseTabs />
              </Route>
              <Redirect path="/" to="/courses" exact />
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
);

export default App;
