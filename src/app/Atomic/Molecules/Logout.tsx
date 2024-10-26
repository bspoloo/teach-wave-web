"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
    return (
        <button
            onClick={() => signOut()}
            className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-red-700 transition duration-200"
        >
            Sign out of Keycloak
        </button>
    );
}
