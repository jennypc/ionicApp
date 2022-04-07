import React from 'react';


export interface Activity {
    id: string;
    nombre: string;
    description: string;
    delete: boolean;
}

export interface ActivitiesContextModel {
    activities: Activity[];
    addActivity: (nombre: string, description: string) => void;
    completeActivity: (activityId: string) => void;
    Editar:(nombre:string, description:string) => void;
}

const ActivitiesContext = React.createContext<ActivitiesContextModel>({
    activities: [],
    addActivity: () => {},
    completeActivity: () => {},
    Editar: () => {}
});

export default ActivitiesContext;