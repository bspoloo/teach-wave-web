import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { signIn, signOut, useSession } from "next-auth/react";
import { sign } from "crypto";
import Login from "./Atomic/Organisms/Login";
import Logout from "./Atomic/Organisms/Logout";
import Presentation from "./Atomic/Organisms/Presentation";
import MenuVertical from "./Atomic/Organisms/MenuVertical";

export default async function Home() {
  const session = await getServerSession(authOptions)
  const className = ''

  if (session) {
    return <div className={className}>
      <div>
        <MenuVertical/>
      </div>
      
    </div>
  }
  return (
    <div className={className}>
      <Login />
    </div>
  )
}
