import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import ButtonLogout from "../Molecules/ButtonLogout"
import Title from "../Molecules/Title"

export default async function Logout() {
    const session = await getServerSession(authOptions)
    return (
        <div className=" flex flex-col ml-36 gap-3 flex-wrap justify-center items-center h-screen ">
            <Title textContent={session?.user?.name ?? "Guest"} 
                        className=' font-semibold py-2 px-4 rounded-md  text-[40px]  hover:bg-slate-200 transition duration-200'
                        fontFamily="" />
            <ButtonLogout />
        </div>
    )
}