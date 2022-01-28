import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';

const Courses: React.FC = () => {
    return (
        <React.Fragment>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Courses</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>This works - courses page!</h2>
            </IonContent>
        </React.Fragment>
    );
};

export default Courses;
