import { useEffect, useState } from "react";
import getData from "../functions/getData";
import { TEACHWVE_API } from "../constants/baseUrls";

export default function useCourses(endpoint: string, session: any, refresh:boolean): { courses: any | null, loading: boolean } {
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            if (session) {
                const token = session.accessToken || "";
                const response = await getData(TEACHWVE_API, endpoint, token);
                
                if (response.success) {
                    setCourses(response.courses);
                } else {
                    setCourses([]);
                }
            }
            setLoading(false);
        };

        fetchData();
    }, [session, refresh]);

    return { courses, loading };
}