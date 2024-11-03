"use client";

import { useEffect, useState } from "react";
import useCourses from "@/app/hooks/useCourses";
import Searcher from "@/app/Atomic/Atoms/Searcher";
import Course from "@/app/Atomic/Organisms/Course/Course";
import { CourseProps } from "@/app/props/props";
import ModalUpdateCourse from "@/app/Atomic/Organisms/Course/ModalUpdateCourse";
import ModalDeleteCourse from "@/app/Atomic/Organisms/Course/ModalDeleteCourse";
import ButtonDelete from "@/app/Atomic/Molecules/ButonDelete";
import ButtonCreate from "@/app/Atomic/Molecules/ButtonCreate";
import ModalCreateCourse from "@/app/Atomic/Organisms/Course/ModalCreateCourse";

export default function ClientComponent({ session }: { session: any }) {
    const [refresh, setRefresh] = useState(false);
    const { courses, loading } = useCourses("courses", session, refresh);
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);
    const [id, setID] = useState(0);

    const handleOpenModalUpdate = (id: number) => {

        setIsModalOpenUpdate(true);
        setID(id);
    };

    const handleCloseModalUpdate = () => {
        setIsModalOpenUpdate(false);
        setRefresh(prev => !prev);
    };

    const handleOpenModalDelete = (id: number) => {
        setIsModalOpenDelete(true);
        setID(id);
    };

    const handleCloseModalDelete = () => {
        setIsModalOpenDelete(false);
        setRefresh(prev => !prev);
    };
    const handleOpenModalCreate = () => {
        setIsModalOpenCreate(true);
    };

    const handleCloseModalCreate = () => {
        setIsModalOpenCreate(false);
        console.log(courses);
        setRefresh(prev => !prev);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <div className="w-full">
                <div className="w-full flex justify-center items-center bg-[#eceffc] h-[80px] gap-4 p-10">
                    <Searcher
                        type="text"
                        placeholder="Busca un Curso"
                        classname="search-input"
                        onChange={() => {
                            console.log("hola");
                        }}
                    />
                    <ButtonCreate text="Crear un curso" onClick={handleOpenModalCreate} />
                </div>
                <div className="flex flex-row w-full justify-center gap-5 flex-wrap p-5 max-h-[87vh] overflow-auto">
                    {courses ? (
                        courses.map((course: CourseProps) => (
                            <div
                                key={course.id}
                                className="relative bg-white shadow-md rounded-lg p-6 mb-4 transition-transform transform hover:scale-105"
                            >
                                <ButtonDelete
                                    onClick={() => handleOpenModalDelete(course.id)}
                                />
                                <Course
                                    id={course.id}
                                    title={course.title}
                                    description={course.description}
                                    instructorId={course.instructorId}
                                    createdAt={course.createdAt}
                                    updatedAt={course.updatedAt}
                                    onClick={ () => handleOpenModalUpdate(course.id)}
                                    session={session}
                                />
                            </div>
                        ))
                    ) : (
                        <div>No course data available</div>
                    )}
                </div>
            </div>

            <ModalUpdateCourse
                session={session}
                id={id}
                isOpen={isModalOpenUpdate}
                onClose={handleCloseModalUpdate}
            />

            <ModalDeleteCourse
                session={session}
                id={id}
                isOpen={isModalOpenDelete}
                onClose={handleCloseModalDelete}
            />
            
            <ModalCreateCourse
                session={session}
                id={id}
                isOpen={isModalOpenCreate}
                onClose={handleCloseModalCreate}
            />
        </>
    );
}
