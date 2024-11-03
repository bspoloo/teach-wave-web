import { useState } from "react";
import { CourseCreate, CourseProps } from "../props/props";
import { TEACHWVE_API } from "../constants/baseUrls";



export default function useCreateCourse() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState(false);

    const createCourse = async (data: CourseCreate, endopint: string, session: any) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        console.log(session);
        try {
            const response = await fetch(`${TEACHWVE_API}${endopint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.accessToken}`,
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Failed to create course: ${response.statusText}`);
            }
            
            setSuccess(true);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };
    return { createCourse, loading, error, success };
}