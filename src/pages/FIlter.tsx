import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

const Filter: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Filter</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>The filter page...</h2>
            </IonContent>
        </IonPage>
    )
};

export default Filter;
