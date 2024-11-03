import Searcher from "@/app/Atomic/Atoms/Searcher";
import useCourse from "@/app/hooks/useCourses";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getToken } from "next-auth/jwt";
import ClientComponent from "./ClientComponent";

export default async function Page() {
    const session = await getServerSession(authOptions);
    return (
        <main className="flex page-space flex-col items-center justify-between flex-wrap gap-9 w-[86%]">
                <ClientComponent session={session} />
        </main>
    )
}