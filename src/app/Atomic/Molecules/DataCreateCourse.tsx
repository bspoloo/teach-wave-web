import useCreateCourse from "@/app/hooks/useCreateCourse";
import useUpdateCourse from "@/app/hooks/useUpdateCourse";
import { useState } from "react";


export default function DataCreateCourse({ session }: { session: any }) {
    const { createCourse, loading, error, success } = useCreateCourse();
    
    const [formData, setFormData] = useState({
        title: "",
        description:"",
        instructorId: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createCourse({
            ...formData,
            title: formData.title,
            description: formData.description,
            instructorId: Number(formData.instructorId),
        }, "courses", session);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-4 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Crear un Curso</h2>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Titulo</label>
                <input
                    placeholder="Inserte el titulo"
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
                    placeholder="Inserte la descripcion"
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
                    placeholder="Inserte el Instructor"
                    type="text"
                    id="instructorId"
                    name="instructorId"
                    value={formData.instructorId}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
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