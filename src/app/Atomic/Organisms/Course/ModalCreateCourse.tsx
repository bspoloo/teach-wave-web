import React from 'react';
import { ModalProps } from '@/app/props/props';
import useCourse from '@/app/hooks/useCourse';
import DataCreateCourse from '../../Molecules/DataCreateCourse';
import useCreateCourse from '@/app/hooks/useCreateCourse';

export default function ModalCreateCourse({ isOpen, onClose, session }: ModalProps) {

    if (!isOpen) return null;

    return (
        <>
            <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-5 w-1/3">
                    <DataCreateCourse session={session} />
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
