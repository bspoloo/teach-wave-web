import useUpdateCourse from "@/app/hooks/useUpdateCourse";
import { title } from "process";
import { useState } from "react";

export default function DataUpdateCourse({ course, session }: { course: any, session: any }) {
    const { updateCourse, loading, error, success } = useUpdateCourse();

    // console.log(course);

    const [formData, setFormData] = useState({
        title: course.title || "",
        description: course.description || "",
        instructorId: course.instructorId || "",
        createdAt: course.createdAt || "",
        updatedAt: course.updatedAt || ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateCourse(course.id, { ...formData, id: course.id, session, onClick: () => { } }, "courses", session);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-4 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Actualizar Curso</h2>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Titulo</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Descripción</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="instructorId" className="block text-gray-700 font-medium mb-1">ID del Instructor</label>
                <input
                    type="text"
                    id="instructorId"
                    name="instructorId"
                    value={formData.instructorId}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="createdAt" className="block text-gray-700 font-medium mb-1">Fecha de Creación</label>
                <input
                    type="text"
                    id="createdAt"
                    name="createdAt"
                    value={new Date(formData.createdAt).toLocaleDateString()}
                    readOnly
                    className="w-full p-2 border rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="updatedAt" className="block text-gray-700 font-medium mb-1">Última Actualización</label>
                <input
                    type="text"
                    id="updatedAt"
                    name="updatedAt"
                    value={new Date(formData.updatedAt).toLocaleDateString()}
                    readOnly
                    className="w-full p-2 border rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-150">
                {loading ? 'Updating...' : 'Guardar cambios'}
            </button>

            {success && <p>Course updated successfully!</p>}
            {error && <p>Error: {error.message}</p>}
        </form>

    );
}
