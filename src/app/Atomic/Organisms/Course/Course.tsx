import { CourseProps } from "@/app/props/props";
import ButtonDelete from "../../Molecules/ButonDelete";

export default function Course({ id, title, description, instructorId, createdAt, updatedAt, onClick }: CourseProps) {
    return (
        <>
            <div
                onClick={onClick}
                className="cursor-pointer">

                <h1 className="text-2xl font-semibold text-gray-800 mb-2">Titulo: {title}</h1>
                <h2 className="text-lg font-medium text-gray-600 mb-4">Course ID: {id}</h2>
                <p className="text-gray-700 mb-4">{description}</p>

                <div className="text-sm text-gray-500 space-y-1">
                    <p>Instructor ID: {instructorId}</p>
                    <p>Created At: {new Date(createdAt).toLocaleDateString()}</p>
                    <p>Updated At: {new Date(updatedAt).toLocaleDateString()}</p>
                </div>
            </div>
        </>
    );
}
