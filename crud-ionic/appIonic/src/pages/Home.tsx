import React, { useContext, useState, Component } from 'react';
import ActivitiesContext, { Activity } from '../data/users-context';
import { checkmarkOutline, construct, gameControllerSharp } from 'ionicons/icons';
import CompleteModalActivity from '../components/CompleteActivityModal';
import axios from 'axios';


import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonList,
    IonMenuButton,
    IonModal,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';


const api = axios.create({
    baseURL: "http://localhost:3000",
  });

const Home: React.FC = () => {
   /* const  apiKEY  =  "<YOUR_API_KEY_HERE>";
    const  endpoint  =  `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKEY}`;*/

    const [activityToComplete, setActivityToComplete] = useState<Activity>();

   

    const openCompleteModal = (activity: Activity) => {
        setActivityToComplete(activity);
    };

    const closeModal = () => {
        setActivityToComplete(undefined);
    };

    const activitiesCtxt = useContext(ActivitiesContext);
   /* const [items, setItems] = React.useState([]);

    const sendGetRequest = () => {
        return axios({
          url: '',
          method: 'get'
        }).then(response => {
          console.log(response);
          return response.data;
        })
      };*/


     /* React.useEffect(() => {

        sendGetRequest().then(data => setItems(data.articles));
    
      }, []);*/

    return (
        <React.Fragment>
            <IonModal isOpen={!!activityToComplete}>
                <CompleteModalActivity activity={activityToComplete as Activity} dismissModal={closeModal} />
            </IonModal>

            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Lista de usuarios</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        {activitiesCtxt.activities.map(activity => (
                            <IonRow key={activity.id}>
                                <IonCol className="ion-text-center">
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonCardTitle>{activity.nombre}</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p>{activity.description}</p>
                                            <IonItem lines="none" routerLink="/editar">
                                                <IonButton>
                                                    Editar usuario
                                                </IonButton>
                                            </IonItem>
                                            <IonItem lines="none">
                                                {!activity.delete ?
                                                    <IonButton
                                                        onClick={() => openCompleteModal(activity)} >
                                                        Eliminar usuario
                                                    </IonButton>
                                                    :
                                                    <IonIcon color="success" icon={checkmarkOutline} />
                                                }
                                            </IonItem>

                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        ))
                        }
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};  

export default Home;
