import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Agregar from './pages/Agregar'
import UserContextProvider from './data/UserContextProvider';
import Editar from './components/Editar'
import axios from 'axios';
import React, {Component} from 'react';

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
import { bodyOutline, newspaperOutline } from 'ionicons/icons';

setupIonicReact();

const App: React.FC = () => (

            <IonApp>
            <IonReactRouter>
                <IonMenu contentId='ionicApp'>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>ionicApp</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonList>
                            <IonMenuToggle>
                                <IonItem routerLink="/home" routerDirection="none" lines="none">
                                    <IonIcon color="medium" slot="start" icon={bodyOutline} />
                                    <IonLabel>Todos los personajes</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle>
                                <IonItem routerLink="/agregar" routerDirection="none" lines="none">
                                    <IonIcon color="medium" slot="start" icon={newspaperOutline} />
                                    <IonLabel>Agregar peronaje</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        </IonList>
                    </IonContent>
                </IonMenu>
                <UserContextProvider>
                    <IonRouterOutlet id='ionicApp'>
                        <Route path='/home' component={Home} exact />
                        <Route path='/agregar' component={Agregar} exact />
                        <Route path='/editar' component={Editar} exact />
                        
                        <Redirect to='/home' />
                    </IonRouterOutlet>
                </UserContextProvider>
            </IonReactRouter>
        </IonApp>
);

export default App;

