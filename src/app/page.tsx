import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { signIn, signOut, useSession } from "next-auth/react";
import { sign } from "crypto";
import Login from "./Atomic/Molecules/Login";
import Logout from "./Atomic/Molecules/Logout";

export default async function Home() {

  const session = await getServerSession(authOptions)
  const className = 'grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'
  if (session) {
    return <div className={className}>
      <div>Your name is {session.user?.name}</div>
      <div><Logout /> </div>
    </div>
  }
  return (
    <div className={className}>
      <Login />
    </div>
  )
}
