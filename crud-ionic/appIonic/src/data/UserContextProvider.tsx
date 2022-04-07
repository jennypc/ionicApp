import React, { useState, Component } from 'react';
import ActivitiesContext, { Activity, ActivitiesContextModel} from './users-context';

const ActivitiesContextProvider: React.FC = (props) => {
   
    const [activities, setActivities] = useState<Activity[]>([
        {
            id: Math.random().toString(),
            nombre: '',
            description: '',
            delete: false
        },
        {
            id: Math.random().toString(),
            nombre: '',
            description: '',
            delete: false
        },
      
    ]);

    const addActivity = (nombre: string, description: string) => {
       
        const addActivity: Activity = {
            id: Math.random().toString(),
            nombre,
            description,
            delete: false
        };

        setActivities(currActivities => {
            return [...currActivities, addActivity]
        })
    };


    const Editar = (nombre: string, description: string) => {
       

        const Editar: Activity = {
            id: Math.random().toString(),
            nombre,
            description,
            delete: false
        };

       
    };

    const completeActivity = (activityId: string) => {
        setActivities(currActivities => {
            const updatedActivities = [...currActivities];
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            const updatedActivity = {...updatedActivities[selectedActivityIndex], delete: true};
            updatedActivities[selectedActivityIndex] = updatedActivity;
            return updatedActivities;
        });
    };

    const activitiesContext: ActivitiesContextModel = {
        activities,
        addActivity,
        completeActivity,
        Editar
    };

    return (
        <ActivitiesContext.Provider value={activitiesContext}>
            {props.children}
        </ActivitiesContext.Provider>
    );
};

export default ActivitiesContextProvider;