import { useState } from "react";
import { CourseProps } from "../props/props";
import { TEACHWVE_API } from "../constants/baseUrls";



export default function useDeleteCourse() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState(false);

    const deleteCourse = async (id: number, endopint: string, session: any) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const response = await fetch(`${TEACHWVE_API}${endopint}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.accessToken}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to delete course: ${response.statusText}`);
            }

            setSuccess(true);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };
    return { deleteCourse, loading, error, success };
}