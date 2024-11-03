import React from 'react';
import { ModalProps } from '@/app/props/props';
import useCourse from '@/app/hooks/useCourse';
import DataUpdateCourse from '../../Molecules/DataUpdateCourse';
import useDeleteCourse from '@/app/hooks/useDeleteCourse';

export default function ModalDeleteCourse({ id, isOpen, onClose, session }: ModalProps) {

    const { course } = useCourse(`courses/${id}`, session);
    const { deleteCourse, loading, error, success } = useDeleteCourse();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await deleteCourse(id, "courses", session);
        onClose()
    };

    if (!isOpen) return null;

    if (loading) return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-1/3 text-center">
                <p className="text-gray-600">Loading...</p>
            </div>
        </div>
    );

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-4 border border-gray-200">

            {course ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 md:mx-0 md:w-1/3">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Confirmar Eliminación</h2>
                        <p className="text-gray-600 mb-6">
                            ¿Estás seguro de que deseas eliminar el curso <strong>{course?.title}</strong>?
                        </p>
                        <div className="flex justify-end space-x-3 mt-6">

                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-200"
                                onClick={onClose}
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-150">
                                {loading ? 'Deleting...' : 'Elimiar'}
                            </button>
                            {error && <p>Error: {error.message}</p>}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 md:mx-0 md:w-1/3">
                        <p className="mt-2 text-gray-600">No course data available.</p>

                        <div className="flex justify-end space-x-3 mt-6">
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-200"
                                onClick={onClose}
                            >
                                Acpetar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
}
