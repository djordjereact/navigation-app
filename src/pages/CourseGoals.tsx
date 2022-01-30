import React, { useState, useRef } from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonList,
    IonIcon,
    IonButton,
    IonFab,
    IonFabButton,
    isPlatform, IonAlert, IonToast,
} from '@ionic/react';
import { useParams } from 'react-router-dom'
import { COURSE_DATA } from "./Courses";
import { addOutline } from "ionicons/icons";
import EditModal from "../components/EditModal";
import EditableGoalItem from "../components/EditableGoalItem";

const CourseGoals: React.FC = () => {
    const [startedDeleting, setStartedDeleting] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState<any>();

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

    const selectedCourseId = useParams<{ courseId: string }>().courseId;

    const selectedCourse = COURSE_DATA.find(c => c.id === selectedCourseId);

    const startDeleteGoalHandler = () => {
        setStartedDeleting(true);
    };

    const deleteGoalHandler = () => {
        setStartedDeleting(false);
        setToastMessage('Deleted goal!');
    };

    const startEditGoalHandler = (goalId: string, event: React.MouseEvent) => {
        event.stopPropagation();
        const goal = selectedCourse?.goals.find(g => g.id === goalId);
        slidingOptionsRef.current?.closeOpened();
        if (!goal) {
            return;
        }
        setIsEditing(true);
        setSelectedGoal(goal);
    };

    const cancelEditGoalHandler = () => {
        setIsEditing(false);
        setSelectedGoal(null);
    };

    const startAddGoalHandler = () => {
        setIsEditing(true);
        setSelectedGoal(null);
    };

    return (
        <React.Fragment>
            <EditModal
                show={isEditing}
                onCancel={cancelEditGoalHandler}
                editedGoal={selectedGoal}
            />
            <IonToast
                isOpen={!!toastMessage}
                message={toastMessage}
                duration={2000}
                onDidDismiss={() => {
                    setToastMessage('');
                }}
            />
            <IonAlert
                isOpen={startedDeleting}
                header="Are you sure?"
                message="Do you want to delete the goal? This cannot be undone."
                buttons={[
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            setStartedDeleting(false);
                        }
                    },
                    {
                        text: 'Yes',
                        handler: deleteGoalHandler
                    }
                ]}
            />
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/courses/list" />
                        </IonButtons>
                        <IonTitle>
                            {selectedCourse ? selectedCourse.title : 'No course found!'}
                        </IonTitle>
                        {!isPlatform('android') && (
                            <IonButtons slot="end">
                                <IonButton onClick={startAddGoalHandler}>
                                    <IonIcon slot="icon-only" icon={addOutline} />
                                </IonButton>
                            </IonButtons>
                        )}
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {selectedCourse && (
                        <IonList>
                            {selectedCourse.goals.map(goal => (
                                <EditableGoalItem
                                    key={goal.id}
                                    slidingRef={slidingOptionsRef}
                                    onStartDelete={startDeleteGoalHandler}
                                    onStartEdit={startEditGoalHandler.bind(null, goal.id)}
                                    text={goal.text} />
                            ))}
                        </IonList>
                    )}
                    {isPlatform('android') && (
                        <IonFab horizontal="end" vertical="bottom">
                            <IonFabButton color="secondary" onClick={startAddGoalHandler}>
                                <IonIcon icon={addOutline} />
                            </IonFabButton>
                        </IonFab>
                    )}
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default CourseGoals;
