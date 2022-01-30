import React from 'react';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/react";

const CourseItem: React.FC<{
    title: string;
    id: string;
}> = props => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{props.title}</IonCardTitle>
                <IonCardSubtitle>
                    Enrolled
                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <div className="ion-text-right">
                    <IonButton fill="clear" color="secondary" routerLink={`/courses/${props.id}`}>View Course Goals</IonButton>
                </div>
            </IonCardContent>
        </IonCard>
    )
}

export default CourseItem;
