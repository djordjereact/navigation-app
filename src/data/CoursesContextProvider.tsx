import React, { useState } from 'react';
import CoursesContext, { Course } from "./courses-context";

const CoursesContextProvider: React.FC = props => {
    const [courses, setCourses] = useState<Course[]>([
        { id: 'c1', title: 'React - The Complete Guide', goals: [] }
    ]);

    const addCourse = (title: string) => {
        const newCourse: Course = {
            id: Math.random().toString(),
            title,
            goals: []
        };

        setCourses(curCourses => {
            return curCourses.concat(newCourse);
        });
    };

    const addGoal = () => {};

    const deleteGoal = () => {};

    const updateGoal = () => {};

    return (
            <CoursesContext.Provider
                value={{
                    courses,
                    addGoal,
                    addCourse,
                    deleteGoal,
                    updateGoal
                }}>
                {props.children}
            </CoursesContext.Provider>
        )
};

export default CoursesContextProvider;
