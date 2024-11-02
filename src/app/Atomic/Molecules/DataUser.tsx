import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import Title from "./Title"
import Image from "../Atoms/Image"
import Admin from "../../resources/images/app/admin.png"

export default async function DataUser() {
    const session = await getServerSession(authOptions)
    return (
        <div className="flex flex-row justify-center items-center">
            <div className="flex justify-center items-center">
                <Image
                    url={Admin.src}
                    alt="Image of admin"
                    classname="rounded-full bg-[#5e81f4] p-3"
                    width={80}
                />
            </div>

            <Title textContent={session?.user?.name ?? "Guest"}
                className='font-semibold py-2 px-4 rounded-md  text-[30px] text-[#5e81f4]'
                fontFamily="" />
        </div>
    )

}