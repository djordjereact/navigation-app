import React from 'react';
import {IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton} from '@ionic/react';

const CourseGoals: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton  defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>Course Goals</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>This works - course goals page!</h2>
            </IonContent>
        </IonPage>
    )
}

export default CourseGoals;
