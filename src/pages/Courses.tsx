import React from 'react';
import {IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonPage} from '@ionic/react';

const Courses: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Courses</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>This works - courses page!</h2>
                <IonButton routerLink="/course-goals">To course goals</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Courses;
