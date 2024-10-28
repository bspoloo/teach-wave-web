"use client";
import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <button
            onClick={() => signIn("keycloak")}
            className="bg-[#5371F2] text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-[#3248a9] transition duration-200">
            Sign in with Keycloak
        </button>
    );
}
