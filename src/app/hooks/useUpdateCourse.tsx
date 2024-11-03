import { useState } from "react";
import { CourseProps } from "../props/props";
import { TEACHWVE_API } from "../constants/baseUrls";



export default function useUpdateCourse() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState(false);

    const updateCourse = async (id: number, data: CourseProps, endopint: string, session: any) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const response = await fetch(`${TEACHWVE_API}${endopint}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.accessToken}`,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Failed to update course: ${response.statusText}`);
            }

            setSuccess(true);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };
    return { updateCourse, loading, error, success };
}