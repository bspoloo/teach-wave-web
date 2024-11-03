import React from 'react';
import { ModalProps } from '@/app/props/props';
import useCourse from '@/app/hooks/useCourse';
import DataUpdateCourse from '../../Molecules/DataUpdateCourse';

export default function ModalUpdateCourse({ id, isOpen, onClose, session }: ModalProps) {
    const { course, loading } = useCourse(`courses/${id}`, session);    

    if (!isOpen) return null;

    if (loading) return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-1/3 text-center">
                <p className="text-gray-600">Loading...</p>
            </div>
        </div>
    );
    return (
        <>
            <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-5 w-1/3">
                    {course.id == id ? (
                        <DataUpdateCourse course={course} session={session}/>
                    ) : (
                        <p className="mt-2 text-gray-600">No course data available.</p>
                    )}

                    <button
                        className="mt-4 px-4 py-2 bg-[#5e81f4] text-white rounded hover:bg-blue-600"
                        onClick={onClose}
                    >
                        Acpetar
                    </button>
                </div>
            </div>
        </>
    );
}
