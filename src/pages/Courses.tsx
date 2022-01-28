import React from 'react';
import {IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonPage} from '@ionic/react';
// import { useHistory } from 'react-router-dom'

const Courses: React.FC = () => {
    // const history = useHistory();
    // const changePageHandler = () => {
    //     history.push('/course-goals');
    // };

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
                {/*<IonButton onClick={changePageHandler}>To course goals</IonButton>*/}
            </IonContent>
        </IonPage>
    );
};

export default Courses;
