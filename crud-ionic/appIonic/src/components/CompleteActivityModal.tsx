import React, { useContext } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonText, IonButton } from '@ionic/react';
import ActivitiesContext, { Activity } from '../data/users-context';

interface CompleteModalActivityProps {
    activity: Activity;
    dismissModal: () => void;
}

const CompleteModalActivity: React.FC<CompleteModalActivityProps> = (props) => {

    const activitiesCtxt = useContext(ActivitiesContext);

    const confirmCompletion = (activityId: string) => {
        activitiesCtxt.completeActivity(activityId);
        props.dismissModal();
    };

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-no-padding'>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonText>
                            <h2>{props.activity.nombre}</h2>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center ion-no-padding'>
                        <IonText color='medium'>
                            <p>
                                ¿Estas seguro de eliminar este usuario?
                            </p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonButton color='danger' fill='clear' onClick={props.dismissModal}>
                            Cancelar
                        </IonButton>
                    </IonCol>
                    <IonCol className='ion-text-center'>
                        <IonButton color='primary' fill='clear' onClick={() => confirmCompletion(props.activity.id)}>
                            Aceptar
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CompleteModalActivity;