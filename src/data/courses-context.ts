import React from "react";

export interface Goal {
    id: string, text: string
}

export interface Course {
    id: string;
    title: string;
    goals: Goal[];
}
interface Context {
    courses: Course[];
    addCourse: (courseTitle: string) => void;
    addGoal: (courseId: string, goalText: string) => void;
    deleteGoal: (courseId: string, goalId: string) => void;
    updateGoal: (courseId: string, goalId: string, newText: string) => void;
}

const CoursesContext = React.createContext<Context>({
    courses: [],
    addCourse: () => {},
    addGoal: () => {},
    deleteGoal: () => {},
    updateGoal: () => {}
});

export default CoursesContext;
