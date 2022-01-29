import React from 'react';
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonInput,
    IonItem,
    IonLabel,
    IonModal,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";

const AddCourseModal: React.FC<{show: boolean; onCancel: () => void}> = props => {
    return (
        <IonModal isOpen={props.show}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add Course</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Course Title</IonLabel>
                                <IonInput />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <IonButton color="dark" fill="clear" onClick={props.onCancel}>Cancel</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="secondary">Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    )
};

export default AddCourseModal;
