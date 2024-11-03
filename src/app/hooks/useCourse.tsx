import { useEffect, useState } from "react";
import getData from "../functions/getData";
import { TEACHWVE_API } from "../constants/baseUrls";

export default function useCourse(endpoint: string, session: any): { course: any | null, loading: boolean } {
    const [course, setCourse] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            if (session) {
                const token = session.accessToken || "";
                const response = await getData(TEACHWVE_API, endpoint, token);
                
                if (response.success) {
                    setCourse(response.course);
                } else {
                    setCourse(null);
                }
            }
            setLoading(false);
        };
        
        fetchData();
    }, [session, endpoint]);

    return { course, loading };
}
