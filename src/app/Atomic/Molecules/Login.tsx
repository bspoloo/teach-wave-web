"use client";
import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <button
            onClick={() => signIn("keycloak")}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-200"
        >
            Sign in with Keycloak
        </button>
    );
}
