import React from 'react';
import {IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton} from '@ionic/react';
import { useParams } from 'react-router-dom'
import {COURSE_DATA} from "./Courses";

const CourseGoals: React.FC = () => {
    const selectedCourseId = useParams<{courseId: string}>().courseId;

    const selectedCourse = COURSE_DATA.find(c => c.id === selectedCourseId)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton  defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>{selectedCourse ? selectedCourse.title : 'No course find!'}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>This works - course goals page!</h2>
            </IonContent>
        </IonPage>
    )
}

export default CourseGoals;
