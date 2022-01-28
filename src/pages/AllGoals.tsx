import React from 'react';
import {IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonPage} from '@ionic/react';

const AllGoals: React.FC = () => {


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All goals</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>This works - all goals page!</h2>
            </IonContent>
        </IonPage>
    );
};

export default AllGoals;
